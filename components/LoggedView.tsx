import { ToastContainer } from "react-toastify"
import { NavBar } from "./NavBar"
import { Content } from "./Content"

export default function LoggedView({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <>
            <ToastContainer position="top-center" />
            <NavBar />
            <Content>
                <ToastContainer />
                {/* <Header /> */}
                <div className="md:px-[2.8rem] md:py-[3rem] px-[1rem] py-[2rem] h-full mx-auto container">
                    {children}
                </div>
            </Content>
        </>
    )
}