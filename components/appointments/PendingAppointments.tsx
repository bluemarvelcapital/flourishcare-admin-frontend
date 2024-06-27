"use client";
import { Avatar, Image, Popover } from "antd";
import React from "react";
import { AppointmentTypes } from "@/types/appointments";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

export const PendingAppointments = () => {
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
        <div className="border-[1px] border-[#E4E7EC] px-7 py-7 rounded-xl">
            <div className="mb-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <h2 className="text-xl">Pending Appointments</h2>
                    <Avatar className="bg-primary">8</Avatar>
                </div>
                <Link href="appointments/pending-appointments">
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
                                    Appointment ID : {post.id}
                                </p>
                            </div>
                        </div>
                        <div className="max-w-[100px]">{post.createdAt}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};
