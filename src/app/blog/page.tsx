import FilterablePosts from "@/components/FilterablePosts";
import { getAllPosts } from "@/service/posts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All post",
  description: "개발 관련 블로그 포스트",
};

export default async function blogPage() {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category))];
  return (
    <article className="flex flex-col my-16">
      <FilterablePosts posts={posts} categories={categories} />
    </article>
  );
}
