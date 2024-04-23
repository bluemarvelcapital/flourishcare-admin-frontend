import { BlogI } from "@/types/blog"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface BlogState {
    posts: BlogI[]
}

const initialState: BlogState = {
    posts: []
}

export const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        setPosts: (state, action: PayloadAction<BlogI[]>) => {
            state.posts = action.payload
        },
        addPosts: (state, action: PayloadAction<BlogI[]>) => {
            state.posts = [...state.posts, ...action.payload]
        },
        updatePost: (state, action: PayloadAction<BlogI>) => {
            const index = state.posts.findIndex(post => post.id === action.payload.id)
            state.posts[index] = action.payload
        }
    }
})

export const { setPosts, addPosts, updatePost } = blogSlice.actions