"use client";

import { registerBlockAction } from "@/lib/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Info } from "lucide-react";

export default function RegisterBlockPage() {
    return (
        <div className="max-w-2xl mx-auto space-y-8">
            <div>
                <h1 className="text-2xl font-bold tracking-tight text-white">Cadastrar Novo Bloco</h1>
                <p className="text-zinc-400">Rentabilize seus endereços IPv4 ociosos com segurança.</p>
            </div>

            <form action={registerBlockAction} className="p-6 rounded-xl bg-white/5 border border-white/10 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label htmlFor="cidr" className="text-zinc-300">Bloco (CIDR)</Label>
                        <Input name="cidr" id="cidr" placeholder="Ex: 200.10.20.0/24" required className="bg-black/20 border-white/10 text-white focus-visible:ring-indigo-500" />
                        <p className="text-xs text-zinc-500">Mínimo aceito: /24 (256 IPs)</p>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="asn" className="text-zinc-300">ASN de Origem</Label>
                        <Input name="asn" id="asn" placeholder="AS12345" required className="bg-black/20 border-white/10 text-white focus-visible:ring-indigo-500" />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="price" className="text-zinc-300">Valor Esperado (Mensal)</Label>
                    <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500">R$</span>
                        <Input name="price" id="price" placeholder="0,00" required className="pl-10 bg-black/20 border-white/10 text-white focus-visible:ring-indigo-500" />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="loa" className="text-zinc-300">Upload LOA (Carta de Autorização)</Label>
                    <div className="border-2 border-dashed border-white/10 rounded-lg p-8 text-center hover:bg-white/5 transition-colors cursor-pointer">
                        <p className="text-sm text-zinc-400">Clique para selecionar o PDF da LOA assinada</p>
                        <p className="text-xs text-zinc-600 mt-2">Isso comprova que você é o dono do bloco.</p>
                    </div>
                </div>

                <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-lg p-4 flex gap-3 items-start">
                    <Info className="h-5 w-5 text-indigo-400 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                        <p className="text-sm font-medium text-indigo-300">Processo de Validação</p>
                        <p className="text-xs text-indigo-400/80">
                            Após o cadastro, nossa equipe técnica validará a reputação do bloco em até 24h.
                            Seus IPs só estarão disponíveis para locação após esta aprovação.
                        </p>
                    </div>
                </div>

                <div className="flex justify-end gap-3 pt-4">
                    <Button type="button" variant="ghost" className="text-zinc-400 hover:text-white">Cancelar</Button>
                    <Button type="submit" className="bg-indigo-600 hover:bg-indigo-700">Enviar para Análise</Button>
                </div>
            </form>
        </div>
    );
}
