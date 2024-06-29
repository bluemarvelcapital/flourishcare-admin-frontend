"use client";
import { CreatePost } from "@/components/blog";
import Header from "@/components/misc/Header";
import { AllUsers } from "@/components/overview/AllUsers";
import { AppointmentsCard } from "@/components/appointments/AppointmentsCard";
import { BookingsCard } from "@/components/bookings/BookingsCard";
import DataTable from "@/components/overview/DataTable";
import { MetaData } from "@/components/overview/MetaData";
import { setAppointments } from "@/context/appointment.slice";
import { setBookings } from "@/context/booking.slice";
import { useGetAppointmentsQuery } from "@/services/appointment.service";
import { useGetBookingsQuery } from "@/services/booking.service";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const Overview = () => {
    const { data: appointmentData } = useGetAppointmentsQuery();
    const { data: bookingData } = useGetBookingsQuery();
    const dispatch = useDispatch();

    useEffect(() => {
        if (appointmentData?.data.appointments) {
            dispatch(setAppointments(appointmentData.data.appointments));
        }

        if (bookingData?.data.bookings) {
            console.log({ bookingData: bookingData.data.bookings });
            dispatch(setBookings(bookingData.data.bookings));
        }
        console.log({ bookingData: bookingData?.data });
    }, [appointmentData?.data, bookingData?.data]);

    return (
        <div>
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                    <Header
                        header="Overview"
                        paragraph="Welcome to the overview section"
                    />
                </div>
                <CreatePost />
            </div>
            <MetaData />
            <div className="mt-[3rem] flex justify-between lg:flex-row flex-col gap-3">
                <div className="lg:w-[70%] flex flex-col gap-y-10">
                    <DataTable />
                    <AllUsers max={5} />
                </div>
                <div className="lg:w-[27%] flex-col flex gap-y-4">
                    <AppointmentsCard />
                    <BookingsCard />
                </div>
            </div>
        </div>
    );
};

export default Overview;
