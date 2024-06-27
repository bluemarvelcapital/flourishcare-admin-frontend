"use client";
import { Avatar } from "antd";
import React from "react";
import { AppointmentStatus, IAppointment } from "@/types/appointments";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import TruncatedID from "../TruncatedText";
import { useSelector } from "react-redux";
import { RootState } from "@/context/store";
import NoData from "../misc/NoData";

export const AppointmentsCard = () => {
    const { appointments } = useSelector(
        (state: RootState) => state.appointment,
    );
    // const pendingAppointments = appointments.filter(
    //     (appointment) => appointment.status != AppointmentStatus.PENDING,
    // );
    const pendingAppointments = appointments;
    console.log({ appointments, pendingAppointments });

    return (
        <div className="border-[1px] border-[#E4E7EC] py-7 rounded-xl my-5">
            <div className="mb-4 flex justify-between px-7 items-center">
                <div className="flex items-center gap-2">
                    <h2 className="text-xl">Appointments</h2>
                    <Avatar className="bg-primary">
                        {pendingAppointments.length}
                    </Avatar>
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
                {pendingAppointments.length === 0 ? (
                    <NoData
                        imageUrl="/listed-services.svg"
                        headerText="No Pending Appointments"
                        paragraph="No pending appointments at the moment."
                    />
                ) : (
                    pendingAppointments
                        .slice(0, 5)
                        .map((appointment, index) => (
                            <div
                                key={index}
                                className="flex py-3 items-center px-7 hover:bg-[#F9F9F9] transition-all duration-300 justify-between"
                            >
                                <div className="flex justify-center flex-col gap-3">
                                    <div className="space-x-2 flex flex-row">
                                        <span className="text-sm">
                                            {index + 1}
                                        </span>
                                        <p className="text-sm">
                                            {appointment.title}
                                        </p>
                                    </div>
                                    <div className=" bg-primary bg-opacity-20 p-1 text-center">
                                        <p className="text-[9px]">
                                            <TruncatedID
                                                text={appointment.id}
                                                maxLength={20}
                                            />
                                        </p>
                                    </div>
                                </div>
                                <div className="text-xs">
                                    {new Date(
                                        appointment.createdAt,
                                    ).toDateString()}
                                </div>
                            </div>
                        ))
                )}
            </div>
        </div>
    );
};
