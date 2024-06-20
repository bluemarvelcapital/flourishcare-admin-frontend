"use client";
import React from "react";
import { Avatar, Input, Popover, Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { ApplicationTypes } from "@/types/transactions";
import { BiSearch } from "react-icons/bi";
import { BsDot } from "react-icons/bs";

const columns: TableColumnsType<ApplicationTypes> = [
  {
    title: "Name",
    dataIndex: "name",
    render(value, record) {
      return <div className="flex items-center gap-3">{record.name}</div>;
    },
  },
  {
    title: "Date",
    dataIndex: "date",
    responsive: ["lg"],
    defaultSortOrder: "descend",
    sorter: (a, b) => Date.parse(a.date) - Date.parse(b.date),
  },
  {
    title: "Service",
    dataIndex: "service",
    responsive: ["lg"],
    defaultSortOrder: "descend",
    sorter: (a, b) => Date.parse(a.service) - Date.parse(b.service),
  },
  {
    title: "Amount",
    dataIndex: "amount",
    defaultSortOrder: "ascend",
    sorter: (a, b) => a.amount - b.amount,
    render(value, record) {
      return <div className="flex items-center gap-3">${record.amount}</div>;
    },
  },
  {
    title: "Status",
    dataIndex: "status",
    responsive: ["lg"], 
    render(value, record) {
      return (
        <div>
          {record.status.toLowerCase() === "failed" && (
            <p className="text-error-500 capitalize">
              <BsDot className="inline-block" /> {record.status}
            </p>
          )}
          {record.status.toLowerCase() === "completed" && (
            <p className="text-secondary capitalize">
              <BsDot className="inline-block" /> {record.status}
            </p>
          )}
        </div>
      );
    },
  },
];

const data: ApplicationTypes[] = [
  {
name : "Henrikk Laarsson",
date : "May 23, 2023 05:45 PM",
service: "Home Care domiciliary",
amount: 4800,
status: "completed"
  },
  {
name : "Henrikk Laarsson",
date : "May 23, 2023 05:45 PM",
service: "Home Care domiciliary",
amount: 4800,
status: "completed"
  },
  {
name : "Henrikk Laarsson",
date : "May 23, 2023 05:45 PM",
service: "Home Care domiciliary",
amount: 4800,
status: "failed"
  },
  {
name : "Henrikk Laarsson",
date : "May 23, 2023 05:45 PM",
service: "Home Care domiciliary",
amount: 4800,
status: "failed"
  },
  {
name : "Henrikk Laarsson",
date : "May 23, 2023 05:45 PM",
service: "Home Care domiciliary",
amount: 4800,
status: "failed"
  },
  {
name : "Henrikk Laarsson",
date : "May 23, 2023 05:45 PM",
service: "Home Care domiciliary",
amount: 4800,
status: "completed"
  },
  {
name : "Henrikk Laarsson",
date : "May 23, 2023 05:45 PM",
service: "Home Care domiciliary",
amount: 4800,
status: "completed"
  },
  {
name : "Henrikk Laarsson",
date : "May 23, 2023 05:45 PM",
service: "Home Care domiciliary",
amount: 4800,
status: "failed"
  },
  {
name : "Henrikk Laarsson",
date : "May 23, 2023 05:45 PM",
service: "Home Care domiciliary",
amount: 4800,
status: "completed"
  },
  {
name : "Henrikk Laarsson",
date : "May 23, 2023 05:45 PM",
service: "Home Care domiciliary",
amount: 4800,
status: "failed"
  },
  {
name : "Henrikk Laarsson",
date : "May 23, 2023 05:45 PM",
service: "Home Care domiciliary",
amount: 4800,
status: "completed"
  },
  {
name : "Henrikk Laarsson",
date : "May 23, 2023 05:45 PM",
service: "Home Care domiciliary",
amount: 4800,
status: "completed"
  },
];

const onChange: TableProps<ApplicationTypes>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log("params", pagination, filters, sorter, extra);
};

export const AllTransactions: React.FC = () => {
  console.log(data);
  return (
    <div>
      <div className="mb-4 flex md:flex-row flex-col gap-3 md:items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="text-xl">All Transactions</h2>
          <Avatar className="bg-primary">{data.length - 2}</Avatar>
        </div>
        <Input
          placeholder="Search Applications"
          size="large"
          prefix={<BiSearch />}
          className="md:w-[350px]"
        />
      </div>
      <Table columns={columns} dataSource={data} className="cursor-pointer" onChange={onChange} />
    </div>
  );
};
