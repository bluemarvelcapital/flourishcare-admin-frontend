"use client";
import { BlogCategory } from "@/components/blog/BlogCategory";
import Header from "@/components/misc/Header";
import NoData from "@/components/misc/NoData";
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
