"use client";
import React from "react";
import Header from "@/components/misc/Header";
import { AllTransactions } from "@/components/transactions/AllTransactions";
import { MetaData } from "@/components/transactions/MetaData";

const AdminBlog = () => {
  return (
    <div>
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <Header
            header="Transactions"
            paragraph="This page allows you to customize and manage various aspects of your account and preferences."
          />
        </div>
      </div>
      <MetaData />
      <div className="mt-[3rem] flex flex-col gap-3">
        <AllTransactions />
      </div>
    </div>
  );
};

export default AdminBlog;
