import { blogApi } from "@/services/blog.service";
import { configureStore } from "@reduxjs/toolkit";
import { blogSlice } from "./blog.slice";
import { authApi } from "@/services/auth.service";
import { authSlice } from "./auth.slice";
import { userApi } from "@/services/user.service";

export const store = configureStore({
    reducer: {
        [blogApi.reducerPath]: blogApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        [blogSlice.reducerPath]: blogSlice.reducer,
        [authSlice.reducerPath]: authSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            authApi.middleware,
            blogApi.middleware,
            userApi.middleware,
        ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
