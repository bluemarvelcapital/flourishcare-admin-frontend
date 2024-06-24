"use client";
// import { AllPosts, MetaData } from "@/components/blog";
import { PendingPosts } from "@/components/blog/PendingPosts";
import Header from "@/components/misc/Header";
import NoData from "@/components/misc/NoData";
import { AllPosts } from "@/app/(home)/services/listed-services/AllServices";
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
                    <Header
                        header="Services"
                        paragraph="Welcome to services, Jenny"
                    />
                </div>
                <CreateServiceCategory />
            </div>
            <div className="flex gap-y-2 flex-col justify-center items-center">
                <NoData
                    headerText="No Service Category Yet"
                    paragraph="There are no Service Categories yet, Please create a new service category"
                    imageUrl="/listed-services.svg"
                />
                <CreateServiceCategory />
            </div>
        </div>
    );
};

export default AdminBlog;
