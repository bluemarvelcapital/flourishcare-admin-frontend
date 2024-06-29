"use client";
import { Avatar, Image, Popover } from "antd";
import React from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IBooking, data } from "@/types/bookings";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BsDot, BsFileEarmarkPdfFill } from "react-icons/bs";
import TruncatedID from "../TruncatedText";
import FileLink from "../FileLink";

export const PendingBookings = ({ bookings }: { bookings: IBooking[] }) => {
    return (
        <div className="border-[1px] border-[#E4E7EC] px-7 py-7 rounded-xl">
            <div className="mb-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <h2 className="text-xl">Pending Bookings</h2>
                    <Avatar className="bg-primary">{bookings.length}</Avatar>
                </div>
                <Link href="bookings/?status=DRAFT">
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
                {bookings.slice(0, 9).map((booking, index) => (
                    <div className="flex items-center my-3 hover:px-7 rounded-md  hover:bg-[#F9F9F9]   transition-all duration-300 justify-between ">
                        <Link
                            href={`/booking/${booking.id}`}
                            key={index}
                            className="flex flex-row space-between w-full border-b hover:border-0 "
                        >
                            <div className="flex justify-center flex-col gap-1">
                                <div className="space-x-2 flex flex-row">
                                    <span className="text-sm">{index + 1}</span>
                                    <p>Appointment ID:</p> {""}
                                </div>
                                <div className="bg-primary ml-3 text-[9px] whitespace-wrap bg-opacity-20 p-1 text-center">
                                    <TruncatedID
                                        text={booking.id}
                                        maxLength={30}
                                    />
                                </div>
                                <div className="flex flex-row items-center gap-2 mr-auto text-xs">

                                    {booking.paid ? (
                                        <BsDot className="text-[#3ebd64] w-9 h-9 m-0" />
                                    ) : (
                                        <BsDot className="text-error-500 w-9 h-9 m-0" />
                                    )}

                                    {new Date(booking.createdAt).toDateString()}
                                </div>
                            </div>
                            <div className="flex flex-col ml-auto items-left">
                                {booking.contract ? (
                                    <FileLink
                                        name="Signed Contract"
                                        link={booking.contract}
                                    />
                                ) : (
                                    <p className="text-[11px] text-red bg-[#f7f7f7] p-2 text-center">
                                        No signed contract
                                    </p>
                                )}

                                {booking.documents.find(
                                    (document) =>
                                        document.type === "presignedContract",
                                ) ? (
                                    <FileLink
                                        name="Presigned Contract"
                                        link={
                                            booking.documents.find(
                                                (document) =>
                                                    document.type ===
                                                    "presignedContract",
                                            )!.url
                                        }
                                    />
                                ) : (
                                    <p className="text-[10px] text-red bg-[#f7f7f7] p-2 text-center">
                                        No Presigned Contract
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
