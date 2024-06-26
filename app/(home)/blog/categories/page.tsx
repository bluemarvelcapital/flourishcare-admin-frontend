"use client";
import { WindowSpinner } from "@/components/Spinner";
import {
    AddBlogCategory,
    BlogCategoriesView,
} from "@/components/blog/BlogCategory";
import Header from "@/components/misc/Header";
import NoData from "@/components/misc/NoData";
import { setTags } from "@/context/blog.slice";
import { RootState } from "@/context/store";
import { useGetBlogTagsQuery } from "@/services/blog.service";
import { IBlogTag } from "@/types/blog";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const BlogCategories = () => {
    const { user } = useSelector((state: RootState) => state.auth);
    const { data, isLoading } = useGetBlogTagsQuery();
    const { tags } = useSelector((state: RootState) => state.blog);
    const [_tags, setUniqueTags] = React.useState<IBlogTag[]>([]);
    const dispatch = useDispatch();

    useEffect(() => {
        if (data?.data.tags) {
            dispatch(setTags(data.data.tags));
        }
    }, [data]);

    useEffect(() => {
        if (tags) {
            setUniqueTags(tags);
        }
    }, [tags]);
    return (
        <div>
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                    <Header
                        header="Blog Categories"
                        paragraph={
                            "Welcome to Blog Categories " + user.firstname ??
                            "Admin"
                        }
                    />
                </div>
                <AddBlogCategory />
            </div>
            <div className="flex gap-y-3 flex-col justify-center items-center">
                {isLoading ? (
                    <WindowSpinner />
                ) : _tags.length ? (
                    <>
                        <BlogCategoriesView categories={_tags} />
                        <AddBlogCategory />
                    </>
                ) : (
                    <>
                        <NoData
                            imageUrl="/blog-categories.svg"
                            headerText="No Blog category Yet"
                            paragraph="There are no categories yet. Please add a blog category to organize your content."
                        />
                        <AddBlogCategory />
                    </>
                )}
            </div>
        </div>
    );
};

export default BlogCategories;
