import FeaturedPosts from "@/components/FeaturedPosts";
import Introduction from "@/components/Introduction";

export default function HomePage() {
  return (
    <article>
      <Introduction />
      {/* @ts-expect-error Server Component */}
      <FeaturedPosts />
    </article>
  );
}
