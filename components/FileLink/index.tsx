import React, { ReactNode } from "react";
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
    children,
    className,
}: {
    children?: ReactNode;
    className?: string;
    link: string;
    name?: string | ReactNode;
}) {
    return (
        <>
            <a
                className={
                    `z-10 flex py-2 my-2 justify-center text-black gap-3 text-sm bg-[#F7F7F7] text-center hover:bg-[#eee] hover:text-black duration-300 transition-all transform hover:scale-105 ` +
                        className ?? ""
                }
                href={link}
                target="_blank"
            >
                <AiFillFilePdf className="text-error-500 m-1 my-auto transition-all duration-300 hover:text-[#3ebd64]" />
                <p className="transition-all duration-300 text-center m-auto">
                    {
                        // If the name is a string, parse it
                        typeof name === "string" ? parseFileName(name) : name
                    }
                </p>
                <FiDownload className="m-2 transition-all duration-300 hover:text-[#3ebd64]" />
                {children && <> {children} </>}
            </a>{" "}
        </>
    );
}
