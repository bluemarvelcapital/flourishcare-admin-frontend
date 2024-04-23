'use-client'
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { NavBar } from "@/components/NavBar"
import { Content } from "@/components/Content"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <NavBar />
                <Content>
                    <ToastContainer />
                    {/* <Header /> */}
                    <div className="md:px-[2.8rem] md:py-[3rem] px-[1rem] py-[2rem] h-full mx-auto container">
                        {children}
                    </div>
                </Content>
            </body>
        </html>
    )
}
