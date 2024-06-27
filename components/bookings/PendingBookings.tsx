"use client";
import { Avatar, Image, Popover } from "antd";
import React from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { data } from "@/types/bookings";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BsDot, BsFileEarmarkPdfFill } from "react-icons/bs";

export const PendingBookings = () => {
    return (
        <div className="border-[1px] border-[#E4E7EC] px-7 py-7 rounded-xl">
            <div className="mb-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <h2 className="text-xl">Pending Bookings</h2>
                    <Avatar className="bg-primary">8</Avatar>
                </div>
                <Link href="bookings/pending-bookings">
                    <div className="flex flex-row justify-between hover:border-b border-secondary duration-300 transition-all items-center space-x-5">
                        <p className="text-secondary">See All</p>
                        <MdKeyboardArrowRight className="text-secondary" />
                    </div>
                </Link>
            </div>
            <div className="flex flex-col gap-[1rem] mt-7">
                {data.map((post, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-between mb-4"
                    >
                        <div className="flex justify-center flex-col gap-3">
                            <div className="space-x-2 flex flex-row">
                                <span className="text-xl">{index + 1}</span>
                                <p className="text-xl">{post.name}</p>
                            </div>
                            <div className=" bg-primary bg-opacity-20 p-1 text-center">
                                <p className="text-[14px]">
                                    Appointment ID : {post.ID}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center flex-row gap-2 justify-center">
                            <BsDot className="text-error-500" />
                            {post.date}
                        </div>
                        <div className="flex flex-col gap-y-1 justify-center items-center">
                            {" "}
                            <BsFileEarmarkPdfFill className="text-error-500" />
                            <p>Contract - {post.contract}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
