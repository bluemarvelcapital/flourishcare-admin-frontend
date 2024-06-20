"use client";
import { Avatar, Image, Popover } from "antd";
import React from "react";
import { IoFilter } from "react-icons/io5";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { data } from "@/types/bookings";

export const PendingBookings = () => {
  return (
    <div className="border-[1px] border-[#E4E7EC] px-7 py-7 rounded-xl">
      <div className="mb-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <h2 className="text-xl">Pending Bookings</h2>
          <Avatar className="bg-primary">8</Avatar>
        </div>
<div>
  See all 
</div>
      </div>
      <div className="flex flex-col gap-[1rem] mt-7">
        {data.map((post, index) => (
          <div key={index} className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div>
                <p className="text-[14px]">{post.name}</p>
              </div>
            </div>
            <Popover
              content={
                <div className="flex flex-col gap-3 w-[100px]">
                  <p className="cursor-pointer">Publish</p>
                  <p className="text-error-500 cursor-pointer">Delete</p>
                </div>
              }
              trigger={"hover"}
              arrow={false}
            >
              <HiOutlineDotsVertical className="text-lg cursor-pointer" />
            </Popover>
          </div>
        ))}
      </div>
    </div>
  );
};
