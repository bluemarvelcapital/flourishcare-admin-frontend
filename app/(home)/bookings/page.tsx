"use client";
import { AllPosts, CreatePost, MetaData } from "@/components/blog";
import { PendingPosts } from "@/components/blog/PendingPosts";
import React from "react";
import Header from "@/components/misc/Header";

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
        <CreatePost />
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
