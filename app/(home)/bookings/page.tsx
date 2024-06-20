"use client";
import { PendingPosts } from "@/components/blog/PendingPosts";
import React from "react";
import Header from "@/components/misc/Header";
import { AllBookings } from "../../../components/bookings/AllBookings";
import { MetaData } from "../../../components/bookings/MetaData";
import { PendingBookings } from "@/components/bookings/PendingBookings";

const AdminBlog = () => {
  return (
    <div>
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <Header
            header="Bookings"
            paragraph="Hub for managing all appointments and reservations made by users."
          />
        </div>
      </div>
      <MetaData />
      <div className="mt-[3rem] flex justify-between lg:flex-row flex-col gap-3">
        <div className="lg:w-[70%]">
          <AllBookings />
        </div>
        <div className="lg:w-[27%]">
          <PendingBookings />
        </div>
      </div>
    </div>
  );
};

export default AdminBlog;
