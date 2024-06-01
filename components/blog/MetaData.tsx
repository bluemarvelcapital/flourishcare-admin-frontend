"use client"
import { RootState } from "@/context/store"
import { Tag } from "antd"
import React from "react"
import { IoIosArrowRoundUp } from "react-icons/io"
import { useSelector } from "react-redux"

export const MetaData = () => {
    const { published, total, views, draft } = useSelector((state: RootState) => state.blog)

    const stats = [
        {
            value: total,
            growth: 2.7,
            title: "Total Posts",
            time: "2 seconds ago",
        },
        {
            value: published,
            growth: 2.7,
            title: "Published Posts",
            time: "2 seconds ago",
        },
        {
            value: views,
            growth: -2.7,
            title: "Total Views",
            time: "2 seconds ago",
        },
        {
            value: draft,
            growth: 2.7,
            title: "Pending Posts",
            time: "2 seconds ago",
        },
    ]
    return (
        <div className="md:mt-[3rem] mt-[2rem]">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5">
                {stats.map((stat, index) => (
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
                                        color={stat.growth > 0 ? "success" : "error"}
                                        className="flex items-center"
                                    >
                                        <IoIosArrowRoundUp
                                            className={`${stat.growth > 0
                                                ? "text-success"
                                                : "text-error rotate-180"
                                                } mr-1`}
                                        />
                                        {stat.growth > 0 ? stat.growth : stat.growth * -1}%
                                    </Tag>
                                }
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <p className="text-[14px] text-[#000]/60">{stat.title}</p>
                            <p className="text-[12px] text-[#000]/50">{stat.time}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
