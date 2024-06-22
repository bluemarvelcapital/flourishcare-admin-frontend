"use client";
import React from "react";
import Header from "@/components/misc/Header";
import UserTable from "./UserTable";
 const AllUsers: React.FC = () => {
    return (
        <div className="flex flex-col gap-y-10">
            <Header header="All Users" paragraph="Welcome to the Flourish admin dashboard." />
            <UserTable />
        </div>
    );
};

export default AllUsers