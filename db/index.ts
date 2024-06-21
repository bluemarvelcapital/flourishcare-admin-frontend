import { IBlogPost } from "@/types/blog";

export default class Cache {
    static async saveItemToCache({
        key,
        data,
    }: {
        key: string;
        data: Record<string, any>;
    }) {
        const _data = JSON.stringify(data);
        localStorage.setItem(key, _data);

        return _data;
    }

    static async getItemFromCache({ key }: { key: string }) {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    }
}

export class BlogQueryService {
    static async addPost({ blogPost }: { blogPost: IBlogPost }) {
        const existingData: string | null = localStorage.getItem("blogPosts");

        const prevData = existingData
            ? (JSON.parse(existingData) as { blogPosts: IBlogPost[] })
            : { blogPosts: [] as IBlogPost[] };

        prevData.blogPosts.push(blogPost);

        const newData = JSON.stringify(prevData);
        localStorage.setItem("blogPosts", newData);

        return blogPost;
    }

    static async getAllPosts() {
        const existingData = localStorage.getItem("blogPosts");

        const prevData = existingData
            ? (JSON.parse(existingData) as { blogPosts: IBlogPost[] })
            : { blogPosts: [] as IBlogPost[] };

        return prevData.blogPosts;
    }

    static async getPostById(blogPostId: string) {
        const existingData = localStorage.getItem("blogPosts");

        const prevData = existingData
            ? (JSON.parse(existingData) as { blogPosts: IBlogPost[] })
            : { blogPosts: [] as IBlogPost[] };

        const post = prevData.blogPosts.find(
            (blogPost) => blogPost.id === blogPostId,
        );

        return post;
    }
}
