import { prisma } from "@/lib/prisma";
import { BlockStatus } from "@prisma/client";

export class IpamService {
    // Basic helper to calculate subnet size
    static getSubnetSize(cidr: string): number {
        const mask = parseInt(cidr.split('/')[1]);
        return Math.pow(2, 32 - mask);
    }

    // Helper to calculate next billing date
    static getNextBillingDate(): Date {
        const date = new Date();
        // Typically due on the 15th of next month
        date.setMonth(date.getMonth() + 1);
        date.setDate(15);
        return date;
    }

    // Assign a block to a renter
    static async rentBlock(userId: string, cidr: string) {
        // 1. Check availability
        const block = await prisma.ipBlock.findUnique({
            where: { cidr },
        });

        if (!block || block.status !== BlockStatus.AVAILABLE) {
            throw new Error("Bloco indisponível ou inexistente.");
        }

        // 2. Transact: Update Block Status + Create Invoice
        return await prisma.$transaction(async (tx) => {
            const updatedBlock = await tx.ipBlock.update({
                where: { cidr },
                data: {
                    status: BlockStatus.RENTED,
                    renterId: userId,
                }
            });

            // First Invoice (Pro-rata or Full) - Mocking full value for now
            await tx.invoice.create({
                data: {
                    amount: block.price,
                    status: "PENDING",
                    dueDate: this.getNextBillingDate(),
                    monthRef: new Date().toLocaleDateString('pt-BR', { month: '2-digit', year: 'numeric' }),
                    userId: userId,
                }
            });

            return updatedBlock;
        });
    }

    // Register a new block (Partner flow)
    static async registerBlock(ownerId: string, cidr: string, asn: string, price: number) {
        // Basic validation
        if (!cidr.includes('/')) throw new Error("CIDR inválido");

        return await prisma.ipBlock.create({
            data: {
                cidr,
                asn,
                price,
                status: BlockStatus.AVAILABLE,
                ownerId,
            }
        });
    }

    // Get stats for a user
    static async getUserStats(userId: string) {
        const activeBlocks = await prisma.ipBlock.count({
            where: { renterId: userId, status: BlockStatus.RENTED }
        });

        // Sum IPs (rough estimate based on count * 256 for now, can be improved)
        const totalIps = activeBlocks * 256;

        // Get next invoice amount
        const nextInvoice = await prisma.invoice.findFirst({
            where: { userId, status: "PENDING" },
            orderBy: { dueDate: 'asc' }
        });

        return {
            activeBlocks,
            totalIps,
            nextBill: nextInvoice?.amount ? Number(nextInvoice.amount) : 0
        };
    }
}
