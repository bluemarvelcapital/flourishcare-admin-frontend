import { blogApi } from "@/services/blog.service";
import { configureStore } from "@reduxjs/toolkit";
import { blogSlice } from "./blog.slice";
import { authApi } from "@/services/auth.service";
import { authSlice } from "./auth.slice";

export const store = configureStore({
    reducer: {
        [blogApi.reducerPath]: blogApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
        [blogSlice.reducerPath]: blogSlice.reducer,
        [authSlice.reducerPath]: authSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware, blogApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
