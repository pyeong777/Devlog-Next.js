import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";
import readline from "readline/promises";
import { stdin as input, stdout as output } from "process";

const postsDirectory = path.join(process.cwd(), "data", "posts");
const defaultPostImage = "/images/ogImage.png";

function getArg(name) {
  const prefix = `--${name}=`;
  const arg = process.argv.find((value) => value.startsWith(prefix));
  return arg ? arg.slice(prefix.length).trim() : "";
}

function slugify(value) {
  const slug = value
    .normalize("NFKD")
    .toLowerCase()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return slug || `post-${new Date().toISOString().slice(0, 10)}`;
}

async function askMissing(values) {
  const rl = readline.createInterface({ input, output });

  try {
    const title = values.title || (await rl.question("Title: "));
    const defaultSlug = slugify(title);
    const slugAnswer = values.slug || (await rl.question(`Slug (${defaultSlug}): `));
    const slug = slugAnswer ? slugify(slugAnswer) : defaultSlug;
    const description =
      values.description || (await rl.question("Description: "));
    const category = values.category || (await rl.question("Category: "));
    const date =
      values.date ||
      (await rl.question(`Date (${new Date().toISOString().slice(0, 10)}): `)) ||
      new Date().toISOString().slice(0, 10);
    const featuredAnswer =
      values.featured || (await rl.question("Featured? (y/N): "));

    return {
      title,
      slug: slug || slugify(title),
      description,
      category,
      date,
      featured: /^(y|yes|true)$/i.test(featuredAnswer),
    };
  } finally {
    rl.close();
  }
}

async function fileExists(filePath) {
  try {
    await readFile(filePath, "utf8");
    return true;
  } catch {
    return false;
  }
}

const values = await askMissing({
  title: getArg("title"),
  slug: getArg("slug"),
  description: getArg("description"),
  category: getArg("category"),
  date: getArg("date"),
  featured: getArg("featured"),
});

if (!values.title || !values.description || !values.category) {
  throw new Error("title, description, and category are required.");
}

if (!/^\d{4}-\d{2}-\d{2}$/.test(values.date)) {
  throw new Error("date must use YYYY-MM-DD format.");
}

await mkdir(postsDirectory, { recursive: true });

const filePath = path.join(postsDirectory, `${values.slug}.md`);
if (await fileExists(filePath)) {
  throw new Error(`Post already exists: ${filePath}`);
}

const content = `---
title: ${JSON.stringify(values.title)}
description: ${JSON.stringify(values.description)}
date: "${values.date}"
category: ${JSON.stringify(values.category)}
path: ${JSON.stringify(values.slug)}
featured: ${values.featured}
image: ${JSON.stringify(defaultPostImage)}
---

## ${values.title}

Write your post here.
`;

await writeFile(filePath, content, "utf8");

console.log(`Created ${filePath}`);
console.log(`Using the default cover image: ${defaultPostImage}`);
