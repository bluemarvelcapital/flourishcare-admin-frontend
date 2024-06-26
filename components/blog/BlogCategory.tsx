"use client";
import { Button, Modal } from "antd";
import React, { useDebugValue, useState } from "react";
import { BlogCategoryForm, EditBlogCategoryForm } from "./BlogCategoryForm";
import { IBlogTag } from "@/types/blog";
import {
    useDeleteBlogTagMutation,
    useUpdateBlogTagMutation,
} from "@/services/blog.service";
import { IoClose } from "react-icons/io5";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { deleteTag } from "@/context/blog.slice";

export const AddBlogCategory = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Button
                className="bg-secondary"
                size="large"
                type="primary"
                onClick={() => setOpen(true)}
            >
                + Add Category
            </Button>
            <Modal
                width={"400px"}
                title={
                    <div>
                        <h2 className="text-2xl font-normal">
                            Create Blog Category
                        </h2>
                        <p className="font-normal text-[#ACACAC] mt-1">
                            Fill the details below to create a new blog category
                        </p>
                    </div>
                }
                open={open}
                onOk={() => setOpen(false)}
                onCancel={() => setOpen(false)}
                closeIcon={<></>}
                footer={null}
            >
                <BlogCategoryForm />
            </Modal>
        </>
    );
};

export const BlogCategoriesView = ({
    categories,
}: {
    categories: IBlogTag[];
}) => {
    const [open, setOpen] = useState(false);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<IBlogTag | null>(
        null,
    );
    const [apiDeleteTag, { isLoading }] = useDeleteBlogTagMutation();
    const dispatch = useDispatch();

    const handleDelete = async (id: string) => {
        try {
            await apiDeleteTag(id).unwrap();
            toast.success("Category deleted successfully");
            dispatch(deleteTag(id));
        } catch (error) {
            console.log({ error });
            toast.error("Error deleting category");
        }
    };

    return (
        <>
            <div className="flex flex-col w-[400px] p-3">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className="flex justify-between items-center border-b border-[#E4E7EC] py-3"
                    >
                        <p className="text-lg font-bold">
                            {category.name.toUpperCase()}
                        </p>
                        <div className="flex gap-3">
                            <Button
                                className="bg-secondary"
                                size="small"
                                type="primary"
                                onClick={() => {
                                    setOpen(true);
                                    setSelectedCategory(category);
                                }}
                            >
                                Edit
                            </Button>
                            <Button
                                className="bg-error"
                                size="small"
                                onClick={() => {
                                    setSelectedCategory(category);
                                    setDeleteModalOpen(true);
                                }}
                            >
                                Delete
                            </Button>
                        </div>
                    </div>
                ))}
                <Modal
                    width={"400px"}
                    title={
                        <div>
                            <h2 className="text-2xl font-normal">
                                Delete Blog category
                            </h2>
                            <p className="font-normal text-[#ACACAC] mt-1">
                                Are you sure you want to delete this category?
                            </p>
                        </div>
                    }
                    open={deleteModalOpen}
                    onOk={() => setDeleteModalOpen(false)}
                    onCancel={() => setDeleteModalOpen(false)}
                    closeIcon={<IoClose />}
                    footer={null}
                >
                    <div className="flex justify-between items-center">
                        <Button
                            className="bg-secondary my-3"
                            size="small"
                            type="primary"
                            onClick={() => {
                                handleDelete(selectedCategory!.id);
                                setDeleteModalOpen(false);
                            }}
                        >
                            Yes
                        </Button>
                        <Button
                            className="bg-error my-3"
                            size="small"
                            onClick={() => setDeleteModalOpen(false)}
                        >
                            No
                        </Button>
                    </div>
                </Modal>
                <Modal
                    width={"400px"}
                    title={
                        <div>
                            <h2 className="text-2xl font-normal">
                                Update Blog Category
                            </h2>
                            <p className="font-normal text-[#ACACAC] mt-1">
                                Fill the details below to update the blog
                                category
                            </p>
                        </div>
                    }
                    open={open}
                    onOk={() => setOpen(false)}
                    onCancel={() => setOpen(false)}
                    closeIcon={<IoClose />}
                    footer={null}
                >
                    <EditBlogCategoryForm category={selectedCategory!} />
                </Modal>
            </div>
        </>
    );
};
