"use client";
import { setBookings } from "@/context/booking.slice";
import { useGetBookingsQuery } from "@/services/booking.service";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export const useBooking = () => {
    const { data: bookingData } = useGetBookingsQuery();
    const dispatch = useDispatch();

    useEffect(() => {
        if (bookingData?.data.bookings) {
            dispatch(setBookings(bookingData.data.bookings));
            setBookings(bookingData.data.bookings);
        }
    }, [bookingData?.data]);

    return { bookingData };
};
