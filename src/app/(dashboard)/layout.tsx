import { Inter } from "next/font/google";
import "@/app/globals.css";
import { cn } from "@/lib/utils";
import { Sidebar } from "@/components/dashboard/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={cn("min-h-screen bg-background flex", inter.className)}>
            <Sidebar />
            <main className="flex-1 flex flex-col min-h-screen overflow-hidden bg-black text-white">
                {/* Mobile Header could go here */}
                <div className="flex-1 overflow-y-auto p-8">
                    <div className="max-w-6xl mx-auto">
                        {children}
                    </div>
                </div>
            </main>
        </div>
    );
}
