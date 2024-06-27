"use client";
import { Avatar, Image, Popover } from "antd";
import React from "react";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BsDot, BsFileEarmarkPdfFill } from "react-icons/bs";
import TruncatedID from "../TruncatedText";
import { useSelector } from "react-redux";
import { RootState } from "@/context/store";
import FileLink from "../FileLink";

export const BookingsCard = () => {
    const { bookings } = useSelector((state: RootState) => state.booking);
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
                {bookings.map((booking, index) => (
                    <div className="flex items-center py-3 px-7 hover:bg-[#F9F9F9] transition-all duration-300 justify-between ">
                        <Link href={`/booking/${booking.id}`} key={index}>
                            <div className="flex justify-center flex-col gap-3">
                                <div className=" bg-primary bg-opacity-20 p-1 text-center">
                                    <p className=" text-[9px]">
                                        <TruncatedID text={booking.id} />
                                    </p>
                                </div>
                                <div className="space-x-2 flex flex-row">
                                    <span className="text-sm">{index + 1}</span>
                                    <p className="text-sm">
                                        {booking.appointmentId}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center flex-row gap-2 justify-center text-xs">
                                <BsDot className="text-error-500" />
                                {new Date(booking.createdAt).toDateString()}
                            </div>

                            <div className="flex flex-col gap-y-1 justify-center items-center p-2 bg-[#F7F7F7]">
                                {booking.contract ? (
                                    <FileLink link={booking.contract!}>
                                        {" "}
                                        <BsFileEarmarkPdfFill className="text-error-500" />
                                        <p className="text-[8px]">
                                            Contract - {booking.contract}
                                        </p>
                                    </FileLink>
                                ) : (
                                    <p className="text-[8px] text-red">
                                        No contract drafted
                                    </p>
                                )}
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};
