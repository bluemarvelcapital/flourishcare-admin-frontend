"use client";
import Header from "@/components/misc/Header";
import { MdOutlineEditCalendar } from "react-icons/md";
import AppointmentDetails from "./AppointmentDetails";
import PersonalInformation from "./PersonalInformation";
import { useParams } from "next/navigation";
import { IBookingWithRelations, IBookingWithServices } from "@/types/bookings";
import React from "react";
import { useGetBookingQuery } from "@/services/booking.service";
import { WindowSpinner } from "@/components/Spinner";
import ServiceDetails from "./ServiceDetails";
import { toast } from "react-toastify";
import GoBack from "@/components/GoBack";

const BookingOverview: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [booking, setBooking] = React.useState<IBookingWithRelations | null>(
        null,
    );
    const { data, isLoading } = useGetBookingQuery(id ?? "");

    React.useEffect(() => {
        if (data?.data.booking) {
            setBooking(data.data.booking);
        }
        if (!isLoading && !data) {
            toast.error("Booking not found");
        }
    }, [data, isLoading]);

    return (
        <div className="flex flex-col">
            <GoBack />
            <div className="flex flex-col gap-y-12">
                <div className="flex justify-between items-center flex-row">
                    <div className="flex flex-row items-center">
                        <Header
                            header="Booking Overview"
                            paragraph="Booking details"
                        />
                    </div>
                    <div className="flex flex-row items-center gap-x-4 mt-10">
                        <div className="bg-white cursor-pointer border border-tertiary flex flex-row gap-x-2 justify-center p-3 rounded-md text-tertiary items-center text-opacity-50">
                            <MdOutlineEditCalendar className="text-tertiary" />
                            <p>Update Booking</p>
                        </div>
                    </div>
                </div>
                {booking ? (
                    <div className="grid grid-cols-1 gap-x-10 md:grid-cols-3">
                        <PersonalInformation user={booking.user} />
                        <AppointmentDetails
                            appointment={booking.appointment}
                            user={booking.user}
                        />
                        <ServiceDetails services={booking.services} />
                    </div>
                ) : (
                    <WindowSpinner />
                )}
            </div>
        </div>
    );
};

export default BookingOverview;
