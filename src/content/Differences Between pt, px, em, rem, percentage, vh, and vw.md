---
title: Differences Between pt, px, em, rem, percentage, vh, and vw
date: 22-04-2023
author: Benjamin Zhang
tags: html,css
selected: false
---

## Physical Pixels of the Device

### pt:

- Screen width, resolution, where each unit is 1pt.

## CSS Pixels

### px:

- For desktop screens, 1px is approximately 0.76 physical pixels.
- For small screens like iPhone 6, with a physical resolution of 750 and a resolution of 375, 1px = 2pt.
- px is a relative unit.
- px is used to balance an element's size between PC and mobile devices to be consistent.
- On mobile devices, due to varying screen sizes, it is not desired to have elements displayed at the same size on all devices. Instead, automatic scaling based on screen size is preferred. Therefore, px is less used in mobile development.
- On PC, px units are more commonly used.
- On mobile, rem is preferred over px for responsive design.

### rem:

- `rem` is based on the default font size set on the `<html>` element, where 1rem is equal to 16px by default.
- It enables responsive layouts.
- All elements sized in `rem` units change proportionally with the root element's font size.
- By changing the root element's font size, all `rem`-sized elements respond to screen size changes.

### em:

- `em` is relative to the font size of the parent element. It is not widely used.
- It can lead to cumulative calculations in nested elements.

### vm/vh:

- CSS3 new features.
- `vh`: The viewport height is divided into 100 units, and each unit is 1vh. It changes proportionally with the viewport height.
- `vw`: The viewport width is divided into 100 units, and each unit is 1vw. It changes proportionally with the viewport width.
- vw and vh are essentially percentages.

### %:

- Percentages are usually considered relative to the direct parent element, but not always related to the corresponding property value of the parent element.
- For top and bottom properties, percentages are relative to the height of the closest non-static positioned parent element.
- For left and right properties, percentages are relative to the width of the closest non-static positioned parent element.
- For padding and margin, percentages are relative to the parent element's height.
- Due to these variations, percentages are used less in development.
