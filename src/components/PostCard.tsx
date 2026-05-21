import { Post } from "@/service/posts";
import Link from "next/link";

type Props = { post: Post };

export default function PostCard({
  post: { title, description, date, category, path },
}: Props) {
  const year = date.slice(0, 4);
  const month = date.slice(5, 7);
  const day = date.slice(8, 10);
  const categoryLabel = category.toUpperCase();

  return (
    <Link href={`/blog/${path}`}>
      <div className="overflow-hidden rounded-md">
        <div className="flex flex-col items-center gap-1 py-10">
          <time className="self-start text-sm text-gray-500">
            {`${year}년 ${month}월 ${day}일`}
          </time>
          <h3 className="self-start text-lg font-bold truncate lg:text-xl hover:underline decoration-my-color">
            {title}
          </h3>
          <span className="self-start text-sm text-my-color">
            {`#${categoryLabel}`}
          </span>
          <p className="self-start w-full mt-4 text-gray-600 truncate">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}
