import { createApi } from "@reduxjs/toolkit/query/react";
import { api_url } from "@/constants/API_URL";
import { IBooking, IBookingWithRelations } from "@/types/bookings";
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
        booking: IBookingWithRelations;
    };
}

interface GetBookingResponse {
    status: "success";
    data: {
        booking: IBookingWithRelations;
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
            getBooking: builder.query<GetBookingResponse, string>({
                query: (bookingId) => {
                    return {
                        url: "/info",
                        params: {
                            bookingId,
                        },
                    };
                },
            }),
            createBooking: builder.mutation<
                CreateBookingResponse,
                { serviceIds?: string[]; appointmentId: string }
            >({
                query: (cred) => {
                    return {
                        url: "/new",
                        method: "POST",
                        body: cred,
                    };
                },
            }),
            uploadDocumentForBooking: builder.mutation<
                UpdateBookingResponse,
                { bookingId: string; documentType: string; file: File }
            >({
                query: ({ bookingId, documentType, file }) => {
                    const formData = new FormData();
                    formData.append("documentType", documentType);
                    formData.append("document", file);
                    formData.append("bookingId", bookingId);

                    return {
                        url: "/doc",
                        method: "PATCH",
                        body: formData,
                    };
                },
            }),
            updateDocumentApprovalForBooking: builder.mutation<
                UpdateBookingResponse,
                { bookingId: string; documentType: string; approved: boolean }
            >({
                query: ({ bookingId, documentType, approved }) => {
                    return {
                        url: "/doc/approval",
                        method: "PATCH",
                        body: {
                            bookingId,
                            approvalStatus: {
                                [documentType]: approved,
                            },
                        },
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
    useGetBookingQuery,
    useCreateBookingMutation,
    useDeleteBookingMutation,
    useUploadDocumentForBookingMutation,
    useUpdateDocumentApprovalForBookingMutation,
} = bookingApi;
