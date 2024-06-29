"use client";
import { setAppointments } from "@/context/appointment.slice";
import { setBookings } from "@/context/booking.slice";
import { setServices } from "@/context/service.slice";
import { useGetAppointmentsQuery } from "@/services/appointment.service";
import { useGetBookingsQuery } from "@/services/booking.service";
import { useGetServicesQuery } from "@/services/services.service";
import React, { ReactNode, useEffect } from "react";
import { useDispatch } from "react-redux";

export default function FetchDataToStore({
    children,
}: {
    children: ReactNode;
}) {
    const { data: bookingsData } = useGetBookingsQuery();
    const { data: servicesData } = useGetServicesQuery();
    const { data: appointmentData } = useGetAppointmentsQuery();
    const dispatch = useDispatch();

    useEffect(() => {
        if (bookingsData?.data.bookings) {
            dispatch(setBookings(bookingsData.data.bookings));
        }

        if (servicesData?.data.services) {
            dispatch(setServices(servicesData.data.services));
        }

        if (appointmentData?.data.appointments) {
            dispatch(setAppointments(appointmentData.data.appointments));
        }
    }, [bookingsData, servicesData, appointmentData, dispatch]);

    return <>{children}</>;
}
