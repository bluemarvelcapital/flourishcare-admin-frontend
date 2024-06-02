"use client"
import Link from "next/link"
import React from "react"
import { MdOutlineDashboard } from "react-icons/md"
import { AiOutlineSolution } from "react-icons/ai"
import { BsJournalMedical } from "react-icons/bs"
import { LuBookMinus } from "react-icons/lu"
import { IoBriefcaseOutline } from "react-icons/io5"
import { RiBookReadLine } from "react-icons/ri"
import { CiSettings } from "react-icons/ci"
import { usePathname } from "next/navigation"
import { Avatar } from "antd"
import { CgLogOut } from "react-icons/cg"
import { IUser } from "@/types/user"


interface NavItemI {
    name: string
    href: string
    icon: React.ReactNode
}

const navItems: NavItemI[] = [
    {
        name: "Overview",
        href: "/",
        icon: <MdOutlineDashboard />,
    },
    {
        name: "Services",
        href: "/services",
        icon: <AiOutlineSolution />,
    },
    {
        name: "Appointments",
        href: "/appointments",
        icon: <BsJournalMedical />,
    },
    {
        name: "Bookings",
        href: "/bookings",
        icon: <LuBookMinus />,
    },
    {
        name: "Job Applications",
        href: "/job-applications",
        icon: <IoBriefcaseOutline />,
    },
    {
        name: "Blog",
        href: "/blog",
        icon: <RiBookReadLine />,
    },
    {
        name: "Settings",
        href: "/settings",
        icon: <CiSettings />,
    },
]

interface User {
    name: string;
    [key: string]: any; // Add other user properties as needed
  }

export const Menu = ({ user }: { user :User }) => {
    
    const pathName = usePathname()
    const active = true
    return (
        <div className="mt-10">
            <p className="text-primary">Menu</p>
            <ul className="flex flex-col gap-4 mt-10 ml-4">
                {navItems.map((item, index) => {
                    const active = pathName === item.href
                    const activeClass = "bg-secondary text-[white] rounded-md "
                    return (
                        <Link
                            href={item.href}
                            key={index}
                            className={active ? activeClass : ""}
                        >
                            <li key={index} className="flex items-center px-4 gap-3 py-3">
                                <div className="text-[1.8rem]">{item.icon}</div>
                                <span>{item.name}</span>
                            </li>
                        </Link>
                    )
                })}
            </ul>

            <div className="mt-[7rem]">
                <p className="text-primary">Profile</p>
                <div className="my-4 flex gap-3 items-center text-[14px] font-[500]">
                    <Avatar size={50} className="bg-secondary">
                        {user.firstname.charAt(0).toUpperCase()}{user.lastname.charAt(0).toUpperCase()}
                    </Avatar>
                    <div>
                        <p>{user.firstname} {user.lastname}</p>
                        <p>{user.email}</p>
                    </div>
                </div>
                <div className="flex gap-1 items-center text-error-500 mt-7 cursor-pointer">
                    <CgLogOut className="text-[1.5rem]" />
                    <span className="text-[14px]">Log Out</span>
                </div>
            </div>
        </div>
    )
}
