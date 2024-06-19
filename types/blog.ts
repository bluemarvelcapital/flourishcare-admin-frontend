export interface BlogI {
  title: string;
  content: string;
  preview_img: string;
  cover_img: string;
  tags: string[];
  description: string;
  createdAt: string;
  updatedAt: string;
  category: string;
  author?: string;
}
