"use client";

import { cn } from "@/lib/utils";
import { ShieldAlert, Unlock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type BlockStatus = "AVAILABLE" | "RENTED" | "SUSPENDED" | "RESERVED";

interface IpamBlockProps {
    cidr: string;
    status: BlockStatus;
    renterName?: string;
    className?: string;
}

export function IpamBlock({ cidr, status, renterName, className }: IpamBlockProps) {
    const statusColors = {
        AVAILABLE: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400 hover:border-emerald-500/50",
        RENTED: "bg-blue-500/10 border-blue-500/20 text-blue-400 hover:border-blue-500/50",
        SUSPENDED: "bg-red-500/10 border-red-500/20 text-red-500 hover:border-red-500/50",
        RESERVED: "bg-yellow-500/10 border-yellow-500/20 text-yellow-400 hover:border-yellow-500/50",
    };

    return (
        <div className={cn("p-4 rounded-lg border transition-all cursor-pointer group relative overflow-hidden", statusColors[status], className)}>
            <div className="flex justify-between items-start mb-2">
                <span className="font-mono font-bold text-lg">{cidr}</span>
                {status === "SUSPENDED" && <ShieldAlert className="h-5 w-5 animate-pulse" />}
                {status === "AVAILABLE" && <Unlock className="h-5 w-5 opacity-50" />}
            </div>

            <div className="space-y-1">
                <div className="text-xs font-semibold tracking-wider opacity-70">
                    {status}
                </div>
                {renterName && (
                    <div className="flex items-center gap-1.5 text-sm font-medium mt-2 text-white/80">
                        <User className="h-3.5 w-3.5" />
                        {renterName}
                    </div>
                )}
            </div>

            {/* Hover Actions */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px] gap-2">
                {status === "AVAILABLE" && (
                    <Link href="/dashboard/checkout" className="contents">
                        <Button size="sm" className="h-8 text-xs bg-emerald-600 hover:bg-emerald-700 text-white">
                            Alugar
                        </Button>
                    </Link>
                )}
                {status === "RENTED" && (
                    <Button size="sm" variant="destructive" className="h-8 text-xs">
                        Suspender
                    </Button>
                )}
                {status === "SUSPENDED" && (
                    <Button size="sm" className="h-8 text-xs bg-blue-600 hover:bg-blue-700 text-white">
                        Desbloquear
                    </Button>
                )}
            </div>
        </div>
    );
}
