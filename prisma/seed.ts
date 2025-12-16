import { PrismaClient, BlockStatus, UserRole } from '@prisma/client'
import bcrypt from 'bcryptjs'
import { Pool } from 'pg'
import { PrismaPg } from '@prisma/adapter-pg'

const connectionString = process.env.DATABASE_URL as string
const pool = new Pool({ connectionString })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

async function main() {
    console.log('🌱 Starting seed...')

    // 1. Create Users
    const passwordHash = await bcrypt.hash('123456', 10)

    const partner = await prisma.user.upsert({
        where: { email: 'parceiro@megatelecom.com.br' },
        update: {},
        create: {
            email: 'parceiro@megatelecom.com.br',
            name: 'Megatelecom Telecomunicações',
            password: passwordHash,
            role: UserRole.OWNER,
            company: 'Megatelecom'
        },
    })

    const renter = await prisma.user.upsert({
        where: { email: 'cliente@provedorxyz.com.br' },
        update: {},
        create: {
            email: 'cliente@provedorxyz.com.br',
            name: 'Provedor XYZ',
            password: passwordHash,
            role: UserRole.RENTER,
            company: 'Provedor XYZ Ltda'
        },
    })

    const admin = await prisma.user.upsert({
        where: { email: 'admin@rentipv4.com' },
        update: {},
        create: {
            email: 'admin@rentipv4.com',
            name: 'Admin RentIPv4',
            password: passwordHash,
            role: UserRole.ADMIN,
        },
    })

    // 2. Create Blocks (AS22381)
    const blocks = [
        // /24 blocks
        { cidr: '200.150.173.0/24', status: BlockStatus.AVAILABLE, price: 900.00 },
        { cidr: '200.150.171.0/24', status: BlockStatus.AVAILABLE, price: 900.00 },
        { cidr: '200.150.168.0/24', status: BlockStatus.RENTED, renterId: renter.id, price: 850.00 },
        { cidr: '200.150.166.0/24', status: BlockStatus.AVAILABLE, price: 900.00 },

        // /22 block (represented as is, though usually split)
        { cidr: '200.150.160.0/22', status: BlockStatus.AVAILABLE, price: 3500.00 },

        // More /24s
        { cidr: '201.87.143.0/24', status: BlockStatus.SUSPENDED, renterId: renter.id, price: 900.00 }, // Suspended example
        { cidr: '201.87.138.0/24', status: BlockStatus.AVAILABLE, price: 900.00 },
        { cidr: '201.87.132.0/24', status: BlockStatus.AVAILABLE, price: 900.00 },
        { cidr: '201.87.130.0/24', status: BlockStatus.AVAILABLE, price: 900.00 },
        { cidr: '201.87.129.0/24', status: BlockStatus.AVAILABLE, price: 900.00 },
        { cidr: '201.87.156.0/24', status: BlockStatus.RESERVED, price: 0.00 }, // Reserved internal
    ]

    for (const block of blocks) {
        await prisma.ipBlock.upsert({
            where: { cidr: block.cidr },
            update: {},
            create: {
                cidr: block.cidr,
                asn: 'AS22381',
                status: block.status,
                price: block.price,
                ownerId: partner.id,
                renterId: block.renterId,
            },
        })
    }

    // 3. Create Invoices for Rented Blocks
    if (renter) {
        // Pending Invoice
        await prisma.invoice.create({
            data: {
                amount: 850.00,
                dueDate: new Date(new Date().setDate(new Date().getDate() + 5)), // Due in 5 days
                monthRef: '01/2026',
                status: 'PENDING',
                userId: renter.id
            }
        })

        // Paid Invoice
        await prisma.invoice.create({
            data: {
                amount: 850.00,
                dueDate: new Date(new Date().setDate(new Date().getDate() - 30)), // Last month
                monthRef: '12/2025',
                status: 'PAID',
                userId: renter.id
            }
        })
    }

    console.log('✅ Seed completed with AS22381 data.')
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
