import { IpamBlock } from "@/components/dashboard/ipam/IpamBlock";
import { Button } from "@/components/ui/button";
import { Filter, RefreshCcw } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { cn } from "@/lib/utils";

export default async function IpamPage() {
    // Fetch all blocks
    const blocks = await prisma.ipBlock.findMany({
        orderBy: { cidr: 'asc' },
        include: {
            renter: {
                select: {
                    name: true,
                    company: true
                }
            }
        }
    });

    // Group blocks by /22 or ASN just for visualization grouping (simplified here)
    // We will just list them for now to ensure data connectivity

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

            <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                    <span className="w-2 h-8 rounded-sm bg-indigo-500 inline-block"></span>
                    Blocos Cadastrados (Todos)
                </h3>

                {blocks.length === 0 ? (
                    <div className="p-8 text-center border border-white/10 rounded-xl bg-white/5 text-zinc-500">
                        Nenhum bloco cadastrado no sistema.
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6 rounded-xl border border-white/10 bg-black/40">
                        {blocks.map((block) => (
                            <IpamBlock
                                key={block.id}
                                cidr={block.cidr}
                                status={block.status}
                                renterName={block.renter?.company || block.renter?.name || (block.status === 'SUSPENDED' ? 'Inadimplente' : undefined)}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
