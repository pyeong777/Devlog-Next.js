import { Post } from "@/service/posts";
import Image from "next/image";
import Link from "next/link";

type Props = { post: Post };
export default function PostCard({
  post: { title, description, date, category, path },
}: Props) {
  return (
    <Link href={`/blog/${path}`}>
      <div className="overflow-hidden rounded-md">
        <div className="max-h-44 lg:overflow-hidden">
          <Image
            className="object-cover w-full transition-transform duration-500 ease-in-out lg:hover:scale-110"
            src={`/images/posts/${path}.png`}
            alt={title}
            width={300}
            height={200}
          />
        </div>
        <div className="flex flex-col items-center gap-4 p-4">
          <time className="self-end text-gray-700">{date.toString()}</time>
          <h3 className="font-bold">{title}</h3>
          <p className="w-full text-center truncate">{description}</p>
          <span className="px-2 my-2 text-sm rounded-lg bg-slate-100 text-my-color">
            {category}
          </span>
        </div>
      </div>
    </Link>
  );
}
