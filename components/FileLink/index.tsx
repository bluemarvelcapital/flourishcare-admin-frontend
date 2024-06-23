import React from "react";
import { AiFillFilePdf } from "react-icons/ai";
import { FiDownload } from "react-icons/fi";

function parseFileName(name: string) {
    // Trim the name to 20 characters
    const longerName = name.length > 20;
    return longerName ? name.slice(0, 20) + " ..." : name;
}
export default function FileLink({
    link,
    name,
}: {
    link: string;
    name?: string;
}) {
    return (
        <>
            <a
                className="flex py-5 justify-center mt-10 text-black gap-3 text-sm bg-[#F7F7F7] text-center"
                href={link}
                target="_blank"
            >
                <AiFillFilePdf className="text-error-500" />
                <p>{parseFileName(name ?? "File")}</p>
                <FiDownload />
            </a>
        </>
    );
}
