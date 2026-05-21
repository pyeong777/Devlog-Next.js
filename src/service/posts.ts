import { readdir, readFile } from "fs/promises";
import matter from "gray-matter";
import path from "path";
import { cache } from "react";

export type Post = {
  title: string;
  description: string;
  date: string;
  category: string;
  path: string;
  image: string;
  featured: boolean;
};

export type PostData = Post & { content: string };

const postsDirectory = path.join(process.cwd(), "data", "posts");
const defaultPostImage = "/images/ogImage.png";

function readRequiredString(
  value: unknown,
  fieldName: string,
  fileName: string
) {
  if (typeof value !== "string" || value.trim().length === 0) {
    throw new Error(`${fileName} is missing required frontmatter: ${fieldName}`);
  }
  return value;
}

function readPost(fileName: string, fileContent: string): PostData {
  const slug = fileName.replace(/\.md$/, "");
  const { data, content } = matter(fileContent);
  const postPath =
    typeof data.path === "string" && data.path.trim().length > 0
      ? data.path
      : slug;

  return {
    title: readRequiredString(data.title, "title", fileName),
    description: readRequiredString(data.description, "description", fileName),
    date: readRequiredString(data.date, "date", fileName),
    category: readRequiredString(data.category, "category", fileName),
    path: postPath,
    image:
      typeof data.image === "string" && data.image.trim().length > 0
        ? data.image
        : defaultPostImage,
    featured: data.featured === true,
    content,
  };
}

export async function getFeaturedPosts(): Promise<Post[]> {
  return getAllPosts().then((posts) => posts.filter((post) => post.featured));
}

export async function getNonFeaturedPosts(): Promise<Post[]> {
  return getAllPosts().then((posts) => posts.filter((post) => !post.featured));
}

export const getAllPosts = cache(async () => {
  const fileNames = await readdir(postsDirectory);
  const posts = await Promise.all(
    fileNames
      .filter((fileName) => fileName.endsWith(".md"))
      .map(async (fileName) => {
        const filePath = path.join(postsDirectory, fileName);
        const fileContent = await readFile(filePath, "utf-8");
        const post = readPost(fileName, fileContent);
        return {
          title: post.title,
          description: post.description,
          date: post.date,
          category: post.category,
          path: post.path,
          image: post.image,
          featured: post.featured,
        };
      })
  );

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
});

export async function getPostData(fileName: string): Promise<PostData> {
  const fileNames = await readdir(postsDirectory);

  for (const postFileName of fileNames.filter((name) => name.endsWith(".md"))) {
    const filePath = path.join(postsDirectory, postFileName);
    const fileContent = await readFile(filePath, "utf-8");
    const post = readPost(postFileName, fileContent);

    if (post.path === fileName) {
      return post;
    }
  }

  throw new Error(`Post not found: ${fileName}`);
}
