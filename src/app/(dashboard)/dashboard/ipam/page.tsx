"use client";

import { IpamBlock } from "@/components/dashboard/ipam/IpamBlock";
import { Button } from "@/components/ui/button";
import { Filter, RefreshCcw } from "lucide-react";

export default function IpamPage() {
    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-white">Gestão IPAM</h1>
                    <p className="text-zinc-400">Visualize e gerencie a distribuição dos blocos.</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="border-white/10 text-zinc-400 hover:text-white hover:bg-white/5">
                        <Filter className="h-4 w-4 mr-2" />
                        Filtros
                    </Button>
                    <Button variant="outline" size="sm" className="border-white/10 text-zinc-400 hover:text-white hover:bg-white/5">
                        <RefreshCcw className="h-4 w-4 mr-2" />
                        Atualizar
                    </Button>
                </div>
            </div>

            {/* Main Block Container - Example /22 split */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                    <span className="w-2 h-8 rounded-sm bg-indigo-500 inline-block"></span>
                    Bloco Principal 200.150.100.0/22 (ASN 42000)
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6 rounded-xl border border-white/10 bg-black/40">
                    {/* Subnet 1: Rented */}
                    <IpamBlock cidr="200.150.100.0/24" status="RENTED" renterName="Provedor XYZ" />

                    {/* Subnet 2: Suspended (Payment Issue) */}
                    <IpamBlock cidr="200.150.101.0/24" status="SUSPENDED" renterName="HostLtda (Inadimplente)" />

                    {/* Subnet 3: Available */}
                    <IpamBlock cidr="200.150.102.0/24" status="AVAILABLE" />

                    {/* Subnet 4: Available */}
                    <IpamBlock cidr="200.150.103.0/24" status="AVAILABLE" />
                </div>
            </div>

            {/* Another Block Example */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                    <span className="w-2 h-8 rounded-sm bg-purple-500 inline-block"></span>
                    Bloco Principal 170.20.0.0/23 (ASN 15000)
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 rounded-xl border border-white/10 bg-black/40">
                    <IpamBlock cidr="170.20.0.0/24" status="RENTED" renterName="TechCorp S.A" />
                    <IpamBlock cidr="170.20.1.0/24" status="RESERVED" renterName="Uso Interno" />
                </div>
            </div>
        </div>
    );
}
