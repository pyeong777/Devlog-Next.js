import { getFeaturedPosts } from "@/service/posts";
import PostGrid from "./PostGrid";
import Link from "next/link";

export default async function FeaturedPosts() {
  const posts = await getFeaturedPosts();
  return (
    <section className="my-16">
      <h2 className="text-2xl font-bold">Post</h2>
      <PostGrid posts={posts} />
      <div className="flex justify-end">
        <Link className="text-my-color" href="/blog">
          모든 포스트 &rarr;
        </Link>
      </div>
    </section>
  );
}
