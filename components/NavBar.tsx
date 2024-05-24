"use client"
import React from "react"
import { Logo } from "./Logo"
import { Menu } from "./Menu"
import { useNav } from "@/hooks/useNav"
import { useSelector } from "react-redux"
import { RootState } from "@/context/store"

export const NavBar = () => {
    const { showNav } = useNav()
    const activeClass = showNav ? "translate-x-0" : "-translate-x-full"
    const { user } = useSelector((state: RootState) => state.auth)

    return (
        <>
            {/* Desktop */}
            {
                user && <>
                    <div className="h-screen fixed top-0 left-0 lg:w-[18%] w-[300px] border-r-[0.5px] border-r-[#D2DBEC] z-[10] bg-[#fafafa] py-[2rem] md:px-[2rem] px-[1rem] lg:block hidden">
                        <div className="flex items-center justify-center">
                            <Logo />
                        </div>
                        <Menu user={user} />
                    </div>
                    {/* Mobile */}
                    <div
                        className={`h-screen fixed top-0 left-0 lg:w-[18%] w-[300px] border-r-[0.5px] border-r-[#D2DBEC] z-[10] bg-[#fafafa] py-[2rem] md:px-[2rem] px-[1rem] lg:hidden block ${activeClass} transition-transform duration-300`}
                    >
                        <div className="flex items-center justify-center">
                            <Logo />
                        </div>
                        <Menu user={user} />
                    </div>
                </>
            }
        </>
    )
}
