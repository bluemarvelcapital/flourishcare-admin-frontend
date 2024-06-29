import { createApi } from "@reduxjs/toolkit/query/react";
import { api_url } from "@/constants/API_URL";
import { IBooking } from "@/types/bookings";
import { fetchBaseQueryWithAuth } from "./customQuery";

interface GetBookingsResponse {
    status: "success";
    data: {
        bookings: IBooking[];
    };
}

interface UpdateBookingResponse {
    status: "success";
    data: {
        booking: IBooking;
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
        booking: IBooking;
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
                        url: "/",
                    };
                },
            }),
            createBooking: builder.mutation<CreateBookingResponse, string>({
                query: (name) => {
                    return {
                        url: "/new",
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
                        url: `/`,
                        method: "PATCH",
                        body: { Id: id, name },
                    };
                },
            }),
            deleteBooking: builder.mutation<void, string>({
                query: (id) => {
                    return {
                        url: `/`,
                        method: "DELETE",
                        body: { Id: id },
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
