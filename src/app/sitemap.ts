import { getAllPosts } from "@/service/posts";
import { siteUrl } from "@/lib/siteMetadata";

export default async function sitemap() {
  const posts = await getAllPosts();
  const postUrls = posts.map((post) => ({
    url: `${siteUrl}/blog/${post.path}`,
    lastModified: post.date,
  }));
  return [
    { url: siteUrl, lastModified: new Date() },
    { url: `${siteUrl}/blog`, lastModified: new Date() },
    { url: `${siteUrl}/about`, lastModified: new Date() },

    ...postUrls,
  ];
}
