"use client";
import { IStats } from "@/types/misc";
import { Tag } from "antd";
import React from "react";
import { IoIosArrowRoundUp } from "react-icons/io";

export const MetaData = ({ stats: _stats }: { stats?: IStats[] }) => {
    const stats = [
        {
            value: 4639,
            growth: 2.7,
            title: "Number of Clients",
        },
        {
            value: 4639,
            growth: 2.7,
            title: "Number of Bookings",
        },
        {
            value: 4639,
            growth: -2.7,
            title: "Completed Bookings",
        },
    ];

    _stats = _stats || stats;

    return (
        <div className="md:mt-[3rem] mt-[2rem]">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5">
                {_stats.map((stat, index) => (
                    <div
                        key={index}
                        className="border-[1px] border-[#E4E7EC] p-4 rounded-md flex flex-col gap-[2rem]"
                    >
                        <div className="flex items-center justify-between">
                            <p className="md:text-3xl font-semibold">
                                {stat.value.toLocaleString()}
                            </p>
                            <div>
                                {
                                    <Tag
                                        color={
                                            stat.growth > 0
                                                ? "success"
                                                : "error"
                                        }
                                        className="flex items-center"
                                    >
                                        <IoIosArrowRoundUp
                                            className={`${
                                                stat.growth > 0
                                                    ? "text-success"
                                                    : "text-error rotate-180"
                                            } mr-1`}
                                        />
                                        {stat.growth > 0
                                            ? stat.growth
                                            : stat.growth * -1}
                                        %
                                    </Tag>
                                }
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <p className="text-[14px] text-[#000]/60">
                                {stat.title}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
