import { Inter } from "next/font/google";
import "@/app/globals.css";
import { cn } from "@/lib/utils";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={cn("min-h-screen bg-black text-foreground flex flex-col font-sans", inter.className)}>
            <nav className="w-full p-6 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-white">
                        R
                    </div>
                    <span className="text-lg font-bold text-white">RentIPv4</span>
                </Link>
            </nav>
            <div className="flex-1 flex items-center justify-center p-4">
                {children}
            </div>
        </div>
    );
}
