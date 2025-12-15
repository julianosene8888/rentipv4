import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
    return (
        <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link href="/" className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-white">
                        R
                    </div>
                    <span className="text-lg font-bold text-white">RentIPv4</span>
                </Link>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
                    <Link href="#features" className="hover:text-white transition-colors">Funcionalidades</Link>
                    <Link href="#marketplace" className="hover:text-white transition-colors">Marketplace</Link>
                    <Link href="#pricing" className="hover:text-white transition-colors">Preços</Link>
                </div>

                <div className="flex items-center gap-4">
                    <Link href="/login" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors hidden sm:block">
                        Login
                    </Link>
                    <Button variant="default" className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-6">
                        Começar Agora
                    </Button>
                </div>
            </div>
        </nav>
    );
}
