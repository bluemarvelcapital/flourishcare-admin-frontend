export enum IBlogPostStatus {
    HIDDEN = "hidden",
    PUBLISHED = "published",
    DRAFT = "draft",
}

export interface IBlogTag {
    id: string;
    name: string;
}

export interface IBlogPost {
    id: string;
    title: string;
    description: string;
    content: string;
    preview_image: string;
    cover_image: string;
    status: IBlogPostStatus;
    blogTags: IBlogTag[];
    createdAt: string;
}
