---
title: Build a SaaS AI Platform with Next.js 13, React, Tailwind, Prisma, Stripe
date: 21-06-2023
author: Benjamin Zhang
tags: project
selected: false
---



> #### What is SaaS?
>
> **SaaS** stands for **Software as a Service**. It is a **cloud computing model** where software applications are delivered over the internet on a subscription basis. Instead of installing and maintaining software on individual devices or servers, users can access and use the software **through a web browser**.



## Environment Setup

> #### Shadcn/ui
>
> - Re-usable components built using Radix UI and Tailwind CSS.
>
> - **NOT** a component library. It's a collection of re-usable components that you can copy and paste into your apps.
> - It's not a component library, so you do not install it as a dependency. It is not available or distributed via npm.
> - Pick the components you need. Copy and paste the code into your project and customize to your needs. The code is yours.
> - Shadcn/ui components are not in node modules, they are going to be directly in our components folder so we can modify them in any way we want.



##### 1. Create project

```
npx create-next-app@latest my-app --typescript --tailwind --eslint
```



##### 2. Run the CLI

```
npx shadcn-ui@latest init
```

> **CLI** stands for **Command Line Interface**. It is a text-based user interface that allows users to interact with a computer program or operating system by entering commands as text. Instead of using a graphical user interface (GUI) with buttons and menus, a CLI requires users to type specific commands in a terminal or command prompt.



##### 3. Install the components

```
npx shadcn-ui@latest add button
```



## Folder Setup

##### 1. Set the height for HTML and body

```
// globals.css
html,
body,
:root {
  height: 100%;
}
```



##### 2. Change title and description

```
// layout.tsx
export const metadata: Metadata = {
  title: "mAgIc",
  description: "AI Platform",
};
```



##### 3. Router Group

> In the ==app== directory, nested folders are normally mapped to URL paths. However, you can mark a folder as a **Route Group** to prevent the folder from being included in the route's URL path.

A route group can be created by wrapping a folder's name in parenthesis: ==(folderName)== 

It's not affecting the URL, it's just a folder where we decided to keep our root page for easier structure.

![Organizing Routes with Route Groups](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Froute-group-organisation.png&w=3840&q=75&dpl=dpl_7ds9ACTGgmRZXVhFUCG5vMyVUFKb)

![image-20230805170517413](C:\Users\benja\Desktop\My Projects\bjm-blog\public\assets\image-20230805170517413.png)



##### 4. Add authentication to our project

- Shut down our application, so we don't have any hot reloading errors

- Add authentication using clerk

  - install @clerk/nextjs

    ```
    npm install @clerk/nextjs
    ```

  - set environment keys

    ```
    // .env.local
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=...
    CLERK_SECRET_KEY=...
    ```

  - mount clerkprovider

    ```
    // app/layout.tsx
    	...
    import { ClerkProvider } from '@clerk/nextjs'
    	...
    return(
    <ClerkProvider>
    	<html>
            <body>
            ...
            </body>
    	</html>
    </ClerkProvider>
    )
    ```

  - create middleware.ts file

    Now that Clerk is installed and mounted in your application, it’s time to decide which pages are public and which need to hide behind authentication. We do this by creating a ==middleware.ts== file at the root folder (or inside ==src/== if that is how you set up your app).

  - build sign in and sign up pages

    Clerk offers a set of prebuilt components that you can use to embed sign in, sign up, and other user management functions into your Next.js application. 

    ```
    // app/sign-up/[[...sign-up]]/page.tsx
    import { SignUp } from "@clerk/nextjs";
    
    export default function Page() {
      return <SignUp />;
    }
    ```

    ```
    // app/sign-in/[[...sign-in]]/page.tsx
    import { SignIn } from "@clerk/nextjs";
    
    export default function Page() {
      return <SignIn />;
    }
    ```

  - update environment variables

    add environment variables for the ==signIn== , ==signUp== and ==afterSignUp== , ==afterSignIn== paths:

    ```
    // .env.local
    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
    NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
    NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
    ```

    let clerk knows where to redirect us after we login or where to go in general for sign in and sign up

  - add public route

    ```
    // middleware.ts
    export default authMiddleware({
      publicRoutes: ["/"],
    });
    ```

  - styling sign-in and sign-out page

    ```
    // (auth)/layout.tsx
    const AuthLayout = ({ children }: { children: React.ReactNode }) => {
      return (
        <div className="flex items-center justify-center h-full">{children}</div>
      );
    };
    
    export default AuthLayout;
    ```

  - embed the <UserButton />

    The ==<UserButton />== allows you to manage your account information and log out, thus allowing you to complete a full authentication circle.

    ```
    // (dashboard)/(routes)/dashboard/page.tsx
    import { UserButton } from "@clerk/nextjs";
    export default function DashboardPage() {
      return (
        <div>
          <p>Dashboard Page (Protected)</p>
          <UserButton afterSignOutUrl="/" />
        </div>
      );
    }
    
    ```

    

## Sidebar



##### 1. create the layout for dashboard routes

##### 2. create navbar components