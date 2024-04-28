import { Content } from "@/components/Content"
import { Header } from "@/components/Header"
import { NavBar } from "@/components/NavBar"

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <>
            <NavBar />
            <Content>
                <Header />
                <div className="md:px-[2.8rem] md:py-[3rem] px-[1rem] py-[2rem] mx-auto container">
                    {children}
                </div>
            </Content>
        </>
    )
}