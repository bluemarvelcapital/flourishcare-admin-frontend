// "use-client";
// import { useAuth } from "@/hooks/useAuth";
import { IUser } from "@/types/user";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
    user?: IUser;
} & (
    | { accessToken: string; refreshToken: string }
    | { accessToken: null; refreshToken: null }
);

const initialState: AuthState = {
    user: undefined,
    accessToken: "",
    refreshToken: "",
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuth: (
            state,
            action: PayloadAction<{
                user: IUser;
                accessToken: string;
                refreshToken: string;
            }>,
        ) => {
            // const { setAuth } = useAuth();
            state.user = action.payload.user;
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
            //
            // setAuth({
            //     access: action.payload.accessToken,
            //     refresh: action.payload.refreshToken,
            //     user: action.payload.user,
            // });
        },
        logOut: (state) => {
            state.user = undefined;
            state.accessToken = null as any;
            state.refreshToken = null as any;
            //
            // const { setAuth } = useAuth();
            // setAuth({
            //     access: null,
            //     refresh: null,
            //     user: null,
            // });
        },
    },
});

export const { setAuth, logOut } = authSlice.actions;

