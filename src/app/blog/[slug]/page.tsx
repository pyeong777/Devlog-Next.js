import Image from "next/image";
import MarkDownViewer from "@/components/MarkdownViewer";
import { getAllPosts, getPostData } from "@/service/posts";
import { Metadata } from "next";
import Comment from "@/components/Comment";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const { title, description, path, image } = await getPostData(slug);
  return {
    title,
    description,
    alternates: {
      canonical: `/blog/${path}`,
    },
    openGraph: {
      title: title,
      description: description,
      siteName: "Pyeong devlog",
      locale: "ko_KR",
      type: "website",
      url: `/blog/${path}`,
      images: [
        {
          type: "image/png",
          width: 1200,
          height: 630,
          url: image,
        },
      ],
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostData(slug).catch(() => null);

  if (!post) {
    notFound();
  }

  const { title, description, date, image, content } = post;

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
            src={image}
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
