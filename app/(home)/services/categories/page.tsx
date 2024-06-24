"use client";
import Header from "@/components/misc/Header";
import NoData from "@/components/misc/NoData";
import { CreateServiceCategory } from "@/components/services/CreateServiceCategory";
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
