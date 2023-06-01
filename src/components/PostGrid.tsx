import { Post } from "@/service/posts";
import PostCard from "./PostCard";

type Props = { posts: Post[] };

export default function PostGrid({ posts }: Props) {
  return (
    <ul className="flex flex-col divide-y divide-gray-300">
      {posts.map((post) => (
        <li key={post.path}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
}
