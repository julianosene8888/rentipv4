import { Button } from "@/components/ui/button";
import { Plus, Server, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { auth } from "@/auth";
import { IpamService } from "@/lib/ipam";
import { prisma } from "@/lib/prisma";
import { BlockStatus } from "@prisma/client";
import Link from "next/link";

export default async function DashboardPage() {
    const session = await auth();

    // Safety check - middleware should catch this but good to have
    if (!session?.user?.id) return null;

    const stats = await IpamService.getUserStats(session.user.id);

    // Fetch recent blocks
    const myBlocks = await prisma.ipBlock.findMany({
        where: { renterId: session.user.id },
        take: 5,
        orderBy: { createdAt: 'desc' }
    });

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-white">Visão Geral</h1>
                    <p className="text-zinc-400">Gerencie seus blocos e faturas.</p>
                </div>
                <Link href="/">
                    <Button className="bg-indigo-600 hover:bg-indigo-700 gap-2">
                        <Plus className="h-4 w-4" />
                        Novo Aluguel
                    </Button>
                </Link>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
                {/* Stats Card 1 */}
                <div className="p-6 rounded-xl bg-white/5 border border-white/10 shadow-sm">
                    <div className="flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-indigo-500/10 text-indigo-400">
                            <Server className="h-6 w-6" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-zinc-400">Blocos Ativos</p>
                            <h3 className="text-2xl font-bold text-white">{stats.activeBlocks}</h3>
                        </div>
                    </div>
                </div>

                {/* Stats Card 2 */}
                <div className="p-6 rounded-xl bg-white/5 border border-white/10 shadow-sm">
                    <div className="flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-green-500/10 text-green-400">
                            <Server className="h-6 w-6" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-zinc-400">IPv4 Total</p>
                            <h3 className="text-2xl font-bold text-white">{stats.totalIps}</h3>
                        </div>
                    </div>
                </div>

                {/* Stats Card 3 */}
                <div className="p-6 rounded-xl bg-white/5 border border-white/10 shadow-sm">
                    <div className="flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-yellow-500/10 text-yellow-400">
                            <AlertCircle className="h-6 w-6" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-zinc-400">Próxima Fatura</p>
                            <h3 className="text-2xl font-bold text-white">
                                {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(Number(stats.nextBill))}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>

            {/* Active Blocks List */}
            <div className="rounded-xl border border-white/10 bg-black/40 overflow-hidden">
                <div className="p-6 border-b border-white/10">
                    <h3 className="font-semibold text-white">Meus Blocos Alugados</h3>
                </div>
                <div className="relative w-full overflow-auto">
                    {myBlocks.length === 0 ? (
                        <div className="p-8 text-center text-zinc-500">
                            Você ainda não possui blocos alugados.
                        </div>
                    ) : (
                        <table className="w-full text-sm text-left">
                            <thead className="bg-white/5 text-zinc-400">
                                <tr>
                                    <th className="px-6 py-3 font-medium">Bloco (CIDR)</th>
                                    <th className="px-6 py-3 font-medium">ASN Origem</th>
                                    <th className="px-6 py-3 font-medium">Status</th>
                                    <th className="px-6 py-3 font-medium">Valor</th>
                                    <th className="px-6 py-3 font-medium text-right">Ação</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/10 text-zinc-300">
                                {myBlocks.map((block) => (
                                    <tr key={block.id} className="hover:bg-white/5 transition-colors">
                                        <td className="px-6 py-4 font-medium text-white">{block.cidr}</td>
                                        <td className="px-6 py-4">{block.asn}</td>
                                        <td className="px-6 py-4">
                                            <span className={cn(
                                                "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
                                                block.status === "RENTED" ? "bg-green-500/10 text-green-500" :
                                                    block.status === "SUSPENDED" ? "bg-red-500/10 text-red-500" :
                                                        "bg-yellow-500/10 text-yellow-500"
                                            )}>
                                                {block.status === "RENTED" ? "Ativo" : block.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(Number(block.price))}
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <Link href={`/dashboard/blocks/${block.id}`}>
                                                <Button variant="ghost" size="sm" className="hover:text-white hover:bg-white/10">
                                                    Gerenciar
                                                </Button>
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    );
}
