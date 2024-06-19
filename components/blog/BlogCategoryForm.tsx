"use client";
import { Button, Form, Input } from "antd";
import React from "react";
import { BlogEditor } from "../blog/BlogEditor";
import { UploadMedia } from "../blog/UploadMedia";

export const BlogCategoryForm = () => {
  return (
    <div className="mt-5">
      <Form layout="vertical">
        <Form.Item
          label="Category Name"
          name="name"
          required
          rules={[
            {
              required: true,
              message: "Please enter the category name",
            },
          ]}
        >
          <Input size="large" />
        </Form.Item>
        <Button type="primary" className="bg-secondary w-full" size="large">
          Create Blog Category
        </Button>
      </Form>
    </div>
  );
};
