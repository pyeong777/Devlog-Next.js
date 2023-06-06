import Image from "next/image";
import MarkDownViewer from "@/components/MarkdownViewer";
import { getAllPosts, getPostData } from "@/service/posts";
import { Metadata } from "next";
import Comment from "@/components/Comment";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const { title, description } = await getPostData(slug);
  return {
    title,
    description,
  };
}

export default async function PostPage({ params: { slug } }: Props) {
  const { title, description, date, path, content } = await getPostData(slug);
  return (
    <article>
      <section className="flex flex-col mx-auto mt-8">
        <h1 className="mb-5 text-2xl font-bold sm:text-3xl">{title}</h1>
        <div className="flex flex-col justify-between gap-2 sm:flex-row">
          <p className="text-xs sm:text-base">{description}</p>
          <p className="text-gray-500">{date.toString()}</p>
        </div>
        <div className="mt-4 mb-8 border-2 w-44 border-my-color" />
        <div className="mx-auto">
          <Image
            className="mb-4"
            src={`/images/posts/${path}.png`}
            alt={title}
            width={760}
            height={420}
          />
        </div>
        <MarkDownViewer content={content} />
        <Comment />
      </section>
    </article>
  );
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.path,
  }));
}
