"use client";
import React from "react";
import Header from "@/components/misc/Header";
import { AllJobApplications } from "@/components/job-applications/AllJobApplications";
import { MetaData } from "@/components/job-applications/MetaData";

const AdminBlog = () => {
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
      <div className="mt-[3rem] flex flex-col gap-3">
          <AllJobApplications />
      </div>
    </div>
  );
};

export default AdminBlog;
