import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-black/80 text-zinc-400 py-12 border-t border-white/10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div className="space-y-4">
                        <h3 className="text-white font-bold text-lg">RentIPv4</h3>
                        <p className="text-sm">
                            Sua infraestrutura de rede robusta, rápida e confiável.
                            Alugue blocos IPv4 com quem entende do assunto.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Plataforma</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="#" className="hover:text-indigo-400 transition-colors">Buscar Blocos</Link></li>
                            <li><Link href="#" className="hover:text-indigo-400 transition-colors">Preços</Link></li>
                            <li><Link href="#" className="hover:text-indigo-400 transition-colors">API</Link></li>
                            <li><Link href="#" className="hover:text-indigo-400 transition-colors">Login</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="#" className="hover:text-indigo-400 transition-colors">Termos de Uso</Link></li>
                            <li><Link href="#" className="hover:text-indigo-400 transition-colors">Política de Privacidade</Link></li>
                            <li><Link href="#" className="hover:text-indigo-400 transition-colors">Contrato de Locação</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Suporte</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="#" className="hover:text-indigo-400 transition-colors">FAQ</Link></li>
                            <li><Link href="#" className="hover:text-indigo-400 transition-colors">Fale Conosco</Link></li>
                            <li><Link href="#" className="hover:text-indigo-400 transition-colors">Status da Rede</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs">© 2025 RentIPv4. Todos os direitos reservados.</p>

                    {/* Discreet link for Block Owners */}
                    <Link href="/partner/register" className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors">
                        Possui um bloco parado? Rentabilize conosco.
                    </Link>
                </div>
            </div>
        </footer>
    );
}
