import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/NavBar";
import { Content } from "@/components/Content";
import { Header } from "@/components/Header";
import AuthenticatedPage from "@/components/AuthenticatedPage/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "FAC Admin",
    description: "FAC Admin",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div
                    className="flex flex-row h-[100dvh] overflow-auto xl:overflow-hidden"
                    id="json-container"
                >
                    {/* <AuthenticatedPage> */}
                        <NavBar />
                        <Content className="overflow-y-scroll">
                            <Header />
                            {/* <div className="md:px-[2.8rem] md:py-[3rem] px-[1rem] py-[2rem] mx-auto container"> */}
                            <div className="h-fit flex-1 overflow-hidden px-8">
                                {children}
                            </div>
                        </Content>
                    {/* </AuthenticatedPage>{" "} */}
                </div>
            </body>
        </html>
    );
}
