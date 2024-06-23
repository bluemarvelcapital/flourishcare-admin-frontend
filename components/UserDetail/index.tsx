import { Button } from "antd";
import React, { Children } from "react";

interface IUserViewDetailPaneProps {
    children: React.ReactNode;
    header: string;
    cta?: () => void;
}

export function UserViewDetailPane(props: IUserViewDetailPaneProps) {
    return (
        <div className="rounded-md border flex flex-col border-[#E4E7EC] p-5">
            <div className="w-full border-b border-[#E4E7EC]">
                <p className="text-xl py-2">{props.header}</p>
            </div>

            {props.children}

            {props.cta && (
                <div className="flex justify-center gap-x-5 mt-auto pt-5 w-full border-t border-[#E4E7EC]">
                    <div className="flex justify-center gap-x-5 mt-auto">
                        <Button
                            className="text-secondary hover:text-white hover:text-opacity-80 text-lg hover:bg-blue"
                            type="link"
                        >
                            View All
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
}
