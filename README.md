# Project Proposal: Personal Markdown Blog



### Project Overview

For my final project, I will be building a personal blog, inspired by the blog of [Lee Robinson](https://leerob.io/), he is the VP of Developer Experience at [Vercel](https://vercel.com/), and also he is now leading the community for [Next.js](https://nextjs.org/). I like his blog a lot, it's simple, clean and easy to use. So I want to create a similar one to share my notes, articles, and thoughts on different topics related to web development, programming, and technology.

I will not be 100% replicating his blog. I will remove some features, such as the commenting system, and I will add some functionalities to ensure that I can utilize as many react concepts I learned in our class as possible.



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

![image-20230801141805850](C:\Users\benja\AppData\Roaming\Typora\typora-user-images\image-20230801141805850.png)