"use client";
import React from "react";
import Header from "@/components/misc/Header";
import { MetaData } from "@/components/appointments/MetaData";
import { AllAppointments } from "@/components/appointments/AllAppointments";
import { PendingAppointments } from "@/components/appointments/PendingAppointments";

const AdminAppointments = () => {
  return (
    <div>
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <Header
            header="Appointments"
            paragraph="Welcome to the Appointment Page, your window into the booked appointments by our valued users."
          />
        </div>
      </div>
      <MetaData />
      <div className="mt-[3rem] flex justify-between lg:flex-row flex-col gap-3">
        <div className="lg:w-[70%]">
          <AllAppointments />
        </div>
        <div className="lg:w-[27%]">
          <PendingAppointments />
        </div>
      </div>
    </div>
  );
};

export default AdminAppointments;
