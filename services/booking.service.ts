import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { api_url } from "@/constants/API_URL";
import { IBooking } from "@/types/bookings";
import { fetchBaseQueryWithAuth } from "./customQuery";
import { GetProp } from "antd";

interface GetBookingsResponse {
    status: "success";
    data: {
        bookings: IBooking[];
    };
}

interface UpdateBookingResponse {
    status: "success";
    data: {
        bookings: IBooking;
    };
}

interface GetBookingsResponse {
    status: "success";
    data: {
        bookings: IBooking[];
    };
}

interface CreateBookingResponse {
    status: "success";
    data: {
        tag: IBooking;
    };
}

export const bookingApi = createApi({
    reducerPath: "bookingApi",
    baseQuery: fetchBaseQueryWithAuth({ baseUrl: `${api_url}/booking` }),
    endpoints: (builder) => {
        return {
            getBookings: builder.query<GetBookingsResponse, void>({
                query: () => {
                    return {
                        url: "/tag",
                    };
                },
            }),
            createBooking: builder.mutation<CreateBookingResponse, string>({
                query: (name) => {
                    return {
                        url: "/tag/new",
                        method: "POST",
                        body: { name },
                    };
                },
            }),
            updateBooking: builder.mutation<
                UpdateBookingResponse,
                { name: string; id: string }
            >({
                query: ({ name, id }) => {
                    return {
                        url: `/tag`,
                        method: "PATCH",
                        body: { tagId: id, name },
                    };
                },
            }),
            deleteBooking: builder.mutation<void, string>({
                query: (id) => {
                    return {
                        url: `/tag`,
                        method: "DELETE",
                        body: { tagId: id },
                    };
                },
            }),
        };
    },
});

export const {
    useGetBookingsQuery,
    useCreateBookingMutation,
    useUpdateBookingMutation,
    useDeleteBookingMutation,
} = bookingApi;
