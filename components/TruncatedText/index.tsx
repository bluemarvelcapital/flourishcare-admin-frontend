import React from "react";
import { Popover, Button } from "antd";
import { CopyOutlined } from "@ant-design/icons";

interface TruncatedTextProps {
    text: string;
    maxLength?: number;
}

const TruncatedID: React.FC<TruncatedTextProps> = ({
    text,
    maxLength = 15,
}) => {
    const truncated =
        text.length > maxLength ? text.slice(0, maxLength) + "..." : text;

    const copyToClipboard = () => {
        navigator.clipboard.writeText(text);
    };

    return (
        <Popover
            content={
                <div className="flex flex-col items-start">
                    <span>{text}</span>
                    <Button
                        type="link"
                        icon={<CopyOutlined />}
                        onClick={copyToClipboard}
                    >
                        Copy
                    </Button>
                </div>
            }
            trigger="hover"
        >
            <p>{truncated}</p>
        </Popover>
    );
};

export const TruncatedText: React.FC<TruncatedTextProps> = ({
    text,
    maxLength = 15,
}) => {
    const truncated =
        text.length > maxLength ? text.slice(0, maxLength) + "..." : text;

    const copyToClipboard = () => navigator.clipboard.writeText(text);

    return (
        <Popover
            content={
                <div className="flex flex-col items-start">
                    <span>{text}</span>
                    <Button
                        type="link"
                        icon={<CopyOutlined />}
                        onClick={copyToClipboard}
                    >
                        Copy
                    </Button>
                </div>
            }
            trigger="hover"
        >
            <p>{truncated}</p>
        </Popover>
    );
};

export default TruncatedID;
