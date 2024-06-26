import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import { ClientProvider } from "@/components/ClientProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "FAC Admin",
    description: "Admin dashboard for FAC",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClientProvider>
            <html lang="en">
                <body className="">
                    <ToastContainer position="top-center" />
                    <div className="">{children}</div>
                </body>
            </html>
        </ClientProvider>
    );
}
