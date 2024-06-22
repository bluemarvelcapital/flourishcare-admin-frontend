"use client";
import { CreatePost } from "@/components/blog";
import { PendingPosts } from "@/components/blog/PendingPosts";
import Header from "@/components/misc/Header";
import { AllUsers } from "@/components/overview/AllUsers";
import { BookingsTable } from "@/components/overview/BookingsTable";
import DataTable from "@/components/overview/DataTable";
import { MetaData } from "@/components/overview/MetaData";
import React from "react";

const AdminBlog = () => {
  return (
    <div>
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <Header header="Overview" paragraph="Welcome to the overview section" />
        </div>
        <CreatePost />
      </div>
      <MetaData />
      <div className="mt-[3rem] flex justify-between lg:flex-row flex-col gap-3">
        <div className="lg:w-[70%] flex flex-col gap-y-10">
          <DataTable />
          <AllUsers />
        </div>
        <div className="lg:w-[27%] flex-col flex gap-y-4">
          <PendingPosts />
          <BookingsTable />
        </div>
      </div>
    </div>
  );
};

export default AdminBlog;
