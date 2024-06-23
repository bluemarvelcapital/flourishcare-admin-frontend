"use client";
// import { AllPosts, MetaData } from "@/components/blog";
import { PendingPosts } from "@/components/blog/PendingPosts";
import Header from "@/components/misc/Header";
import NoData from "@/components/misc/NoData";
import { AllPosts } from "@/components/services/AllPosts";
import { CreatePost } from "@/components/services/CreateService";
import { MetaData } from "@/components/services/MetaData";
// import { CreatePost, MetaData, AllPosts } from "@/components/services";
import React from "react";

const AdminBlog = () => {
    return (
        <div>
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                    <Header
                        header="Services"
                        paragraph="Welcome to services, Jenny"
                    />
                </div>
                <CreatePost />
            </div>
            <MetaData />
            {/* <div className="mt-[3rem] flex justify-between lg:flex-row flex-col gap-3">
        <div className="lg:w-[70%]">
          <AllPosts />
        </div>
        <div className="lg:w-[27%]">
          <PendingPosts />
        </div>
      </div> */}
            <AllPosts />
        </div>
    );
};

export default AdminBlog;
