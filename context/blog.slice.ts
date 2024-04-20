import { BlogI } from "@/types/blog"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Writable } from "stream"

interface BlogState {
    draftBlogPosts: BlogI[],
    publishedBlogPosts: BlogI[]
}

const initialState: BlogState = {
    draftBlogPosts: [],
    publishedBlogPosts: []
}

export const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        setDraftBlogPosts: (state, action: PayloadAction<BlogI[]>) => {
            state.draftBlogPosts = action.payload
        },
        setPublishedBlogPosts: (state, action: PayloadAction<BlogI[]>) => {
            state.publishedBlogPosts = action.payload
        },
        addDraftBlogPosts: (state, action: PayloadAction<BlogI>) => {
            state.draftBlogPosts = [...(state.draftBlogPosts ?? []), action.payload] as typeof state.draftBlogPosts
        },
        addPublisedBlogPosts: (state, action: PayloadAction<BlogI[]>) => {
            state.publishedBlogPosts = [...(state.publishedBlogPosts ?? []), ...action.payload] as typeof state.publishedBlogPosts
        }
    }
})

export const { addDraftBlogPosts, addPublisedBlogPosts, setDraftBlogPosts, setPublishedBlogPosts } = blogSlice.actions