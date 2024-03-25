import { Input, Badge } from "antd"
import React from "react"
import { BiBell, BiSearch } from "react-icons/bi"

export const Header = () => {
  return (
    <header className="w-full border-b-[0.5px] border-b-[#D2DBEC] bg-[#fafafa] px-[4rem] py-[2rem]">
      <div className="flex items-center justify-between">
        <Input
          className="w-[350px]"
          size="large"
          prefix={<BiSearch />}
          placeholder="Search"
        />
        <Badge count={5}>
          <BiBell className="text-2xl" />
        </Badge>
      </div>
    </header>
  )
}
