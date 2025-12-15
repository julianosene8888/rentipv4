"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Download, Globe, ShieldCheck, Activity } from "lucide-react";

export default function BlockDetailsPage({ params }: { params: { id: string } }) {
    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-white">Gerenciar Bloco</h1>
                    <p className="text-zinc-400">192.168.10.0/24</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" className="border-white/10 text-zinc-400 hover:text-white hover:bg-white/5">
                        <Download className="h-4 w-4 mr-2" />
                        Baixar LOA (PDF)
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Status Card */}
                <div className="p-6 rounded-xl border border-white/10 bg-white/5 space-y-4">
                    <div className="flex items-center gap-3 text-zinc-400">
                        <Activity className="h-5 w-5" />
                        <span className="text-sm font-medium">Status da Rede</span>
                    </div>
                    <div className="text-3xl font-bold text-green-500">Ativo</div>
                    <div className="text-xs text-zinc-500">Uptime 99.9% nos últimos 30 dias</div>
                </div>

                {/* Blacklist Monitor */}
                <div className="p-6 rounded-xl border border-white/10 bg-white/5 space-y-4">
                    <div className="flex items-center gap-3 text-zinc-400">
                        <ShieldCheck className="h-5 w-5" />
                        <span className="text-sm font-medium">Monitoramento Blacklist</span>
                    </div>
                    <div className="text-3xl font-bold text-green-500">Clean</div>
                    <div className="text-xs text-zinc-500">Verificado há 10 minutos (Spamhaus, Sorbs)</div>
                </div>

                {/* ASN */}
                <div className="p-6 rounded-xl border border-white/10 bg-white/5 space-y-4">
                    <div className="flex items-center gap-3 text-zinc-400">
                        <Globe className="h-5 w-5" />
                        <span className="text-sm font-medium">ASN Anunciando</span>
                    </div>
                    <div className="text-3xl font-bold text-white">AS12345</div>
                    <div className="text-xs text-zinc-500">Alterado em 01/01/2026</div>
                </div>
            </div>

            {/* Reverse DNS Config */}
            <div className="p-6 rounded-xl border border-white/10 bg-black/40 space-y-6">
                <div>
                    <h3 className="text-lg font-semibold text-white">Configuração de rDNS</h3>
                    <p className="text-sm text-zinc-400">Configure o DNS reverso para seus IPs. As alterações propagam em até 1 hora.</p>
                </div>

                <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label className="text-zinc-300">Endereço IP</Label>
                            <Input value="192.168.10.1" readOnly className="bg-white/5 border-white/10 text-zinc-500" />
                        </div>
                        <div className="space-y-2">
                            <Label className="text-zinc-300">Host (PTR Record)</Label>
                            <Input placeholder="server1.minhaempresa.com" className="bg-white/5 border-white/10 text-white" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label className="text-zinc-300">Endereço IP</Label>
                            <Input value="192.168.10.2" readOnly className="bg-white/5 border-white/10 text-zinc-500" />
                        </div>
                        <div className="space-y-2">
                            <Label className="text-zinc-300">Host (PTR Record)</Label>
                            <Input placeholder="mail.minhaempresa.com" className="bg-white/5 border-white/10 text-white" />
                        </div>
                    </div>
                </div>

                <div className="flex justify-end">
                    <Button className="bg-indigo-600 hover:bg-indigo-700">Salvar Alterações</Button>
                </div>
            </div>
        </div>
    );
}
