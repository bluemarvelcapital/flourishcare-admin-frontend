"use client"
import { useNav } from "@/hooks/useNav"
import { Input, Badge } from "antd"
import React from "react"
import { BiBell, BiSearch } from "react-icons/bi"
import { RxHamburgerMenu } from "react-icons/rx"

export const Header = () => {
  const { toggleNav } = useNav()
  return (
    <header className="w-full border-b-[0.5px] border-b-[#D2DBEC] bg-[#fafafa] md:px-[4rem] px-[1rem] py-[2rem]">
      <div className="flex items-center justify-between">
        <Input
          className="md:w-[350px] w-[250px]"
          size="large"
          prefix={<BiSearch />}
          placeholder="Search"
        />
        <div className="flex items-center gap-6 text-2xl">
          <Badge count={5}>
            <BiBell className="text-2xl" />
          </Badge>
          <RxHamburgerMenu
            className="lg:hidden block cursor-pointer"
            onClick={toggleNav}
          />
        </div>
      </div>
    </header>
  )
}
