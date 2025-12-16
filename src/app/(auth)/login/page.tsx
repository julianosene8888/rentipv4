"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useActionState } from "react";
import { authenticate } from "@/lib/actions";

export default function LoginPage() {
    const [errorMessage, dispatch] = useActionState(authenticate, undefined);

    return (
        <div className="w-full max-w-md space-y-8">
            <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white">Bem-vindo de volta</h2>
                <p className="mt-2 text-sm text-zinc-400">Entre na sua conta para gerenciar seus blocos.</p>
            </div>

            <form action={dispatch} className="space-y-6">
                <div className="space-y-2">
                    <Label htmlFor="email" className="text-zinc-300">Email</Label>
                    <Input name="email" id="email" type="email" placeholder="nome@empresa.com" required className="bg-white/5 border-white/10 text-white placeholder:text-zinc-600 focus-visible:ring-indigo-500" />
                </div>
                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <Label htmlFor="password" className="text-zinc-300">Senha</Label>
                        <Link href="#" className="text-xs text-indigo-400 hover:text-indigo-300">Esqueceu a senha?</Link>
                    </div>
                    <Input name="password" id="password" type="password" required minLength={6} className="bg-white/5 border-white/10 text-white focus-visible:ring-indigo-500" />
                </div>

                <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">
                    Entrar
                </Button>

                {errorMessage && (
                    <div className="flex items-center space-x-2 text-sm text-red-500 bg-red-500/10 p-3 rounded-md border border-red-500/20">
                        <p>{errorMessage}</p>
                    </div>
                )}
            </form>

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
