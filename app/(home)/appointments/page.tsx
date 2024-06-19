"use client";
import { CreatePost } from "@/components/blog";
import { PendingPosts } from "@/components/blog/PendingPosts";
import React from "react";
import Header from "@/components/misc/Header";
import { MetaData } from "@/components/appointments/MetaData";
import { AllPosts } from "@/components/appointments/AllPosts";

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
      <div className="mt-[3rem] flex justify-between lg:flex-row flex-col gap-3">
        <div className="lg:w-[70%]">
          <AllPosts />
        </div>
        <div className="lg:w-[27%]">
          <PendingPosts />
        </div>
      </div>
    </div>
  );
};

export default AdminBlog;
