import { IBlogPost, IBlogPostStatus, IBlogTag } from "@/types/blog";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BlogState {
    posts: IBlogPost[];
    tags: IBlogTag[];
    total: number;
    published: number;
    draft: number;
    hidden: number;
    views: number;
}

const initialState: BlogState = {
    posts: [],
    tags: [],
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
        updatePost: (
            state,
            action: PayloadAction<Partial<IBlogPost> & { id: string }>,
        ) => {
            const index = state.posts.findIndex(
                (post) => post.id === action.payload.id,
            );

            const updatedPost = {
                ...state.posts[index],
                ...action.payload,
            };

            state.posts[index] = updatedPost;

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
        setTags: (state, action: PayloadAction<IBlogTag[]>) => {
            state.tags = action.payload;
        },
        updateTags: (state, action: PayloadAction<IBlogTag>) => {
            const index = state.tags.findIndex(
                (tag) => tag.id === action.payload.id,
            );

            state.tags[index] = action.payload;
        },
        addTag: (state, action: PayloadAction<IBlogTag>) => {
            state.tags = [...state.tags, action.payload];
        },
        deleteTag: (state, action: PayloadAction<string>) => {
            state.tags = state.tags.filter((tag) => tag.id !== action.payload);
        },
    },
});

export const {
    setPosts,
    addTag,
    addPosts,
    deleteTag,
    updatePost,
    setTags,
    updateTags,
} = blogSlice.actions;
