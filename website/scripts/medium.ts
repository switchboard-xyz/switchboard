import path from "path";
import fs from "fs";
import { execSync } from "child_process";
import mediumToMarkdown from "medium-to-markdown";

const MEDIUM_POSTS = [];

const projectDir = path.join(__dirname, "..");
const blogDir = path.join(projectDir, "blog");

async function main() {
  const postsResponse = await fetch(
    "https://mediumpostsapi.vercel.app/api/switchboardxyz"
  );
  if (!postsResponse.ok) {
    throw new Error(
      `Failed to fetch Medium posts: HttpStatus (${postsResponse.status}) = ${postsResponse.statusText}`
    );
  }

  const posts = await postsResponse.json();
  console.log(`Found ${posts.dataMedium.length} medium posts`);

  for (const post of posts.dataMedium) {
    try {
      const normalizedTitle = post.title
        .replaceAll("&amp;", "and")
        .replaceAll("#", "")
        .replaceAll(" ", "-");
      const fileName = path.join(blogDir, `${post.date}-${normalizedTitle}.md`);
      //   console.log(`mediumexporter ${post.link} > ${fileName}`);
      //   const markdown = execSync(`npx mediumexporter ${post.link}`, {
      //     encoding: "utf-8",
      //   });
      const markdown = await mediumToMarkdown.convertFromUrl(post.link);
      const frontMatter = `---
title: "${post.title.replaceAll("&amp;", "and").replaceAll('"', '"')}"
description: "${post.description.replaceAll('"', '"')}"
authors: [gallynaut]
tags: []
---
`;
      fs.writeFileSync(fileName, `${frontMatter}\n\n${markdown}`);
    } catch (error) {
      console.error(`Failed to create blog post for ${post.title}`);
      console.error(error);
    }
  }
}

main()
  .then()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
