---
title: React Hooks and Their Rules
date: 18-06-2023
tags: react
selected: true
---



## What Are React Hooks?

👉 Special built-in functions that allow us to "hook" into React internals:

		- Creating and accessing state from Fiber tree
		- Registering side effects in Fiber tree
		- Manual DOM selections
		- Many more...

> The Fiber tree is somewhere deep inside React, and usually not accessible to us. But using the useState or the useEffect hook, we can essentially hook into that internal mechanism.

👉 Always start with "use" (useState, useEffect, etc.)

👉 Enable easy reusing of non-visual logic: We can compose multiple hooks into our own custom hooks

👉 Give function components the ability to own state and run side effects at different points (before v16.8 only available in class components)



## Overview of All Built-in Hooks

| MOST USED | LESS USED | ONLY FOR LIBRARIES |
| ---- | ---- | ----|
| ✅ useState | ➡️ useRef | ❌ useSyncExternalStore |
| ✅ useEffect | ➡️ useCallback | ❌ useInsertonEffect |
| ➡️ useReducer | ➡️ useMemo |		|
| ➡️ useContext | ➡️ useTransition |		|
|      | ➡️ useDeferredValue |		|
|      | ❌ useLayoutEffect |		|
|      | ❌ useDebugValue |		|
|      | ❌ useImperativeHandle |		|
|      | ❌ useId |		|



## The Rules of Hooks

#### 1. Only call hooks at the top level

​	👉 Do **NOT** call hooks inside **conditionals, loops, nested functions**, or after an **early return**

​	👉 This is necessary to ensure that hooks are always called in the **same order** (hooks rely on this)

#### 2. Only call hooks from React functions

​	👉 Only call hooks inside a **function component** or a **custom hook**

> These rules are automatically enforced by React's ESLint rules



![image-20230804215448826](C:\Users\benja\Desktop\My Projects\bjm-blog\public\assets\image-20230804215448826.png)