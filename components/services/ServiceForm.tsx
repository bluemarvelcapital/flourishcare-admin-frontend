"use client";
import { Button, Form, Input } from "antd";
import React from "react";
import { BlogEditor } from "../blog/BlogEditor";
import { UploadMedia } from "../blog/UploadMedia";

export const ServiceForm = () => {
  return (
    <div className="mt-5">
      <Form layout="vertical">
        <Form.Item
          label="Title"
          name="title"
          required
          rules={[
            {
              required: true,
              message: "Please enter the title",
            },
          ]}
        >
          <Input size="large" />
        </Form.Item>
        <Form.Item
          label="Price"
          name="price"
          required
          rules={[
            {
              required: true,
              message: "Please enter the price",
            },
          ]}
        >
          <Input size="large" />
        </Form.Item>
        <Form.Item
          label="Category"
          name="category"
          required
          rules={[
            {
              required: true,
              message: "Please enter the category",
            },
          ]}
        >
          <Input size="large" />
        </Form.Item>
        <Form.Item
          label="Description"
          name="description"
          required
          rules={[
            {
              required: true,
              message: "Please enter the description",
            },
          ]}
        >
          <BlogEditor  content="" setContent={() => {}}/>
        </Form.Item>
        <Form.Item
          label="Preview Image"
          name="preview_image"
          required
          rules={[
            {
              required: true,
              message: "Please enter the preview image",
            },
          ]}
        >
          <UploadMedia id={"preview_image"} />
        </Form.Item>
        <Button type="primary" className="bg-secondary w-full" size="large">
          Create Category
        </Button>
      </Form>
    </div>
  );
};
