"use client";

import { Button } from "@/components/ui/button";
import { Download, CreditCard, CheckCircle, Clock, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

export default function BillingPage() {
    const invoices = [
        { id: "INV-2025-001", date: "15/01/2026", amount: "R$ 1.250,00", status: "PENDING" },
        { id: "INV-2024-128", date: "15/12/2025", amount: "R$ 1.250,00", status: "PAID" },
        { id: "INV-2024-115", date: "15/11/2025", amount: "R$ 1.250,00", status: "PAID" },
    ];

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-2xl font-bold tracking-tight text-white">Faturas e Pagamentos</h1>
                <p className="text-zinc-400">Gerencie seus pagamentos mensais para evitar suspensão.</p>
            </div>

            {/* Payment Method Card */}
            <div className="p-6 rounded-xl border border-white/10 bg-white/5 flex items-start justify-between">
                <div className="flex gap-4">
                    <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-lg h-fit">
                        <CreditCard className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-white">Método de Pagamento</h3>
                        <p className="text-zinc-400 text-sm mt-1">Pix Automático (Recomendado)</p>
                        <p className="text-zinc-500 text-xs mt-2">Chave aleatória gerada mensalmente.</p>
                    </div>
                </div>
                <Button variant="outline" className="border-white/10 hover:bg-white/10">Alterar Método</Button>
            </div>

            {/* Invoices List */}
            <div className="rounded-xl border border-white/10 bg-black/40 overflow-hidden">
                <table className="w-full text-sm text-left">
                    <thead className="bg-white/5 text-zinc-400">
                        <tr>
                            <th className="px-6 py-4 font-medium">Fatura #</th>
                            <th className="px-6 py-4 font-medium">Vencimento</th>
                            <th className="px-6 py-4 font-medium">Valor</th>
                            <th className="px-6 py-4 font-medium">Status</th>
                            <th className="px-6 py-4 font-medium text-right">Ação</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10 text-zinc-300">
                        {invoices.map((invoice, i) => (
                            <tr key={i} className="hover:bg-white/5 transition-colors">
                                <td className="px-6 py-4 font-medium text-white">{invoice.id}</td>
                                <td className="px-6 py-4">{invoice.date}</td>
                                <td className="px-6 py-4 font-mono">{invoice.amount}</td>
                                <td className="px-6 py-4">
                                    <span className={cn(
                                        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium border",
                                        invoice.status === "PAID"
                                            ? "bg-green-500/10 text-green-500 border-green-500/20"
                                            : "bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
                                    )}>
                                        {invoice.status === "PAID" ? <CheckCircle className="h-3 w-3" /> : <Clock className="h-3 w-3" />}
                                        {invoice.status === "PAID" ? "Pago" : "Pendente"}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    {invoice.status === "PENDING" ? (
                                        <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                                            Pagar Agora
                                        </Button>
                                    ) : (
                                        <Button variant="ghost" size="sm" className="hover:text-white hover:bg-white/10">
                                            <Download className="h-4 w-4 mr-2" />
                                            PDF
                                        </Button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 flex gap-3 items-start">
                <AlertTriangle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                <div className="space-y-1">
                    <p className="text-sm font-medium text-red-400">Política de Suspensão</p>
                    <p className="text-xs text-red-400/80">
                        Faturas em aberto por mais de 5 dias resultam no bloqueio administrativo do bloco.
                        Após 15 dias, o bloco volta para o pool de locação.
                    </p>
                </div>
            </div>
        </div>
    );
}
