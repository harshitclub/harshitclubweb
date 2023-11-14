import React from "react";
import "./style.css";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";

const page = () => {
  // const blogDir = "posts";
  // const subfolders = fs.readdirSync(path.join(blogDir));

  // const blogs = subfolders.flatMap((folder) => {
  //   const folderPath = path.join(blogDir, folder);
  //   const files = fs.readdirSync(folderPath);
  //   return files.map((fileName) => {
  //     const fileContent = fs.readFileSync(
  //       path.join(folderPath, fileName),
  //       "utf-8"
  //     );
  //     const { data: frontMatter } = matter(fileContent);
  //     return {
  //       meta: frontMatter,
  //       slug: fileName.replace(".mdx", ""),
  //     };
  //   });
  // });

  // blogs.sort(
  //   (a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime()
  // );

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

  blogs.sort(
    (a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime()
  );

  return (
    <>
      <section className="allBlogsContainer flex alignStart spaceBtw width90 maxWidth">
        <section className="allBlogsTab flex alignCenter spaceBtw flexColumn">
          <div className="blogsHeader width100">
            <h2>Latest</h2>
          </div>
          {blogs.map((item, index) => {
            return (
              <div
                className="blogsBox flex alignStart justifyCenter flexColumn width100 maxWidth"
                key={index}
              >
                <h4>By {item.meta.author}</h4>
                <h3>
                  <Link href={`/blog/` + item.slug} key={item.slug}>
                    {item.meta.title}&nbsp;
                    <span>
                      <HiArrowUpRight className="blogsTitleIcon" />
                    </span>
                  </Link>
                </h3>
                <Link href={"/blog/" + item.slug} key={item.slug}>
                  <p className="blogsDesc">{item.meta.description}</p>
                </Link>

                <p className="blogsDate">
                  <span>{item.meta.date}</span>&nbsp; ◦&nbsp;{" "}
                  <span className="blogsReadTime">{item.meta.readtime}</span>{" "}
                  &nbsp;◦ &nbsp;
                  <span className="blogsCategory">{item.meta.category}</span>
                </p>
              </div>
            );
          })}
        </section>
      </section>
    </>
  );
};

export default page;
