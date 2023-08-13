# Introduction



## [What is Next.js?](https://nextjs.org/docs#what-is-nextjs)

- A React framework for building full-stack web applications.
- Abstracts and automatically configures tooling needed for React, like bundling, compiling, and more.



## [Main Features](https://nextjs.org/docs#main-features)

✅ Routing	✅ Client-side Rendering (CSR)	 ✅ Server-side Rendering (SSR)	✅ Simplified data fetching	 ✅ Extended fetch API	✅ Support multiple styling methods	 ✅ Optimizations	 ✅ Support TypeScript



# Installation

```
npx create-next-app@latest
```

```js
npm run dev
```



# Project Structure

https://nextjs.org/docs/getting-started/project-structure



# Defining Routes



### Creating Routes

Next.js uses a file-system based router where **folders** are used to define routes.

![Route segments to path segments](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Froute-segments-to-path-segments.png&w=3840&q=75&dpl=dpl_5nyE2qDUZA6TxAeNHaewdzrr4qMc)



### Creating UI

[Special file conventions](https://nextjs.org/docs/app/building-your-application/routing#file-conventions) are used to create UI for each route segment. The most common are [pages](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#pages) to show UI unique to a route, and [layouts](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#layouts) to show UI that is shared across multiple routes.



# Pages and Layouts



## [Pages](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#pages)

- A page is UI that is **unique** to a route. 

- A page is always the [leaf](https://nextjs.org/docs/app/building-your-application/routing#terminology) of the [route subtree](https://nextjs.org/docs/app/building-your-application/routing#terminology).
- ==.js==, ==.jsx==, or ==.tsx== file extensions can be used for Pages.
- A `page.js` file is required to make a route segment publicly accessible.
- Pages are [Server Components](https://nextjs.org/docs/getting-started/react-essentials) by default but can be set to a [Client Component](https://nextjs.org/docs/getting-started/react-essentials#client-components).
- Pages can fetch data. View the [Data Fetching](https://nextjs.org/docs/app/building-your-application/data-fetching) section for more information.



## [Layouts](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#layouts)

- A layout is UI that is **shared** between multiple pages.
- Layouts can also be [nested](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#nesting-layouts)
- The top-most layout is called the [Root Layout](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required). This **required** layout is shared across all pages in an application. Root layouts must contain ==html== and ==body== tags.
- Layouts in a route are **nested** by default. Each parent layout wraps child layouts below it using the React ==children== prop.
- You can use [Route Groups](https://nextjs.org/docs/app/building-your-application/routing/route-groups) to opt specific route segments in and out of shared layouts.
- Layouts are [Server Components](https://nextjs.org/docs/getting-started/react-essentials) by default but can be set to a [Client Component](https://nextjs.org/docs/getting-started/react-essentials#client-components).
- A ==layout.js== and ==page.js== file can be defined in the same folder. The layout will wrap the page.



### [Root Layout (Required)](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required)

- The root layout is defined at the top level of the ==app== directory and applies to all routes.
- The root layout must define ==<html>== and ==<body>==



# Linking and Navigating

There are two ways to navigate between routes in Next.js:

- Using the [<Link>Component](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#link-component)
- Using the [==useRouter== Hook](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#userouter-hook)



## [<Link> Component](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#link-component)

```
import Link from 'next/link'
 
export default function Page() {
  return <Link href="/dashboard">Dashboard</Link>
}
```

#### [Linking to Dynamic Segments](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#linking-to-dynamic-segments)

```
import Link from 'next/link'
 
export default function PostList({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  )
}
```

#### [Checking Active Links](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#checking-active-links)

You can use [==usePathname()==](https://nextjs.org/docs/app/api-reference/functions/use-pathname) to determine if a link is active. 

```
'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'
 
export function Navigation({ navLinks }) {
  const pathname = usePathname()
 
  return (
    <>
      {navLinks.map((link) => {
        const isActive = pathname === link.href
 
        return (
          <Link
            className={isActive ? 'text-blue' : 'text-black'}
            href={link.href}
            key={link.name}
          >
            {link.name}
          </Link>
        )
      })}
    </>
  )
}
```

#### [Scrolling to an `id`](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#scrolling-to-an-id)

```
<Link href="/dashboard#settings">Settings</Link>
 
// Output
<a href="/dashboard#settings">Settings</a>
```

## [`useRouter()` Hook](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#userouter-hook)

The ==useRouter== hook allows you to programmatically change routes.



# Route Groups

You can mark a folder as a **Route Group** to prevent the folder from being included in the route's URL path.

A route group can be created by wrapping a folder's name in parenthesis: ==(folderName)==

![Organizing Routes with Route Groups](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Froute-group-organisation.png&w=3840&q=75&dpl=dpl_4wceNrAn3myUmyVmW3g6XDEvYfP8)

To create multiple [root layouts](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required), remove the top-level ==layout.js== file, and add a ==layout.js== file inside each route groups. This is useful for partitioning an application into sections that have a completely different UI or experience. The ==<html>== and ==<body>== tags need to be added to each root layout.

![Route Groups with Multiple Root Layouts](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Froute-group-multiple-root-layouts.png&w=3840&q=75&dpl=dpl_4wceNrAn3myUmyVmW3g6XDEvYfP8)



# Dynamic Routes

## [Convention](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#convention)

A Dynamic Segment can be created by wrapping a folder's name in square brackets: ==[folderName]==. For example, ==[id]== or ==[slug]==.

## [Catch-all Segments](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#catch-all-segments)

Dynamic Segments can be extended to **catch-all** subsequent segments by adding an ellipsis inside the brackets ==[...folderName]==.

## [Optional Catch-all Segments](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#optional-catch-all-segments)

Catch-all Segments can be made **optional** by including the parameter in double square brackets: ==[[...folderName]]==.

The difference between **catch-all** and **optional catch-all** segments is that with optional, the route without the parameter is also matched.

```
// app\blog\[slug]\page.tsx
const Page = ({ params }: { params: { slug: string } }) => {
  return <h1>slug page @@@ {params.slug}</h1>;
};

export default Page;
```



# Loading UI and Streaming

The special file ==loading.js== helps you create meaningful Loading UI with [React Suspense](https://react.dev/reference/react/Suspense). 

## [Instant Loading States](https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming#instant-loading-states)

An instant loading state is fallback UI that is shown immediately upon navigation. 

Create a loading state by adding a `loading.js` file inside a folder.

![loading.js special file](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Floading-special-file.png&w=3840&q=75&dpl=dpl_46ncsoiUzpeReYYC8yec1ZDMzFik)

In the same folder, ==loading.js== will be nested inside ==layout.js==. It will automatically wrap the ==page.js== file and any children below in a ==<Suspense>== boundary.

![loading.js overview](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Floading-overview.png&w=3840&q=75&dpl=dpl_46ncsoiUzpeReYYC8yec1ZDMzFik)
