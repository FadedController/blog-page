import { GetStaticPaths, GetStaticProps } from "next";
import Markdown, { compiler } from "markdown-to-jsx";
import React from "react";
import { readdirSync, readFileSync } from "fs";
import Head from "next/head";

interface BlogProps {
  markdown: string;
  articleName: string;
}

const Blog: React.FC<BlogProps> = ({ markdown, articleName }) => {
  return (
    <div className="page-bg article-wrapper">
      <Head>
        <title>{articleName}</title>
      </Head>
      <Markdown options={{ wrapper: "article" }}>{markdown}</Markdown>
    </div>
  );
};

// Get data for each post
export const getStaticProps: GetStaticProps = async (context) => {
  const blogName = context.params.id;
  const markdown = readFileSync(`./posts/${blogName}.md`).toString();
  const articleName =
    typeof blogName === "string" && blogName.replace("-", " ");

  return {
    props: {
      markdown,
      articleName,
    },
  };
};

// Generate post paths
export const getStaticPaths: GetStaticPaths = async () => {
  let paths = [];

  const files = readdirSync("./posts/");
  files.forEach((f) => paths.push({ params: { id: f.replace(".md", "") } }));

  return {
    paths,
    fallback: false,
  };
};

export default Blog;
