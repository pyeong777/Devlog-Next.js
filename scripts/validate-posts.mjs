import { access, readdir, readFile } from "fs/promises";
import matter from "gray-matter";
import path from "path";

const root = process.cwd();
const postsDirectory = path.join(root, "data", "posts");
const defaultPostImage = "/images/ogImage.png";
const requiredFields = ["title", "description", "date", "category", "path"];
const errors = [];
const seenPaths = new Map();

function addError(fileName, message) {
  errors.push(`${fileName}: ${message}`);
}

async function exists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

const fileNames = (await readdir(postsDirectory)).filter((fileName) =>
  fileName.endsWith(".md")
);

if (fileNames.length === 0) {
  errors.push("No markdown posts found in data/posts.");
}

for (const fileName of fileNames) {
  const filePath = path.join(postsDirectory, fileName);
  const { data, content } = matter(await readFile(filePath, "utf8"));

  for (const field of requiredFields) {
    if (typeof data[field] !== "string" || data[field].trim().length === 0) {
      addError(fileName, `missing required frontmatter field "${field}"`);
    }
  }

  if (typeof data.date === "string" && !/^\d{4}-\d{2}-\d{2}$/.test(data.date)) {
    addError(fileName, "date must use YYYY-MM-DD format");
  }

  if (
    typeof data.path === "string" &&
    !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(data.path)
  ) {
    addError(fileName, "path must be a valid URL slug");
  }

  if (seenPaths.has(data.path)) {
    addError(fileName, `duplicate path also used by ${seenPaths.get(data.path)}`);
  }
  seenPaths.set(data.path, fileName);

  if (data.featured !== true && data.featured !== false) {
    addError(fileName, "featured must be true or false");
  }

  const image =
    typeof data.image === "string" && data.image.trim().length > 0
      ? data.image
      : defaultPostImage;

  if (image.startsWith("/")) {
    const publicImagePath = path.join(root, "public", image);
    if (!(await exists(publicImagePath))) {
      addError(fileName, `missing image ${image}`);
    }
  }

  if (content.trim().length === 0) {
    addError(fileName, "post body is empty");
  }
}

if (await exists(path.join(root, "data", "posts.json"))) {
  errors.push("data/posts.json should not be used; frontmatter is the source of truth.");
}

if (errors.length > 0) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Validated ${fileNames.length} posts.`);
