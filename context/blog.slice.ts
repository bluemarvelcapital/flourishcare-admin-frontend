import { BlogI } from "@/types/blog"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

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
        },
        updateBlogPostData: (state, action: PayloadAction<BlogI>) => {
            const index = state.draftBlogPosts.findIndex((post) => post.id === action.payload.id)
            if (index !== -1) {
                state.draftBlogPosts[index] = action.payload

                // Remove the post from the published blog posts
                state.publishedBlogPosts = state.publishedBlogPosts.filter((post) => post.id !== action.payload.id)
            }

            const index2 = state.publishedBlogPosts.findIndex((post) => post.id === action.payload.id)
            if (index2 !== -1) {
                state.publishedBlogPosts[index2] = action.payload

                // Remove the post from the draft blog posts
                state.draftBlogPosts = state.draftBlogPosts.filter((post) => post.id !== action.payload.id)
            }
        }

    }
})

export const { addDraftBlogPosts, addPublisedBlogPosts, setDraftBlogPosts, setPublishedBlogPosts, updateBlogPostData} = blogSlice.actions