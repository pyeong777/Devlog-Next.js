import { getAllPosts, getPostData } from "@/service/posts";
import { readFile } from "fs";
import { MetadataRoute } from "next";
import path from "path";

export default async function sitemap() {
  const posts = await getAllPosts();
  return [
    {
      url: "https://pyeongdevlog.vercel.app",
      lastModified: new Date(),
    },
    {
      url: "https://pyeongdevlog.vercel.app/about",
      lastModified: new Date(),
    },
    posts.map((post) => {
      return {
        url: `https://pyeongdevlog.vercel.app/${post.path}`,
        lastModified: new Date(post.date),
      };
    }),
  ];
}
