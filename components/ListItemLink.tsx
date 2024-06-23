import Link from "next/link";
import React from "react";

interface IListITemLinkProps {
    link: string;
    children: React.ReactNode;
}

const ListITemLink: React.FC<IListITemLinkProps> = ({ link, children }) => {
    return (
        <Link
            href={link}
            className="cursor-pointer hover:bg-gray-100 p-2 border-b border-gray-200 rounded-md"
        >
            {children}
        </Link>
    );
};

export default ListITemLink;
