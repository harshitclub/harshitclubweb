import { MDXRemote } from "next-mdx-remote/rsc";
import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import "./style.css";
import { AiOutlineClockCircle } from "react-icons/ai";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import Link from "next/link";
import {
  RiExternalLinkLine,
  RiFacebookBoxFill,
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiTwitterFill,
} from "react-icons/ri";

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));

  return paths;
}

function getPost({ slug }: { slug: string }) {
  const markdownFile = fs.readFileSync(
    path.join("posts", slug + ".mdx"),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownFile);

  return {
    frontMatter,
    slug,
    content,
  };
}

export async function generateMetadata({ params }: any) {
  const blog = getPost(params);

  return {
    title: blog.frontMatter.seoTitle,
    description: blog.frontMatter.description,
    alternates: {
      canonical: `https://harshitclub.com/blog/${params.slug}`,
    },
    openGraph: {
      type: "website",
      title: blog.frontMatter.title,
      url: `https://harshitclub.com/blog/${params.slug}`,
      siteName: "harshitclub",
    },
  };
}

const page = ({ params }: any) => {
  const props = getPost(params);
  const postUrl = `https://www.harshitclub.com/blog/${params.slug}`;
  return (
    <>
      <main className="blog flex alignCenter justifyCenter flexColumn width100">
        <section className="blogContainer flex alignStart spaceBtw width90 maxWidth">
          <article className="blogArticle">
            <header>
              <p>
                <a href="/blogs">
                  <span>
                    <HiOutlineArrowNarrowLeft className="blogBackBlogsIcon" />{" "}
                    Back to blogs
                  </span>
                </a>
              </p>
              <h1>{props.frontMatter.title}</h1>
              <div className="blogHeaderGeneralInfo flex spaceBtw">
                <p>
                  By {props.frontMatter.author} |{" "}
                  <span>{props.frontMatter.date}</span>
                </p>
                <p>
                  <AiOutlineClockCircle className="blogReadTimeIcon" />{" "}
                  {props.frontMatter.readtime} ◦{" "}
                  <span className="blogCategory">
                    {props.frontMatter.category}
                  </span>
                </p>
              </div>
            </header>
            <section>
              <MDXRemote source={props.content} />
            </section>
            <div className="blogSocialMediaShare flex alignStart justifyCenter flexColumn width90 maxWidth">
              <div className="blogSocialHead">
                <p>Share this article:</p>
              </div>
              <div className="blogSocialLinks flex alignStart justifyStart flexWrap">
                <a
                  className="blogShareFacebook"
                  href={`https://www.facebook.com/sharer.php?u=${encodeURIComponent(
                    postUrl
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
                <a
                  className="blogShareTwitter"
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                    postUrl
                  )}&text=${encodeURIComponent(props.frontMatter.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
                <a
                  className="blogShareLinkedin"
                  href={`https://www.linkedin.com/shareArticle?url=${encodeURIComponent(
                    postUrl
                  )}&title=${encodeURIComponent(props.frontMatter.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  className="blogShareInstagram"
                  href={`https://www.instagram.com/share?url=${encodeURIComponent(
                    postUrl
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </div>
            </div>
          </article>
          <aside className="blogAsideSection">
            <div className="asideShareArticle">
              <h3>Share this article:</h3>
              <a
                className="blogShareFacebook"
                href={`https://www.facebook.com/sharer.php?u=${encodeURIComponent(
                  postUrl
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiFacebookBoxFill />
              </a>
              <a
                className="blogShareTwitter"
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                  postUrl
                )}&text=${encodeURIComponent(props.frontMatter.title)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiTwitterFill />
              </a>
              <a
                className="blogShareLinkedin"
                href={`https://www.linkedin.com/shareArticle?url=${encodeURIComponent(
                  postUrl
                )}&title=${encodeURIComponent(props.frontMatter.title)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiLinkedinBoxFill />
              </a>
              <a
                className="blogShareInstagram"
                href={`https://www.instagram.com/share?url=${encodeURIComponent(
                  postUrl
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiInstagramFill />
              </a>
            </div>
            <div className="blogAsideMail">
              <h3>Mail Me</h3>
              <p>
                <Link href="mailto:harshit@harshitclub.com">
                  harshit@harshitclub.com
                  <RiExternalLinkLine className="aboutExperienceIcon" />
                </Link>
              </p>
            </div>

            <div className="blogAsideSocial">
              <h3>Follow Me</h3>
              <Link href="https://github.com/harshitclub" target="_blank">
                <RiGithubFill />
              </Link>
              <Link href="https://linkedin.com/in/harshitclub" target="_blank">
                <RiLinkedinBoxFill />
              </Link>
              <Link href="https://twitter.com/harshitclub" target="_blank">
                <RiTwitterFill />
              </Link>
              <Link href="https://instagram.com/harshitclub" target="_blank">
                <RiInstagramFill />
              </Link>
            </div>
          </aside>
        </section>
      </main>
    </>
  );
};

export default page;
