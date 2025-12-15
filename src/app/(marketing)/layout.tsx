import { Inter } from "next/font/google"; // Using Inter for premium feel
import "@/app/globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export default function MarketingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}>
            {/* We can add a Header here later */}
            <main>{children}</main>
            {/* We can add a Footer here later */}
        </div>
    );
}
