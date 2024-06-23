"use client";
import { useRouter } from "next/navigation";
import { BsArrowLeft } from "react-icons/bs";

export default function GoBack() {
    const router = useRouter();
    return (
        <div className="flex items-center">
            <div onClick={() => router.back()}>
                <div className="flex items-center mt-7 hover:text-blue cursor-pointer">
                    <BsArrowLeft />
                    <span className="ml-2">Go back</span>
                </div>
            </div>
        </div>
    );
}
