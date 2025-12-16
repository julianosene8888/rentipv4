"use client";

import { Button } from "@/components/ui/button";
import { Network, Search, MoreVertical } from "lucide-react";
import Link from "next/link";

export default function BlocksPage() {
    const blocks = [
        { cidr: "200.150.100.0/24", asn: "AS42000", price: "R$ 1.250,00", nextBill: "15/01/2026", status: "ACTIVE" },
        { cidr: "170.20.0.0/24", asn: "AS15000", price: "R$ 1.250,00", nextBill: "15/01/2026", status: "ACTIVE" },
    ];

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
                        {blocks.map((block, i) => (
                            <tr key={i} className="hover:bg-white/5 transition-colors">
                                <td className="px-6 py-4 font-mono text-white flex items-center gap-2">
                                    <Network className="h-4 w-4 text-indigo-400" />
                                    {block.cidr}
                                </td>
                                <td className="px-6 py-4">{block.asn}</td>
                                <td className="px-6 py-4">{block.price}</td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium text-green-500 bg-green-500/10 border border-green-500/20">
                                        {block.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <Link href={`/dashboard/blocks/${i + 1}`}>
                                        <Button variant="ghost" size="sm" className="hover:text-white hover:bg-white/10">
                                            Gerenciar
                                        </Button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
