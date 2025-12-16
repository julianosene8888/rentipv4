import { Button } from "@/components/ui/button";
import { Network, Search, MoreVertical } from "lucide-react";
import Link from "next/link";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { cn } from "@/lib/utils";

export default async function BlocksPage() {
    const session = await auth();
    if (!session?.user?.id) return null;

    const myBlocks = await prisma.ipBlock.findMany({
        where: { renterId: session.user.id },
        orderBy: { cidr: 'asc' }
    });

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-white">Meus Blocos</h1>
                    <p className="text-zinc-400">Gerencie seus recursos IPv4 ativos.</p>
                </div>
                <Link href="/">
                    <Button variant="outline" className="border-white/10 text-zinc-400 hover:text-white hover:bg-white/5">
                        <Search className="h-4 w-4 mr-2" />
                        Alugar Novo Bloco
                    </Button>
                </Link>
            </div>

            <div className="rounded-xl border border-white/10 bg-black/40 overflow-hidden">
                {myBlocks.length === 0 ? (
                    <div className="p-12 text-center">
                        <p className="text-zinc-500 mb-4">Você ainda não tem blocos alugados.</p>
                        <Link href="/">
                            <Button className="bg-indigo-600 hover:bg-indigo-700">Encontrar Blocos</Button>
                        </Link>
                    </div>
                ) : (
                    <table className="w-full text-sm text-left">
                        <thead className="bg-white/5 text-zinc-400">
                            <tr>
                                <th className="px-6 py-4 font-medium">Bloco CIDR</th>
                                <th className="px-6 py-4 font-medium">ASN</th>
                                <th className="px-6 py-4 font-medium">Valor Mensal</th>
                                <th className="px-6 py-4 font-medium">Status</th>
                                <th className="px-6 py-4 font-medium text-right">Detalhes</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/10 text-zinc-300">
                            {myBlocks.map((block, i) => (
                                <tr key={i} className="hover:bg-white/5 transition-colors">
                                    <td className="px-6 py-4 font-mono text-white flex items-center gap-2">
                                        <Network className="h-4 w-4 text-indigo-400" />
                                        {block.cidr}
                                    </td>
                                    <td className="px-6 py-4">{block.asn}</td>
                                    <td className="px-6 py-4">
                                        {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(Number(block.price))}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={cn(
                                            "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
                                            block.status === "RENTED" ? "text-green-500 bg-green-500/10 border border-green-500/20" :
                                                "text-yellow-500 bg-yellow-500/10 border border-yellow-500/20"
                                        )}>
                                            {block.status === "RENTED" ? "ATIVO" : block.status}
                                        </span>
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
    );
}
