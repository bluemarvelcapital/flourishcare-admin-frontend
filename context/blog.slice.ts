import { IBlogPost, IBlogPostStatus } from "@/types/blog";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BlogState {
    posts: IBlogPost[];
    total: number;
    published: number;
    draft: number;
    hidden: number;
    views: number;
}

const initialState: BlogState = {
    posts: [],
    total: 0,
    published: 0,
    draft: 0,
    hidden: 0,
    views: 0,
};

export const blogSlice = createSlice({
    name: "blog",
    initialState,
    reducers: {
        setPosts: (state, action: PayloadAction<IBlogPost[]>) => {
            state.posts = action.payload;
            state.total = action.payload.length;
            state.published = state.posts.filter(
                (post) => post.status === IBlogPostStatus.PUBLISHED,
            ).length;
            state.draft = state.posts.filter(
                (post) => post.status === IBlogPostStatus.DRAFT,
            ).length;
            state.hidden = state.posts.filter(
                (post) => post.status === IBlogPostStatus.HIDDEN,
            ).length;
        },
        addPosts: (state, action: PayloadAction<IBlogPost[]>) => {
            state.posts = [...state.posts, ...action.payload];
            state.total = state.total + 1;

            state.published = state.posts.filter(
                (post) => post.status === IBlogPostStatus.PUBLISHED,
            ).length;
            state.draft = state.posts.filter(
                (post) => post.status === IBlogPostStatus.DRAFT,
            ).length;
            state.hidden = state.posts.filter(
                (post) => post.status === IBlogPostStatus.HIDDEN,
            ).length;
        },
        updatePost: (state, action: PayloadAction<IBlogPost>) => {
            const index = state.posts.findIndex(
                (post) => post.id === action.payload.id,
            );
            state.posts[index] = action.payload;

            state.published = state.posts.filter(
                (post) => post.status === IBlogPostStatus.PUBLISHED,
            ).length;
            state.draft = state.posts.filter(
                (post) => post.status === IBlogPostStatus.DRAFT,
            ).length;
            state.hidden = state.posts.filter(
                (post) => post.status === IBlogPostStatus.HIDDEN,
            ).length;
        },
    },
});

export const { setPosts, addPosts, updatePost } = blogSlice.actions;
