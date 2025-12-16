import { Button } from "@/components/ui/button";
import { CheckCircle, CreditCard, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { rentBlock } from "@/lib/actions";

export default async function CheckoutPage({ searchParams }: { searchParams: { cidr?: string } }) {
    const session = await auth();
    if (!session) redirect("/login");

    const cidr = searchParams.cidr;
    if (!cidr) redirect("/");

    const block = await prisma.ipBlock.findUnique({
        where: { cidr },
    });

    if (!block || block.status !== "AVAILABLE") {
        return (
            <div className="text-center p-12">
                <h1 className="text-xl text-red-500">Bloco indisponível.</h1>
                <Link href="/"><Button className="mt-4">Voltar</Button></Link>
            </div>
        );
    }

    const rentAction = rentBlock.bind(null, cidr);

    return (
        <div className="max-w-3xl mx-auto space-y-8">
            <div>
                <h1 className="text-2xl font-bold tracking-tight text-white">Finalizar Locação</h1>
                <p className="text-zinc-400">Você está alugando o bloco <span className="text-white font-mono font-bold">{block.cidr}</span></p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <div className="p-6 rounded-xl bg-white/5 border border-white/10 space-y-4">
                        <h3 className="font-semibold text-white">Resumo do Pedido</h3>
                        <div className="flex justify-between text-sm">
                            <span className="text-zinc-400">Bloco IPv4 (/24)</span>
                            <span className="text-white">{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(Number(block.price))}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-zinc-400">Taxa de Setup</span>
                            <span className="text-green-400">Grátis</span>
                        </div>
                        <div className="pt-4 border-t border-white/10 flex justify-between font-bold text-lg">
                            <span className="text-white">Total Mensal</span>
                            <span className="text-white">{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(Number(block.price))}</span>
                        </div>
                    </div>

                    <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-lg p-4 flex gap-3">
                        <ShieldCheck className="h-5 w-5 text-indigo-400 shrink-0" />
                        <p className="text-xs text-indigo-300">
                            Garantia de Substituição: Se algum IP estiver em blacklist, trocamos o bloco em até 24h.
                        </p>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="p-6 rounded-xl bg-white/5 border border-white/10 space-y-4">
                        <h3 className="font-semibold text-white">Pagamento</h3>

                        <div className="p-4 rounded-lg border border-indigo-500/50 bg-indigo-500/10 flex items-center justify-between cursor-pointer">
                            <div className="flex items-center gap-3">
                                <CreditCard className="h-5 w-5 text-indigo-400" />
                                <span className="text-sm font-medium text-white">Pix (Aprovação Imediata)</span>
                            </div>
                            <CheckCircle className="h-4 w-4 text-indigo-400" />
                        </div>

                        <div className="pt-4">
                            <form action={rentAction}>
                                <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 py-6">
                                    Confirmar e Pagar
                                </Button>
                            </form>
                            <p className="text-center text-xs text-zinc-500 mt-2">
                                Ao confirmar, você concorda com os termos de uso.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
