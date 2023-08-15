## Source Files and Live Demos:

React Version: 
https://github.com/bjmczhang/ga-final-project/tree/master
https://bjmblog.vercel.app/


Next.js+Tailwind Version: 
https://github.com/bjmczhang/nextjs-blog
https://bjmblog-nextjs.vercel.app


# Project Proposal: Personal Markdown Blog

### Project Overview

For my final project, I will be building a personal blog, inspired by the blog of [Lee Robinson](https://leerob.io/), he is the VP of Developer Experience at [Vercel](https://vercel.com/), and also he is now leading the community for [Next.js](https://nextjs.org/). I like his blog a lot, it's simple, clean and easy to use. So I want to create a similar one to share my notes, articles, and thoughts on different topics related to web development, programming, and technology.

> I will not be 100% replicating his blog. I will remove some features, such as the commenting system, and I will add some functionalities to ensure that I can utilize as many react concepts I learned in our class as possible.

### App Structures

- **Home Page**: The blog's landing page will feature an overview of the latest blog posts along with a brief introduction about me myself. Additionally, there will be a section called "Headlines," where I will fetch several latest tech news using public APIs. But, you know, the blog is not intended to be a news sharing platform, so I don't want to post too much news here, maybe 2-4 headlines are enough.

- **Blog Page**: It will be a posts list page, from this page users can use search bar and tags to filter the list.

- **About Page**: Here I will introduce myself, post some personal information like my skills, what drives me to learn coding, and share my social account links.

- **Post Page**: In this project, I will not use CMS or build backend database to store my articles. In stead, I will use a few basic node.js command to get the data from local markdown files and store them in a **`json`** file so that I can deploy them on a server after every time I editor them. And also, I will use some open source component libraries to render markdown.

- **Not Found Page**

### Components and Features

- **Layout**: All the general elements which will be displayed on every single page will put in this component.

- **Tags**: Blog posts will be tagged, allowing users to filter and find specific topics of interest easily.

- **Search Functionality**: Users will have the option to search for specific blog posts using keywords.

- **Headlines**: I will utilize a public news API to display latest news related to the blog content.
- **Selected Posts**: In this section, I will showcase some recommended posts.

- **Responsive Design**: The blog will be designed to be responsive across various devices.

- **Styling and UI**: While initially focusing on core functionality, I will later enhance the blog's look and feel, considering accessibility and user experience.

### Tech Stack

- **React**: To build the front-end components and handle the user interface.

- **React Router**: To manage navigation and multiple in-app pages.

- **JavaScript**: To handle dynamic interactions and API integrations.

- **CSS**: For styling and layout design.

- **Public API**: To fetch public news data and enrich the blog's content.
- **Node.js**: To fetch local markdown files and store the content in a **`json`** file.
- **Extensions (optional)**: Sass, Next.js, Material UI, etc,.

### Wireframe

Figma link: [click here](https://www.figma.com/file/VsE5BeDWc1Afq3sXNPsa4r/bjm-blog?type=design&node-id=0%3A1&mode=design&t=PjCbH9szgOEPbquU-1)

![image-wireframe](./wireframe.png)





<<<<<<< HEAD
-------------------------------------------------------------------------------------------------------------
=======
----------------------------------------------------------------------------------------------------------------------------------------------------
>>>>>>> e070520d86a9635694d90bbc16a02ba2fbfe3720









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

<img src="src\assets\image-20230814223937565.png" alt="image-20230814223937565" style="zoom: 33%;" />

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
