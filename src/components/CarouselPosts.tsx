import { getNonFeaturedPosts } from "@/service/posts";
import PostCard from "./PostCard";
import MultiCarousel from "./MultiCarousel";

export default async function CarouselPosts() {
  const posts = await getNonFeaturedPosts();
  return (
    <section className="my-16">
      <h2 className="pt-10 text-2xl font-bold">Recommended</h2>
      <MultiCarousel>
        {posts.map((post) => (
          <PostCard key={post.path} post={post} />
        ))}
      </MultiCarousel>
    </section>
  );
}
