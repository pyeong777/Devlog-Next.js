import { getFeaturedPosts } from "@/service/posts";
import PostGrid from "./PostGrid";

export default async function FeaturedPosts() {
  const posts = await getFeaturedPosts();
  return (
    <section className="my-16">
      <h2 className="text-2xl font-bold">Post</h2>
      <PostGrid posts={posts} />
    </section>
  );
}
