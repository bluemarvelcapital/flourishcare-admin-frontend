"use client";
import Header from "@/components/misc/Header";
import NoData from "@/components/misc/NoData";
import { AllServices } from "@/components/services/serviceReviews/AllServices";
import React from "react";

const AdminBlog = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-3 md:flex-row md:items-center">
        <Header
          header="Service Reviews"
          paragraph="Welcome to service reviews, Jenny"
        />
      </div>
      <div className="mt-[3rem] flex flex-col">
          <AllServices />
      </div>
    </div>
  );
};

export default AdminBlog;
