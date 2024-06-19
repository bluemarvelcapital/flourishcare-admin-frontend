"use client";
import { BlogCategory } from "@/components/blog/BlogCategory";
// import { AllPosts, MetaData } from "@/components/blog";
import { PendingPosts } from "@/components/blog/PendingPosts";
import Header from "@/components/misc/Header";
import NoData from "@/components/misc/NoData";
import { AllPosts } from "@/components/services/AllPosts";
import { CreatePost } from "@/components/services/CreateService";
import { CreateServiceCategory } from "@/components/services/CreateServiceCategory";
import { MetaData } from "@/components/services/MetaData";
// import { CreatePost, MetaData, AllPosts } from "@/components/services";
import React from "react";

const AdminBlog = () => {
  return (
    <div>
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <Header header="Services" paragraph="Welcome to services, Jenny" />
        </div>
        <BlogCategory />
      </div>
      <div className="flex gap-y-3 flex-col justify-center items-center">
        <NoData
          imageUrl="/blog-categories.svg"
          headerText="No Blog category Yet"
          paragraph="There are no categories yet. Please add a blog category to organize your content."
        />
        <BlogCategory />
      </div>
    </div>
  );
};

export default AdminBlog;
