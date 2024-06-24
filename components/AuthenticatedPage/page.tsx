"use client";
import { useGetLoggedUserInfoQuery } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { WindowSpinner } from "../Spinner";

export default function AuthenticatedPage({
    children,
}: {
    children: React.ReactNode;
}) {
    const { data, isLoading, isError } = useGetLoggedUserInfoQuery(null);
    const router = useRouter();

    useEffect(() => {
        if (isError) {
            toast.error("Session expired please login");
            router.replace("/");
        }
    }, [isError, data, router]);

    return <>{isLoading ? <WindowSpinner /> : <>{children}</>}</>;
}
