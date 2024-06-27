import { blogApi } from "@/services/blog.service";
import { configureStore } from "@reduxjs/toolkit";
import { blogSlice } from "./blog.slice";
import { authApi } from "@/services/auth.service";
import { authSlice } from "./auth.slice";
import { userApi } from "@/services/user.service";
import { appointmentApi } from "@/services/appointment.service";
import { appointmentSlice } from "./appointment.slice";
import { bookingApi } from "@/services/booking.service";
import { bookingSlice } from "./booking.slice";

export const store = configureStore({
    reducer: {
        [blogApi.reducerPath]: blogApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        [appointmentApi.reducerPath]: appointmentApi.reducer,
        [bookingApi.reducerPath]: bookingApi.reducer,
        [blogSlice.reducerPath]: blogSlice.reducer,
        [authSlice.reducerPath]: authSlice.reducer,
        [appointmentSlice.reducerPath]: appointmentSlice.reducer,
        [bookingSlice.reducerPath]: bookingSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            authApi.middleware,
            blogApi.middleware,
            userApi.middleware,
            appointmentApi.middleware,
            bookingApi.middleware,
        ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
