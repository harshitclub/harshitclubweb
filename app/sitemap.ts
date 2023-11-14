import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogDir = "posts";
  const files = fs.readdirSync(path.join(blogDir));
  const blogs = files.map((fileName) => {
    const fileContent = fs.readFileSync(path.join(blogDir, fileName), "utf-8");
    const { data: frontMatter } = matter(fileContent);
    return {
      meta: frontMatter,
      slug: fileName.replace(".mdx", ""),
    };
  });
  const allBlogs = blogs.map((item) => ({
    url: `https://harshitclub.com/blog/${item.slug}`,
    lastModified: item.meta.date,
  }));

  const routes = [
    "",
    "/blogs",
    "/projects",
    "/about",
    "/contact",
    "/my-story",
    "/privacy-and-policy",
    "/terms-and-conditions",
  ].map((route) => ({
    url: `https://harshitclub.com${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...allBlogs];
}
