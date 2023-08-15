---
title: Creating A Markdown Blog With React
date: 14-08-2023
author: Benjamin Zhang
tags: react,project
selected: true
---



# Creating A Markdown Blog With React

> GA Final Project Presentation		                                                                                                                            ——*Benjamin Zhang*



## Project Intro

- Markdown Blog built **without** any platform/headless CMS.
- Pure logic for turning markdown files to data.
- Visit live application: [**bjmblog.vercel.app** ](https://bjmblog.vercel.app/) &  



## Tech stack

- **The First Version** (this presentation will primarily be based on this version) 
  - React
  - react-router-dom
  - markdown-to-jsx
  - react-syntax-highlighter
  - Vercel
- **The Second Version**
  - Next.js
  - Tailwind CSS
  - next-mdx-remote
  - Vercel



## App Structures & Features

<img src="\assets\image-20230814223937565.png" alt="image-20230814223937565" style="zoom: 33%;" />

- **Layout**
  - header with nav links
  - footer

- **Home Page**
  - brief introduction about myself
  - tech headlines (public api)
  - selected posts
- **Blog Page**
  - posts list
  - search with keywords
  - filter by tags (multi-select)
- **Post Page**
  - rendering the markdown content to JSX (markdown-to-jsx)
  - highlighting code blocks (syntaxHighlighter)
- **About Page**
  - personal info
- **Not Found Page**



## Challenges

- **fetch markdown content**
  
  👉 use Node.js modules 'path' and 'fs' to work with file paths and filesystem operations

  ```jsx
  const path = require("path");
  const fs = require("fs").promises;
  
  const dirPath = path.join(__dirname, "../src/content"); 
  const dirPathPages = path.join(__dirname, "../src/pages/content");
  ```
  
  👉 extracting metadata from the Markdown files
  
  ```jsx
  const parseMetadata = ({ lines, metadataIndices }) => {
    if (metadataIndices.length > 0) {
      let metadata = lines.slice(metadataIndices[0] + 1, metadataIndices[1]);
      let obj = {};
      metadata.forEach((line) => {
        obj[line.split(":")[0].trim()] = line.split(":")[1].trim();
      });
      return obj; 
    }
  };
  ```
  
  👉 extracting content from the Markdown files
  
  ```jsx
  const parseContent = ({ lines, metadataIndices }) => {
    if (metadataIndices.length > 0) {
      let content = lines.slice(metadataIndices[1] + 1);
      return content.join("\n");
    }
  };
  ```
  
  👉read data from markdown files, and then writes the collected information into a JSON file
  
  ```jsx
  const getPosts = async () => {
    try {
      const files = await fs.readdir(dirPath);
      let postlist = await Promise.all(
        files.map(async (file, i) => {
          try {
            const contents = await fs.readFile(`${dirPath}/${file}`, "utf8");
            const lines = contents.split("\n");
            const metadataIndices = lines.reduce(getMetadataIndices, []);
            const metadata = parseMetadata({ lines, metadataIndices });
            const content = parseContent({ lines, metadataIndices });
  
            let post = {
              id: i + 1,
              title: metadata.title || "No Title Given",
              author: metadata.author || "No Author Given",
              date: metadata.date || "No Date Given",
              tags: metadata.tags || "No Tags Given",
              content: content || "No Content Given",
            };
            return post;
          } catch (err) {
            console.error(`Error processing file ${file}:`, err);
            return null;
          }
        })
      );
  
      postlist = postlist.filter((post) => post !== null);
  
      let data = JSON.stringify(postlist);
      await fs.writeFile("src/posts.json", data);
    } catch (err) {
      console.log("Failed to list contents of directory: " + err);
    }
  };
  ```
  
  👉 after editing the markdown file, use command **'node public/main.js'** to execute the main.js file to update the json file
  
  ```json
  "scripts": {
      "server": "node public/main.js"
    },
  ```
  
- **rendering json objects to html**

  👉 article/post pages

  ```jsx
  import { useParams } from "react-router-dom";
  import postArticle from "../posts.json";
  import Markdown from "markdown-to-jsx";
  
  const params = useParams();
  const article = postArticle.find((post) => post.title === params.slug);
  ...
  <Markdown>{article.content}</Markdown>
  ```

- **search, filter to get postlist and then sort them by date**

  ```jsx
  import postlist from "../posts.json";
  
  const filteredPosts = postlist
      .filter(
        (post) =>
          (post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.date.toLowerCase().includes(searchQuery.toLowerCase())) &&
          postMatchesSelectedTags(post)
      )
      // Sort posts by date, from newest to oldest
      .sort((a, b) => parseCustomDate(b.date) - parseCustomDate(a.date));
  ```

  

# Conclusion

In this presentation, I shared my journey of creating a Markdown blog with React. I'm grateful for your time. I'm glad that over the past couple of months, we've been learning React together. Enjoy coding, Thank you!
