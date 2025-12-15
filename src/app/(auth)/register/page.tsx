import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function RegisterPage() {
    return (
        <div className="w-full max-w-md space-y-8">
            <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white">Crie sua conta</h2>
                <p className="mt-2 text-sm text-zinc-400">Comece a alugar blocos IPv4 agora mesmo.</p>
            </div>

            <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-zinc-300">Nome</Label>
                        <Input id="firstName" placeholder="João" className="bg-white/5 border-white/10 text-white focus-visible:ring-indigo-500" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-zinc-300">Sobrenome</Label>
                        <Input id="lastName" placeholder="Silva" className="bg-white/5 border-white/10 text-white focus-visible:ring-indigo-500" />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="company" className="text-zinc-300">Empresa (Opcional)</Label>
                    <Input id="company" placeholder="Minha Empresa LTDA" className="bg-white/5 border-white/10 text-white focus-visible:ring-indigo-500" />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="email" className="text-zinc-300">Email</Label>
                    <Input id="email" type="email" placeholder="joao@exemplo.com" className="bg-white/5 border-white/10 text-white focus-visible:ring-indigo-500" />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="password" className="text-zinc-300">Senha</Label>
                    <Input id="password" type="password" className="bg-white/5 border-white/10 text-white focus-visible:ring-indigo-500" />
                </div>

                <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white mt-4">Criar Conta</Button>
            </div>

            <p className="text-center text-sm text-zinc-400">
                Já tem uma conta?{" "}
                <Link href="/login" className="font-semibold text-indigo-400 hover:text-indigo-300">
                    Entrar
                </Link>
            </p>
        </div>
    );
}
