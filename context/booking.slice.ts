import { IBooking } from "@/types/bookings";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BookingState {
    bookings: IBooking[];
}

const initialState: BookingState = {
    bookings: [],
};

export const bookingSlice = createSlice({
    name: "booking",
    initialState,
    reducers: {
        setBookings: (state, action: PayloadAction<IBooking[]>) => {
            state.bookings = action.payload;
        },
        addBookings: (state, action: PayloadAction<IBooking[]>) => {
            state.bookings = [...state.bookings, ...action.payload];
        },
        updateBooking: (
            state,
            action: PayloadAction<Partial<IBooking> & { id: string }>,
        ) => {
            const index = state.bookings.findIndex(
                (post) => post.id === action.payload.id,
            );

            state.bookings[index] = {
                ...state.bookings[index],
                ...action.payload,
            };
        },
        deleteBooking: (state, action: PayloadAction<string>) => {
            state.bookings = state.bookings.filter(
                (post) => post.id !== action.payload,
            );
        },
    },
});

export const { setBookings, addBookings, updateBooking, deleteBooking } =
    bookingSlice.actions;
