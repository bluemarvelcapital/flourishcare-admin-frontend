"use client";
import { AllPosts, CreatePost, MetaData } from "@/components/blog";
import { PendingPosts } from "@/components/blog/PendingPosts";
import Header from "@/components/misc/Header";
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
