"use client"
import { Button } from "antd"
import React from "react"

export const CreatePost = () => {
  return (
    <>
      <Button
        className="bg-secondary hover:bg-secondary"
        size="large"
        type="primary"
      >
        + Create New Post
      </Button>
    </>
  )
}
