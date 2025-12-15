import { Navbar } from "@/components/marketing/Navbar";
import { Hero } from "@/components/marketing/Hero";
import { Footer } from "@/components/marketing/Footer";

export default function Home() {
    return (
        <div className="min-h-screen bg-black text-foreground">
            <Navbar />
            <Hero />

            {/* Short Features Section (Placeholder for now) */}
            <section id="features" className="py-24 bg-zinc-950">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-white mb-16">Por que escolher a RentIPv4?</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Ativação Imediata", desc: "Processo automatizado. Receba suas credenciais e LOA em minutos após a aprovação." },
                            { title: "IPs Limpos", desc: "Monitoramento constante de blacklists para garantir a reputação dos seus IPs." },
                            { title: "Gestão Flexível", desc: "Painel completo para gerenciar, dividir e rotear seus blocos conforme a necessidade." }
                        ].map((feature, i) => (
                            <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/50 transition-colors">
                                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                                <p className="text-zinc-400">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
