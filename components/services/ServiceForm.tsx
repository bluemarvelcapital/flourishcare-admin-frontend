"use client";
import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import { BlogEditor } from "../blog/BlogEditor";
import { UploadMedia } from "../blog/UploadMedia";

interface ServiceFormProps {
    onCancel: () => void;
}

export const ServiceForm: React.FC<ServiceFormProps> = ({ onCancel }) => {
    const [content, setContent] = useState<string>("");
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
                    <BlogEditor content={content} setContent={setContent} />
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
                <div className="flex flex-row gap-x-4 justify-center items-center">
                    <Button
                        type="primary"
                        className="bg-secondary w-full"
                        size="large"
                    >
                        Save Changes
                    </Button>
                    <Button
                        onClick={onCancel}
                        type="primary"
                        className="border-secondary text-secondary bg-white w-full"
                        size="large"
                    >
                        Cancel
                    </Button>
                </div>
            </Form>
        </div>
    );
};
