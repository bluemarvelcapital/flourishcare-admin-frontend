"use client";
import React from "react";
import Header from "@/components/misc/Header";
import UserTable from "./UserTable";
import GoBack from "@/components/GoBack";
const AllUsers: React.FC = () => {
    return (
        <div className="flex flex-col gap-y-10">
            <div id="">
                <GoBack />
                <Header
                    header="All Users"
                    paragraph="Overview of all Users on the platform. "
                />
            </div>
            <UserTable />
        </div>
    );
};

export default AllUsers;

