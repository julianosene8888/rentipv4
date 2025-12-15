import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function PartnerRegisterPage() {
    return (
        <div className="w-full max-w-lg space-y-8">
            <div className="text-center">
                <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-400 mb-4">
                    Parceiros RentIPv4
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-white">Monetize seus IPs</h2>
                <p className="mt-2 text-sm text-zinc-400">Cadastre-se como parceiro e comece a alugar seus blocos com segurança.</p>
            </div>

            <div className="space-y-4 p-6 bg-white/5 border border-white/10 rounded-xl">
                <div className="space-y-2">
                    <Label htmlFor="asn" className="text-zinc-300">ASN (Sistema Autônomo)</Label>
                    <Input id="asn" placeholder="AS123456" className="bg-black/20 border-white/10 text-white focus-visible:ring-indigo-500" />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="block" className="text-zinc-300">Bloco Principal (Ex: /22, /20)</Label>
                    <Input id="block" placeholder="192.168.0.0/22" className="bg-black/20 border-white/10 text-white focus-visible:ring-indigo-500" />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="email" className="text-zinc-300">Email Corporativo</Label>
                    <Input id="email" type="email" placeholder="admin@provedor.com.br" className="bg-black/20 border-white/10 text-white focus-visible:ring-indigo-500" />
                </div>

                <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white mt-2">
                    Solicitar Acesso de Parceiro
                </Button>
                <p className="text-xs text-center text-zinc-500">
                    * Seu cadastro passará por uma análise de conformidade de reputação.
                </p>
            </div>

            <p className="text-center text-sm text-zinc-400">
                <Link href="/login" className="font-semibold text-zinc-300 hover:text-white">
                    Voltar para Login
                </Link>
            </p>
        </div>
    );
}
