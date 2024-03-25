"use client"
import React from "react"
import { Logo } from "./Logo"
import { Menu } from "./Menu"

export const NavBar = () => {
  return (
    <div className="h-screen fixed top-0 left-0 lg:w-[18%] w-[300px] border-r-[0.5px] border-r-[#D2DBEC] z-[10] bg-[#fafafa] py-[2rem] md:px-[2rem] px-[1rem]">
      <div className="flex items-center justify-center">
        <Logo />
      </div>
      <Menu />
    </div>
  )
}
