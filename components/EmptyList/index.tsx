import React from "react";

export default function EmptyList({ title }: { title?: string }) {
    return (
        <div className="flex items-center justify-center h-full py-5">
            <p className="text-[#6a6b6c] text-xs">
                No {title ?? "Records"} available.
            </p>
        </div>
    );
}
