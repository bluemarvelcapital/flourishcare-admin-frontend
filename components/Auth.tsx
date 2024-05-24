'use client'
import { RootState } from "@/context/store";
import { useGetLoggedUserInfoQuery } from "@/services/auth.service";
import { ReactNode, useEffect } from "react";
import { useSelector } from "react-redux";


export default function AuthProvider({ children }: { children: ReactNode }) {
    const { user } = useSelector((state: RootState) => state.auth)
    const { data: loggedUiserInfo, isError: isLoggedUserInfoError, isLoading: isLoggedUserInfoLoading } = useGetLoggedUserInfoQuery(null)

    useEffect(() => {
        if (!user) {
            window.location.href = "/auth"
        }

        if (isLoggedUserInfoError) {
            window.location.href = "/auth"
        }
    }, [user, isLoggedUserInfoError, isLoggedUserInfoLoading])

    return (
        <div>
            {children}
        </div>
    )
}