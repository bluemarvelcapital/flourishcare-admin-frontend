"use client";
import { Button, Form, Input } from "antd";
import React from "react";
import { AppointmentsEditor } from "./AppointmentsEditor";
import { UploadMedia } from "./UploadMedia";

export const AppointmentsForm = () => {
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
          <AppointmentsEditor />
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
        <Form.Item
          label="Cover Image"
          name="cover_image"
          required
          rules={[
            {
              required: true,
              message: "Please enter the cover image",
            },
          ]}
        >
          <UploadMedia id={"cover_image"} />
        </Form.Item>
        <Button type="primary" className="bg-secondary w-full" size="large">
          Create Post
        </Button>
      </Form>
    </div>
  );
};
