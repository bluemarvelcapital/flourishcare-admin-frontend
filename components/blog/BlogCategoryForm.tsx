"use client";
import { Button, Form, Input } from "antd";
import React from "react";
import { IBlogTag } from "@/types/blog";
import {
    useCreateBlogTagMutation,
    useUpdateBlogTagMutation,
} from "@/services/blog.service";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addTag, updateTags } from "@/context/blog.slice";

export const BlogCategoryForm = () => {
    const [form] = Form.useForm<{ name: string }>();
    const [createCategory, { isLoading }] = useCreateBlogTagMutation();
    const dispatch = useDispatch();

    const handleUpdate = async () => {
        try {
            const { name } = form.getFieldsValue();
            const data = await createCategory(name).unwrap();

            toast.success("Category created successfully");
            form.setFieldValue("name", "");
            dispatch(addTag(data.data.tag));
        } catch (error) {
            console.log({ error });
            toast.error("Error creating category");
        }
    };
    return (
        <div className="mt-5">
            <Form layout="vertical" form={form} onFinish={handleUpdate}>
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
                <Button
                    type="primary"
                    className="bg-secondary w-full"
                    size="large"
                    htmlType="submit"
                    loading={isLoading}
                >
                    Create Blog Category
                </Button>
            </Form>
        </div>
    );
};

export const EditBlogCategoryForm = ({ category }: { category: IBlogTag }) => {
    const [form] = Form.useForm<{ name: string }>();
    const [updateCategory, { isLoading }] = useUpdateBlogTagMutation();
    const dispatch = useDispatch();

    const handleUpdate = async () => {
        try {
            const { name } = form.getFieldsValue();
            const response = await updateCategory({
                id: category.id,
                name,
            }).unwrap();

            toast.success("Category updated successfully");
            form.setFieldValue("name", "");
            dispatch(updateTags(response.data.tag));
        } catch (error) {
            console.log({ error });
            toast.error("Error updating category");
        }
    };

    return (
        <div className="mt-5">
            <Form layout="vertical" form={form} onFinish={handleUpdate}>
                <Form.Item
                    label="Category Name"
                    name="name"
                    required
                    initialValue={category.name}
                    rules={[
                        {
                            required: true,
                            message: "Please enter the category name",
                        },
                    ]}
                >
                    <Input size="large" />
                </Form.Item>

                <Button
                    type="primary"
                    className="bg-secondary w-full"
                    size="large"
                    htmlType="submit"
                    loading={isLoading}
                >
                    Update Blog Category
                </Button>
            </Form>
        </div>
    );
};
