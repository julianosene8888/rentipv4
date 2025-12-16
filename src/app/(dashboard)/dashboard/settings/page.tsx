"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SettingsPage() {
    return (
        <div className="max-w-2xl space-y-8">
            <div>
                <h1 className="text-2xl font-bold tracking-tight text-white">Configurações</h1>
                <p className="text-zinc-400">Gerencie suas preferências de conta e segurança.</p>
            </div>

            <div className="p-6 rounded-xl bg-white/5 border border-white/10 space-y-6">
                <h3 className="text-lg font-semibold text-white">Perfil</h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label className="text-zinc-300">Nome Completo</Label>
                        <Input defaultValue="Juliano Sene" className="bg-black/20 border-white/10 text-white" />
                    </div>
                    <div className="space-y-2">
                        <Label className="text-zinc-300">Email</Label>
                        <Input defaultValue="juliano@exemplo.com" disabled className="bg-black/20 border-white/10 text-zinc-500" />
                    </div>
                </div>
                <div className="flex justify-end">
                    <Button className="bg-indigo-600 hover:bg-indigo-700">Salvar Perfil</Button>
                </div>
            </div>

            <div className="p-6 rounded-xl bg-white/5 border border-white/10 space-y-6">
                <h3 className="text-lg font-semibold text-white">Segurança</h3>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <Label className="text-zinc-300">Senha Atual</Label>
                        <Input type="password" className="bg-black/20 border-white/10 text-white" />
                    </div>
                    <div className="space-y-2">
                        <Label className="text-zinc-300">Nova Senha</Label>
                        <Input type="password" className="bg-black/20 border-white/10 text-white" />
                    </div>
                </div>
                <div className="flex justify-end">
                    <Button variant="outline" className="border-white/10 text-zinc-400 hover:text-white hover:bg-white/5">
                        Alterar Senha
                    </Button>
                </div>
            </div>
        </div>
    );
}
