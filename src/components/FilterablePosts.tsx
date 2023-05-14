"use client";

import { Post } from "@/service/posts";
import { useState } from "react";
import PostGrid from "./PostGrid";
import Categories from "./Categories";

type Props = {
  posts: Post[];
  categories: string[];
};

const ALL_POSTS = "전체보기";

export default function FilterablePosts({ posts, categories }: Props) {
  const [selected, setSelected] = useState(ALL_POSTS);
  const filtered =
    selected === ALL_POSTS
      ? posts
      : posts.filter((post) => post.category === selected);
  return (
    <>
      <section>
        <Categories
          categories={[ALL_POSTS, ...categories]}
          selected={selected}
          onClick={(selected) => setSelected(selected)}
        />
      </section>
      <section>
        <PostGrid posts={filtered} />
      </section>
    </>
  );
}
