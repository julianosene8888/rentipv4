import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
    return (
        <div className="w-full max-w-md space-y-8">
            <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white">Bem-vindo de volta</h2>
                <p className="mt-2 text-sm text-zinc-400">Entre na sua conta para gerenciar seus blocos.</p>
            </div>

            <div className="space-y-6">
                <div className="space-y-2">
                    <Label htmlFor="email" className="text-zinc-300">Email</Label>
                    <Input id="email" type="email" placeholder="nome@empresa.com" className="bg-white/5 border-white/10 text-white placeholder:text-zinc-600 focus-visible:ring-indigo-500" />
                </div>
                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <Label htmlFor="password" className="text-zinc-300">Senha</Label>
                        <Link href="#" className="text-xs text-indigo-400 hover:text-indigo-300">Esqueceu a senha?</Link>
                    </div>
                    <Input id="password" type="password" className="bg-white/5 border-white/10 text-white focus-visible:ring-indigo-500" />
                </div>

                <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">Entrar</Button>
            </div>

            <div className="text-center text-sm text-zinc-400">
                Não tem uma conta?{" "}
                <Link href="/register" className="font-semibold text-indigo-400 hover:text-indigo-300">
                    Cadastre-se como Locatário
                </Link>
                <div className="mt-2">
                    <span className="text-zinc-600">ou </span>
                    <Link href="/partner/register" className="font-semibold text-zinc-300 hover:text-white">
                        Seja um Parceiro (Dono de Bloco)
                    </Link>
                </div>
            </div>
        </div>
    );
}
