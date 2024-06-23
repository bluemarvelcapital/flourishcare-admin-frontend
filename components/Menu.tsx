"use client";
import Link from "next/link";
import React, { useState } from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineSolution } from "react-icons/ai";
import { BsJournalMedical } from "react-icons/bs";
import { LuBookMinus } from "react-icons/lu";
import { IoBriefcaseOutline } from "react-icons/io5";
import { RiBookReadLine } from "react-icons/ri";
import { CiSettings } from "react-icons/ci";
import { usePathname } from "next/navigation";
import { Avatar } from "antd";
import { CgLogOut } from "react-icons/cg";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
import { SlBriefcase } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/context/store";
import { useLogOutMutation } from "@/services/auth.service";
import { toast } from "react-toastify";
import { clearAuth } from "@/context/auth.slice";

interface NavItemI {
    name: string;
    href: string;
    icon: React.ReactNode;
    childrenLinks?: {
        name: string;
        href: string;
        icon?: React.ReactNode;
    }[];
}

const navItems: NavItemI[] = [
    {
        name: "Overview",
        href: "/overview",
        icon: <MdOutlineDashboard />,
    },
    {
        name: "Services",
        href: "/services",
        icon: <AiOutlineSolution />,
        childrenLinks: [
            {
                name: "Listed Services",
                href: "/services/listed-services",
                icon: <AiOutlineSolution />,
            },
            {
                name: "Categories",
                href: "/services/categories",
            },
            {
                name: "Reviews",
                href: "/services/reviews",
            },
        ],
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
        name: "Transactions",
        href: "/transactions",
        icon: <SlBriefcase />,
    },
    {
        name: "Blog",
        href: "/blog",
        icon: <RiBookReadLine />,
        childrenLinks: [
            {
                name: "Blog Posts",
                href: "/blog",
            },
            {
                name: "Blog Categories",
                href: "/blog/categories",
            },
        ],
    },
    {
        name: "Settings",
        href: "/settings",
        icon: <CiSettings />,
    },
];

export const Menu = () => {
    const pathName = usePathname();
    const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({});
    const { user } = useSelector((state: RootState) => state.auth);
    const [logOut, { isLoading }] = useLogOutMutation();
    const dispatch = useDispatch();

    const toggleExpand = (name: string) => {
        setExpanded((prev) => ({ ...prev, [name]: !prev[name] }));
    };

    const handleLogOut = async () => {
        try {
            await logOut().unwrap();
            toast.success("Logged out successfully");
            dispatch(clearAuth());
        } catch (error: unknown) {
            toast.error(
                (error as any)?.data?.message ??
                    "An error occurred. Please try again.",
            );
        }
    };

    return (
        <div className="mt-10 ">
            <p className="text-primary">Menu</p>
            <ul className="flex flex-col gap-4 mt-10">
                {navItems.map(({ name, href, icon, childrenLinks }, index) => {
                    const active = pathName === href;
                    const activeClass = "bg-secondary text-white rounded-md ";
                    const isExpanded = expanded[name];
                    return (
                        <React.Fragment key={index}>
                            <div
                                className={`flex items-center justify-between ${
                                    active ? activeClass : ""
                                }`}
                                onClick={() =>
                                    childrenLinks && toggleExpand(name)
                                }
                            >
                                <Link href={href}>
                                    <li className="flex h-10 items-center gap-3 rounded-md px-4 transition-all duration-300">
                                        <div className="text-[1.8rem]">
                                            {icon}
                                        </div>
                                        <span>{name}</span>
                                    </li>
                                </Link>
                                {childrenLinks && (
                                    <div className="pr-4">
                                        {isExpanded ? (
                                            <FiChevronUp />
                                        ) : (
                                            <FiChevronDown />
                                        )}
                                    </div>
                                )}
                            </div>
                            {isExpanded && childrenLinks && (
                                <ul className="ml-5 mt-2  flex flex-col border-l border-light px-2">
                                    {childrenLinks.map((child, childIndex) => {
                                        const childActive =
                                            pathName === child.href;
                                        const childActiveClass =
                                            "bg-secondary text-white rounded-md ";
                                        return (
                                            <Link
                                                href={child.href}
                                                key={childIndex}
                                                className={
                                                    childActive
                                                        ? childActiveClass
                                                        : ""
                                                }
                                            >
                                                <li className="flex h-10 items-center  justify-between gap-3 rounded-md px-4 transition-all duration-300 ">
                                                    {child.name}
                                                    <span>
                                                        <IoIosArrowForward />
                                                    </span>
                                                </li>
                                            </Link>
                                        );
                                    })}
                                </ul>
                            )}
                        </React.Fragment>
                    );
                })}
            </ul>

            <div className="mt-[7rem] ">
                <p className="text-primary">Profile</p>
                <div className="my-4 flex gap-3 items-center text-[14px] font-[500]">
                    <Avatar size={50} className="bg-secondary">
                        JW
                    </Avatar>
                    <div>
                        <p>{`${user?.firstname ?? "Admin"} ${user?.lastname ?? ""}`}</p>
                        <p>{user.email}</p>
                    </div>
                </div>
                <div
                    className="flex gap-1 items-center text-error-500 mt-auto cursor-pointer"
                    onClick={handleLogOut}
                >
                    <CgLogOut className="text-[1.5rem]" />
                    <span className="text-[14px]">Log Out</span>
                </div>
            </div>
        </div>
    );
};
