"use client";
import React, { useEffect } from "react";
import Header from "@/components/misc/Header";
import { AllBookings } from "../../../components/bookings/AllBookings";
import { MetaData } from "../../../components/bookings/MetaData";
import { PendingBookings } from "@/components/bookings/PendingBookings";
import { useSelector } from "react-redux";
import { RootState } from "@/context/store";
import { BookingStatus } from "@/types/bookings";
import { PendingAppointments } from "@/components/appointments/PendingAppointments";

const Bookings = () => {
    const { bookings } = useSelector((state: RootState) => state.booking);
    const pendingBookings = bookings.filter(
        (booking) => booking.status == BookingStatus.DRAFT,
    );

    const stats = [
        {
            title: "Total Bookings",
            value: bookings.length,
            color: "bg-primary",
            growth: 2.7,
        },
        {
            title: "Pending Bookings",
            value: pendingBookings.length,
            color: "bg-secondary",
            growth: 2.7,
        },
        {
            title: "Completed Bookings",
            value: bookings.length - pendingBookings.length,
            color: "bg-success",
            growth: 2.7,
        },
        {
            title: "Cancelled Bookings",
            value: bookings.filter(
                (booking) => booking.status == BookingStatus.CANCELLED,
            ).length,
            color: "bg-success",
            growth: 2.7,
        },
    ];

    return (
        <div>
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                    <Header
                        header="Bookings"
                        paragraph="Hub for managing all bookings and reservations made by users."
                    />
                </div>
            </div>
            <div className="mt-[3rem] flex justify-between lg:flex-row flex-col gap-3">
                {pendingBookings.length ? (
                    <>
                        <div className="lg:w-[70%]">
                            <AllBookings />
                        </div>

                        <div className="lg:w-[27%]">
                            <PendingBookings bookings={pendingBookings} />
                        </div>
                    </>
                ) : (
                    <div className="w-full">
                        <AllBookings />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Bookings;
