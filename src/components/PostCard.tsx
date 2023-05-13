import { Post } from "@/service/posts";
import Image from "next/image";
import Link from "next/link";

type Props = { post: Post };
export default function PostCard({
  post: { title, description, date, category, path },
}: Props) {
  return (
    <Link href={`/posts/${path}`}>
      <div className="overflow-hidden rounded-md">
        <Image
          className="w-full"
          src={`/images/posts/${path}.png`}
          alt={title}
          width={300}
          height={200}
        />
        <div className="flex flex-col items-center gap-4 p-4">
          <time className="self-end">{date.toString()}</time>
          <h3 className="font-bold">{title}</h3>
          <p className="w-full text-center truncate">{description}</p>
          <span className="px-2 my-2 text-sm bg-green-100 rounded-lg">
            {category}
          </span>
        </div>
      </div>
    </Link>
  );
}
