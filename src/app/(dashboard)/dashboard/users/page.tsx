"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search, MoreVertical, Shield, User } from "lucide-react";
import { cn } from "@/lib/utils";

export default function AdminUsersPage() {
    const users = [
        { name: "Provedor XYZ", email: "contato@xyz.com", role: "RENTER", status: "ACTIVE" },
        { name: "TechCorp S.A", email: "admin@techcorp.com", role: "RENTER", status: "ACTIVE" },
        { name: "João Neto", email: "joao@neto.com.br", role: "OWNER", status: "PENDING" },
    ];

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-white">Gestão de Usuários</h1>
                    <p className="text-zinc-400">Cadastre e gerencie locatários e parceiros.</p>
                </div>
                <Button className="bg-indigo-600 hover:bg-indigo-700 gap-2">
                    <Plus className="h-4 w-4" />
                    Novo Usuário
                </Button>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <Search className="h-5 w-5 text-zinc-500" />
                <Input placeholder="Buscar por nome, email ou empresa..." className="border-0 bg-transparent focus-visible:ring-0 px-0 text-white placeholder:text-zinc-600" />
            </div>

            <div className="rounded-xl border border-white/10 bg-black/40 overflow-hidden">
                <table className="w-full text-sm text-left">
                    <thead className="bg-white/5 text-zinc-400">
                        <tr>
                            <th className="px-6 py-4 font-medium">Usuário</th>
                            <th className="px-6 py-4 font-medium">Função</th>
                            <th className="px-6 py-4 font-medium">Status</th>
                            <th className="px-6 py-4 font-medium text-right">Ações</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10 text-zinc-300">
                        {users.map((user, i) => (
                            <tr key={i} className="hover:bg-white/5 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center">
                                            <User className="h-4 w-4 text-zinc-400" />
                                        </div>
                                        <div>
                                            <div className="font-medium text-white">{user.name}</div>
                                            <div className="text-xs text-zinc-500">{user.email}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        {user.role === "ADMIN" && <Shield className="h-3 w-3 text-indigo-400" />}
                                        {user.role === "OWNER" && <span className="text-xs bg-purple-500/10 text-purple-400 px-2 py-0.5 rounded-full border border-purple-500/20">Parceiro</span>}
                                        {user.role === "RENTER" && <span className="text-xs bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded-full border border-blue-500/20">Locatário</span>}
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className={cn(
                                        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
                                        user.status === "ACTIVE" ? "text-green-500" : "text-yellow-500"
                                    )}>
                                        {user.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-white/10">
                                        <MoreVertical className="h-4 w-4" />
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
