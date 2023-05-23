import Image from "next/image";
import MarkDownViewer from "@/components/MarkdownViewer";
import { getAllPosts, getPostData } from "@/service/posts";
import { Metadata } from "next";

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
    <article className="m-4">
      <section className="flex flex-col p-4 m-auto">
        <h1 className="mb-5 text-3xl font-bold">{title}</h1>
        <div className="flex">
          <p>{description}&nbsp;·&nbsp;</p>
          <p className="text-gray-700">{date.toString()}</p>
        </div>
        <div className="mt-4 mb-8 border-2 w-44 border-my-color" />
        <Image
          className="mb-4"
          src={`/images/posts/${path}.png`}
          alt={title}
          width={760}
          height={420}
        />
        <MarkDownViewer content={content} />
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
