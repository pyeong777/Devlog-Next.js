import FilterablePosts from "@/components/FilterablePosts";
import { getAllPosts } from "@/service/posts";
import { Metadata } from "next";
import { defaultOgImage, siteDescription, siteName } from "@/lib/siteMetadata";

export const metadata: Metadata = {
  title: "All post",
  description: "개발 관련 블로그 포스트",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: `${siteName} | All post`,
    description: siteDescription,
    url: "/blog",
    siteName,
    images: [
      {
        type: "image/png",
        width: 1200,
        height: 630,
        url: defaultOgImage,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | All post`,
    description: "개발 관련 블로그 포스트",
    images: [defaultOgImage],
  },
};

export default async function BlogPage() {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category))];

  return (
    <article className="flex flex-col my-16">
      <FilterablePosts posts={posts} categories={categories} />
    </article>
  );
}
