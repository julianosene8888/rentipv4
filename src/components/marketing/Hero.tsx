import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
    return (
        <section className="relative overflow-hidden pt-32 pb-24 md:pt-48 md:pb-32">
            {/* Background gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-indigo-600/20 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[800px] h-[400px] bg-purple-600/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10 text-center">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-zinc-300 mb-8 backdrop-blur-sm">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    Novos blocos /24 disponíveis hoje
                </div>

                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
                    Aluguel de ASN e <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                        Blocos IPv4 Premium
                    </span>
                </h1>

                <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                    A plataforma mais segura e rápida para expandir sua infraestrutura de rede.
                    Alugue blocos limpos, com gestão completa e ativação imediata.
                </p>

                {/* Search Box */}
                <div className="max-w-2xl mx-auto p-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md mb-12 shadow-2xl shadow-indigo-500/10">
                    <div className="flex flex-col md:flex-row gap-2">
                        <div className="relative flex-1">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 h-5 w-5" />
                            <input
                                type="text"
                                placeholder="Buscar por tamanho (ex: /24, /22)..."
                                className="w-full h-12 pl-12 pr-4 bg-transparent text-white placeholder:text-zinc-600 focus:outline-none rounded-xl border border-transparent focus:border-indigo-500/50"
                            />
                        </div>
                        <Button size="lg" className="h-12 px-8 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium shadow-lg shadow-indigo-600/20">
                            Buscar Blocos
                        </Button>
                    </div>
                </div>

                <div className="flex items-center justify-center gap-8 text-zinc-500 text-sm">
                    <span>✓ RIPE / LACNIC / ARIN</span>
                    <span>✓ LOA Disponível</span>
                    <span>✓ Clean Reputation</span>
                </div>
            </div>
        </section>
    );
}
