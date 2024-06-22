"use client";
import { Avatar, Image, Popover } from "antd";
import React from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { data } from "@/types/bookings";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BsDot, BsFileEarmarkPdfFill } from "react-icons/bs";

export const BookingsTable = () => {
    return (
        <div className="border-[1px] border-[#E4E7EC] py-7 rounded-xl">
            <div className="mb-4 flex justify-between px-7 items-center">
                <div className="flex items-center gap-2">
                    <h2 className="text-xl">Bookings</h2>
                    <Avatar className="bg-primary">8</Avatar>
                </div>
                <Link href="/bookings">
                    <div className="flex flex-row justify-between hover:border-b border-secondary duration-300 transition-all items-center space-x-5">
                        <p className="text-secondary">See All</p>
                        <MdKeyboardArrowRight className="text-secondary" />
                    </div>
                </Link>
            </div>
            <div
                className="flex flex-col mt-7 h-fit max-h-[400px] overflow-y-auto"
                id="json-container"
            >
                {data.map((post, index) => (
                    <div
                        key={index}
                        className="flex items-center py-3 px-7 hover:bg-[#F9F9F9] transition-all duration-300 justify-between "
                    >
                        <div className="flex justify-center flex-col gap-3">
                            <div className="space-x-2 flex flex-row">
                                <span className="text-sm">{index + 1}</span>
                                <p className="text-sm">{post.name}</p>
                            </div>
                            <div className=" bg-primary bg-opacity-20 p-1 text-center">
                                <p className=" text-[8px]">
                                    Appointment ID : {post.ID}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center flex-row gap-2 justify-center text-xs">
                            <BsDot className="text-error-500" />
                            {post.date}
                        </div>
                        <div className="flex flex-col gap-y-1 justify-center items-center p-2 bg-[#F7F7F7]">
                            {" "}
                            <BsFileEarmarkPdfFill className="text-error-500" />
                            <p className="text-[8px]">Contract - {post.contract}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
