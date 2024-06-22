"use client";
import { Avatar, Image, Popover } from "antd";
import React from "react";
import { IoFilter } from "react-icons/io5";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IBlogPost, IBlogPostStatus } from "@/types/blog";
import { EditPost } from "./EditPost";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/context/store";
import { useUpdateBlogPostMutation } from "@/services/blog.service";
import { toast } from "react-toastify";
import { setPosts, updatePost } from "@/context/blog.slice";

export const PendingPosts = () => {
    const { posts, draft } = useSelector((state: RootState) => state.blog);
    const [updateBlogPost] = useUpdateBlogPostMutation();
    const [blogPost, setBlogPost] = React.useState<IBlogPost | undefined>();
    const dispatch = useDispatch();

    const publishPost = async (postId: string) => {
        try {
            await updateBlogPost({
                blogPostId: postId,
                status: IBlogPostStatus.PUBLISHED,
            }).unwrap();

            toast.success("Post published successfully");
            dispatch(
                updatePost({ id: postId, status: IBlogPostStatus.PUBLISHED }),
            );
        } catch (error) {
            toast.error("Failed to publish post");
        }
    };
    return (
        <div className="border-[1px] border-[#E4E7EC] px-7 py-7 rounded-xl">
            <div className="mb-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <h2 className="text-xl">Pending Posts</h2>
                    <Avatar className="bg-primary">{draft}</Avatar>
                </div>
            </div>
            <div className="flex flex-col gap-[1rem] mt-7">
                {posts
                    .filter((post) => post.status === IBlogPostStatus.DRAFT)
                    .map((post, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-between mb-4"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-[100px] h-[55px] flex-shrink-0 bg-[#f1f1f1] px-auto py-auto">
                                    <Image
                                        width={100}
                                        height={55}
                                        src={post.preview_image}
                                        alt=""
                                        className="w-full h-full rounded-md object-contain"
                                        style={{ objectFit: "contain" }}
                                    />
                                </div>{" "}
                                <div>
                                    <p className="text-[14px]">{post.title}</p>
                                </div>
                            </div>
                            <div>
                                <Popover
                                    content={
                                        <div className="flex flex-col gap-3 w-[100px]">
                                            <EditPost
                                                blogPost={post}
                                                open={
                                                    blogPost &&
                                                    blogPost.id === post.id
                                                }
                                            />
                                            <p
                                                className="cursor-pointer"
                                                onClick={() =>
                                                    publishPost(post.id)
                                                }
                                            >
                                                Publish
                                            </p>
                                        </div>
                                    }
                                    trigger={"hover"}
                                    arrow={false}
                                >
                                    <HiOutlineDotsVertical className="text-lg cursor-pointer" />
                                </Popover>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};
