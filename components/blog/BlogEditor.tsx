import React, { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

export function BlogEditor({
    content,
    setContent,
}: {
    content: string;
    setContent: (content: string) => void;
}) {
    const [localContent, setLocalContent] = useState(content ?? "");
    const editorRef = useRef(null);
    return (
        <>
            <Editor
                apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY}
                onChange={(e) => {
                    setContent && setContent(e.target.value);
                    setLocalContent(e.target.value);
                }}
                // @ts-ignore
                onInit={(evt, editor) => (editorRef.current = editor)}
                value={localContent}
                initialValue={content}
                init={{
                    min_height: 300,
                    menubar: false,
                    plugins: [
                        "advlist",
                        "autolink",
                        "lists",
                        "link",
                        "image",
                        "charmap",
                        "preview",
                        "anchor",
                        "searchreplace",
                        "visualblocks",
                        "code",
                        "fullscreen",
                        "insertdatetime",
                        "media",
                        "table",
                        "code",
                        "help",
                        "wordcount",
                    ],
                    toolbar:
                        "undo redo | blocks | " +
                        "bold italic forecolor | alignleft aligncenter " +
                        "alignright alignjustify | bullist numlist outdent indent | " +
                        "removeformat | media | image | help",
                    content_style:
                        "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                }}
            />
        </>
    );
}
