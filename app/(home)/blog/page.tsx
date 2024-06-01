"use client"
import { AllPosts, CreatePost, MetaData } from "@/components/blog"
import { PendingPosts } from "@/components/blog/PendingPosts"
import LoggedView from "@/components/LoggedView"
import React from "react"

const AdminBlog = () => {
    return (
        <div>
            <LoggedView>
                <div className="flex flex-col h-full gap-3 md:flex-row md:items-center md:justify-between">
                    <div>
                        <h2 className="md:text-4xl text-2xl md:mb-1">Blog Posts</h2>
                        <p className="text-[15px]">Welcome to the blog post, Jenny</p>
                    </div>
                    <CreatePost />
                </div>
                <MetaData />
                <div className="mt-[3rem] flex justify-between lg:flex-row flex-col gap-3">
                    <div className="lg:w-[70%]">
                        <AllPosts />
                    </div>
                    <div className="lg:w-[27%]">
                        <PendingPosts />
                    </div>
                </div>
            </LoggedView>
        </div>
    )
}

export default AdminBlog
