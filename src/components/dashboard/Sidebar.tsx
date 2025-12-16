"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
    LayoutDashboard,
    Network,
    CreditCard,
    Settings,
    LogOut,
    PlusCircle,
    ShieldAlert,
    User
} from "lucide-react";

const sidebarItems = [
    { icon: LayoutDashboard, label: "Visão Geral", href: "/dashboard" },
    { icon: Network, label: "Meus Blocos", href: "/dashboard/blocks" },
    { icon: CreditCard, label: "Faturas", href: "/dashboard/billing" },
    { icon: Settings, label: "Configurações", href: "/dashboard/settings" },
];

// Mock Role for now
const userRole: string = "RENTER"; // Can be 'RENTER', 'OWNER', 'ADMIN'

export function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="hidden w-64 flex-col bg-zinc-950 border-r border-white/10 md:flex">
            <div className="flex h-16 items-center px-6 border-b border-white/10">
                <Link href="/" className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-white">
                        R
                    </div>
                    <span className="text-lg font-bold text-white">RentIPv4</span>
                </Link>
            </div>

            <div className="flex-1 overflow-y-auto py-6 px-3">
                <nav className="space-y-1">
                    {sidebarItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                                pathname === item.href
                                    ? "bg-indigo-600/10 text-indigo-400"
                                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                            )}
                        >
                            <item.icon className="h-5 w-5" />
                            {item.label}
                        </Link>
                    ))}
                </nav>

                {/* Owner Specific Actions - Visible for Demo */}
                <div className="mt-8">
                    <h4 className="px-3 text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Parceiro (Demo)</h4>
                    <Link href="/dashboard/register-block" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 transition-colors">
                        <PlusCircle className="h-5 w-5" />
                        Cadastrar Bloco
                    </Link>
                </div>

                {/* Admin Specific Actions */}
                <div className="mt-8">
                    <h4 className="px-3 text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Admin Demo</h4>
                    <Link href="/dashboard/ipam" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 transition-colors">
                        <ShieldAlert className="h-5 w-5" />
                        Gestão IPAM
                    </Link>
                    <Link href="/dashboard/users" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 transition-colors">
                        <User className="h-5 w-5" />
                        Gestão de Usuários
                    </Link>
                </div>
            </div>

            <div className="p-4 border-t border-white/10">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 mb-2">
                    <div className="h-8 w-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold">
                        JS
                    </div>
                    <div className="flex-1 overflow-hidden">
                        <p className="text-sm font-medium text-white truncate">Juliano Sene</p>
                        <p className="text-xs text-zinc-500 truncate">juliano@exemplo.com</p>
                    </div>
                </div>
                <button className="flex w-full items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-zinc-400 hover:text-red-400 hover:bg-red-500/10 transition-colors">
                    <LogOut className="h-4 w-4" />
                    Sair
                </button>
            </div>
        </aside>
    );
}
