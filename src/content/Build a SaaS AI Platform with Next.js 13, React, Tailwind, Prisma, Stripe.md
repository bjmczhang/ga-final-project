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