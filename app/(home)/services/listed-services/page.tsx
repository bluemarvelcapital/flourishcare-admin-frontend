"use client";
import Header from "@/components/misc/Header";
import { CreateService } from "@/components/services/CreateService";
import { MetaData } from "@/components/services/MetaData";
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
                <CreateService />
            </div>
            <MetaData />
        </div>
    );
};

export default AdminBlog;
