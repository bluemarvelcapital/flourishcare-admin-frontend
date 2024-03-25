"use client"
import { AllPosts, CreatePost, MetaData } from "@/components/blog"
import React from "react"

const AdminBlog = () => {
  return (
    <div>
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="md:text-4xl text-2xl md:mb-1">Blog Posts</h2>
          <p className="text-[15px]">Welcome to the blog post, Jenny</p>
        </div>
        <CreatePost />
      </div>
      <MetaData />
      <div className="mt-[3rem] flex justify-between">
        <div className="w-[73%]">
          <AllPosts />
        </div>
        <div className="w-[23%]"></div>
      </div>
    </div>
  )
}

export default AdminBlog
