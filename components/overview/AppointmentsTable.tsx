"use client";
import { Avatar, Image, Popover } from "antd";
import React from "react";
import { AppointmentTypes } from "@/types/appointments";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

export const AppointmentsTable = () => {
    const data: AppointmentTypes[] = [
        {
            name: "Maximillian Schwarzmueller",
            createdAt: "2021-09-01",
            updatedAt: "2021-09-01",
            amount: 2500.0,
            status: "pending",
            id: "FLo-1495DD",
            preview_img: "/bookings-user-image.svg",
        },
        {
            name: "Maximillian Schwarzmueller",
            createdAt: "2021-09-01",
            updatedAt: "2021-09-01",
            amount: 2500.0,
            status: "completed",
            id: "FLo-1495DD",
            preview_img: "/bookings-user-image.svg",
        },
        {
            name: "Maximillian Schwarzmueller",
            createdAt: "2021-09-01",
            updatedAt: "2021-09-01",
            amount: 2500.0,
            status: "pending",
            id: "FLo-1495DD",
            preview_img: "/bookings-user-image.svg",
        },
        {
            name: "Maximillian Schwarzmueller",
            createdAt: "2021-09-01",
            updatedAt: "2021-09-01",
            amount: 2500.0,
            status: "canceled",
            id: "FLo-1495DD",
            preview_img: "/bookings-user-image.svg",
        },
        {
            name: "Maximillian Schwarzmueller",
            createdAt: "2021-09-01",
            updatedAt: "2021-09-01",
            amount: 2500.0,
            status: "pending",
            id: "FLo-1495DD",
            preview_img: "/bookings-user-image.svg",
        },
        {
            name: "Maximillian Schwarzmueller",
            createdAt: "2021-09-01",
            updatedAt: "2021-09-01",
            amount: 2500.0,
            status: "canceled",
            id: "FLo-1495DD",
            preview_img: "/bookings-user-image.svg",
        },
        {
            name: "Maximillian Schwarzmueller",
            createdAt: "2021-09-01",
            updatedAt: "2021-09-01",
            amount: 2500.0,
            status: "completed",
            id: "FLo-1495DD",
            preview_img: "/bookings-user-image.svg",
        },
        {
            name: "Maximillian Schwarzmueller",
            createdAt: "2021-09-01",
            updatedAt: "2021-09-01",
            amount: 2500.0,
            status: "canceled",
            id: "FLo-1495DD",
            preview_img: "/bookings-user-image.svg",
        },
        {
            name: "Maximillian Schwarzmueller",
            createdAt: "2021-09-01",
            updatedAt: "2021-09-01",
            amount: 2500.0,
            status: "pending",
            id: "FLo-1495DD",
            preview_img: "/bookings-user-image.svg",
        },
        {
            name: "Maximillian Schwarzmueller",
            createdAt: "2021-09-01",
            updatedAt: "2021-09-01",
            amount: 2500.0,
            status: "completed",
            id: "FLo-1495DD",
            preview_img: "/bookings-user-image.svg",
        },
        {
            name: "Maximillian Schwarzmueller",
            createdAt: "2021-09-01",
            updatedAt: "2021-09-01",
            amount: 2500.0,
            status: "pending",
            id: "FLo-1495DD",
            preview_img: "/bookings-user-image.svg",
        },
        {
            name: "Maximillian Schwarzmueller",
            createdAt: "2021-09-01",
            updatedAt: "2021-09-01",
            amount: 2500.0,
            status: "canceled",
            id: "FLo-1495DD",
            preview_img: "/bookings-user-image.svg",
        },
    ];
    return (
        <div className="border-[1px] border-[#E4E7EC] py-7 rounded-xl my-5">
            <div className="mb-4 flex justify-between px-7 items-center">
                <div className="flex items-center gap-2">
                    <h2 className="text-xl">Appointments</h2>
                    <Avatar className="bg-primary">8</Avatar>
                </div>
                <Link href="/appointments">
                    <div className="flex flex-row justify-between hover:border-b border-secondary duration-300 transition-all items-center space-x-5">
                        <p className="text-secondary">See All</p>
                        <MdKeyboardArrowRight className="text-secondary" />
                    </div>
                </Link>
            </div>
            <div
                className="flex flex-col h-fit max-h-[400px] overflow-y-auto"
                id="json-container"
            >
                {data.map((post, index) => (
                    <div
                        key={index}
                        className="flex py-3 items-center px-7 hover:bg-[#F9F9F9] transition-all duration-300 justify-between"
                    >
                        <div className="flex justify-center flex-col gap-3">
                            <div className="space-x-2 flex flex-row">
                                <span className="text-sm">{index + 1}</span>
                                <p className="text-sm">{post.name}</p>
                            </div>
                            <div className=" bg-primary bg-opacity-20 p-1 text-center">
                                <p className="text-[8px]">
                                    Appointment ID : {post.id}
                                </p>
                            </div>
                        </div>
                        <div className="text-xs">{post.createdAt}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};
