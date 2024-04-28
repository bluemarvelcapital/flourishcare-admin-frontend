import { blogApi } from "@/services/blog.service"
import { configureStore } from "@reduxjs/toolkit"
import { blogSlice } from "./blog.slice"
import { authApi } from "@/services/auth.service"
import { authSlice } from "./auth.slice"

export const store = configureStore({
    reducer: {
        [blogApi.reducerPath]: blogApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
        [blogSlice.reducerPath]: blogSlice.reducer,
        [authSlice.reducerPath]: blogSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([blogApi.middleware, authApi.middleware]),

})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
