"use client"
import React from "react"
import { Logo } from "./Logo"

export const NavBar = () => {
  return (
    <div className="h-screen fixed top-0 left-0 md:w-[16%] w-[250px] border-r-[0.5px] border-r-[#D2DBEC] z-[10] bg-[#fafafa] py-[2rem] px-[1rem]">
      <div className="flex items-center justify-center">
        <Logo />
      </div>
    </div>
  )
}
