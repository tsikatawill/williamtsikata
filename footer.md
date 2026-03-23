# Claude Code — Replicate okraks.fyi Footer

---

Create a reusable footer component that replicates the footer from okraks.fyi. Here are the full specs extracted directly from the live site:

---

## Visual Reference

The footer has two rows separated from the main content by a thin horizontal rule:

```
──────────────────────────────────────────────────── (thin divider, gray-800)

♥ Built by  @okraks                        [GH] [npm] [LC] [Dribbble] [Behance] [LI] [PH]
</> Built with  Next.js , NextUI and Supabase       Last updated on January 2, 2026. 11:46 AM GMT
```

- Left column: two lines of "Built by" and "Built with" text with inline links
- Right column: a row of social icon links + a timestamp line below them
- The two columns sit on the same baseline (`items-end`) on desktop, and stack vertically on mobile

---

## Layout & Structure

```
<div class="w-full max-w-4xl px-5 md:px-0 mx-auto mt-10">

  <!-- Horizontal divider above footer -->
  <div class="border-b-[0.2px] dark:border-gray-800 border-gray-200 mb-10"></div>

  <!-- Footer row -->
  <div class="pb-10 gap-10 font-light text-sm flex flex-col md:flex-row
              items-start md:items-end justify-between">

    <!-- LEFT: Built by / Built with -->
    <div class="flex items-start gap-2 flex-col">

      <!-- Row 1: Built by -->
      <p class="flex items-center gap-2">
        [heart icon]
        Built by
        <a href="https://x.com/okraks" class="underline underline-offset-4">@okraks</a>
      </p>

      <!-- Row 2: Built with -->
      <p class="flex items-center gap-2">
        [code icon]
        Built with
        <a href="https://nextjs.org/" class="underline underline-offset-4">Next.js</a>
        ,
        <a href="https://nextui.org/docs/guide/introduction" class="underline underline-offset-4">NextUI</a>
        and
        <a href="https://supabase.com/" class="underline underline-offset-4">Supabase</a>
      </p>

    </div>

    <!-- RIGHT: Social icons + timestamp -->
    <div class="flex flex-col items-end justify-end">

      <!-- Social icon row -->
      <div class="flex items-center gap-2">
        [GitHub icon link]
        [npm icon link]
        [LeetCode icon link]
        [Dribbble icon link]
        [Behance icon link]
        [LinkedIn icon link]
        [ProductHunt icon link]
      </div>

      <!-- Timestamp -->
      <span class="block mt-2">Last updated on January 2, 2026. 11:46 AM GMT</span>

    </div>

  </div>
</div>
```

---

## Styling Tokens

| Property           | Value                                                                  |
| ------------------ | ---------------------------------------------------------------------- |
| Font size          | `14px` (`text-sm`)                                                     |
| Font weight        | `300` (`font-light`)                                                   |
| Text color         | `rgb(232, 230, 227)` — off-white/cream                                 |
| Background         | Transparent (inherits dark page bg `#0e1011`)                          |
| Max width          | `max-w-4xl` (896px)                                                    |
| Horizontal padding | `px-5` mobile, `px-0` on `md+`                                         |
| Bottom padding     | `pb-10` (40px)                                                         |
| Column gap         | `gap-10` (40px)                                                        |
| Left col row gap   | `gap-2` (8px) between the two `<p>` lines                              |
| Icon gap           | `gap-2` (8px) between social icons                                     |
| Divider            | `border-b-[0.2px] dark:border-gray-800` — ultra-thin, `mb-10` below    |
| Link style         | `underline underline-offset-4`, inherits text color (no colour change) |
| Social icon size   | `20×20px`                                                              |
| Icon color         | `currentColor` (inherits text color)                                   |

---

## Icon SVG Paths

Use these exact SVG paths for pixel-perfect match. All icons: `width="20" height="20"`.

### Heart icon (inline with "Built by")

```jsx
// viewBox="0 0 512 512" — FontAwesome heart
<svg
  stroke="currentColor"
  fill="currentColor"
  strokeWidth="0"
  viewBox="0 0 512 512"
  height="1em"
  width="1em"
>
  <path
    d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6
           64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9
           37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7
           64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4
           2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7
           38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5
           97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"
  />
</svg>
```

### Code icon (inline with "Built with")

```jsx
// viewBox="0 0 640 512" — FontAwesome code
<svg
  stroke="currentColor"
  fill="currentColor"
  strokeWidth="0"
  viewBox="0 0 640 512"
  height="1em"
  width="1em"
>
  <path
    d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22
           39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6
           120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5
           12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5
           12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3
           0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5
           32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8
           0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"
  />
</svg>
```

### GitHub (social icon)

```jsx
// viewBox="0 0 1024 1024"
<svg
  fill="currentColor"
  viewBox="0 0 1024 1024"
  height="20"
  width="20"
  className="mx-auto inline-block text-center"
>
  <path
    d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885
           363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7
           15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9
           62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26
           5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213
           0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120
           58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6
           42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9
           2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.2 48.9 132.2
           0 102.3-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5
           c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1
           0-247.2-200.4-447.3-447.5-447.3z"
  />
</svg>
```

### npm (social icon)

```jsx
// viewBox="0 0 576 512"
<svg
  fill="currentColor"
  viewBox="0 0 576 512"
  height="20"
  width="20"
  className="mx-auto inline-block text-center"
>
  <path
    d="M288 288h-32v-64h32v64zm288-128v192H288v32H160v-32H0V160h576zm-416
           32H32v128h64v-96h32v96h32V192zm160 0H192v160h64v-32h64V192zm224
           0H352v128h64v-96h32v96h32v-96h32v96h32V192z"
  />
</svg>
```

### LeetCode (social icon)

```jsx
// viewBox="0 0 24 24"
<svg
  fill="currentColor"
  viewBox="0 0 24 24"
  height="20"
  width="20"
  className="mx-auto inline-block text-center"
>
  <path
    d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854
           4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0
           0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0
           .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277
           4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378
           1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0
           1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68
           2.68 0 0 1 .066-.523 2.545 2.545 0 0 1
           .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501
           2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0
           0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384
           1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38
           1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0
           1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"
  />
</svg>
```

### Dribbble (social icon)

```jsx
// viewBox="0 0 1024 1024"
<svg
  fill="currentColor"
  viewBox="0 0 1024 1024"
  height="20"
  width="20"
  className="mx-auto inline-block text-center"
>
  <path
    d="M512 96C282.6 96 96 282.6 96 512s186.6 416 416 416
           416-186.6 416-416S741.4 96 512 96zm275.1 191.8c49.5 60.5
           79.5 137.5 80.2 221.4-11.7-2.5-129.2-26.3-247.4-11.4-2.5-6.1-5-12.2-7.6-18.3-7.4-17.3-15.3-34.6-23.6-51.5C720
           374.3 779.6 298 787.1 287.8zM512 157.2c90.3 0 172.8 33.9
           235.5 89.5-6.4 9.1-59.9 81-186.2 128.4C503.1 267.6 438.6
           179.8 428.7 166.6c27.3-6.5 55.2-9.4 83.3-9.4zM360.9 191c9.4
           12.8 72.9 100.9 131.7 205.5C326.4 440.6 180 440 164.1
           439.8c23.1-110.3 97.4-201.9 196.8-248.8zM156.7 512.4c0-3.3.1-6.6.1-9.9
           15.5.3 187.7 2.4 363.9-50.4 10.2 19.8 19.9 39.9 28.8 60.1-4.6
           1.3-9.2 2.6-13.7 4.1C349.6 574.5 236.1 720.6 228 733.2
           182.7 678.4 156.7 608.5 156.7 512.4zM512 867.5c-82.3
           0-158.2-28.4-218.2-75.6 6.2-12.2 75.6-146.1 262.8-212.9.7-.2
           1.4-.5 2.1-.7 47.1 122.3 66.5 224.8 71.5 253.5A356.9 356.9
           0 0 1 512 867.5zm177.3-46.5c-3.5-21-21.5-118-65.4-238.6
           111.7-17.8 209.5 11.5 221.3 15.1-15.5 93.5-73.6 173.3-155.9
           223.5z"
  />
</svg>
```

### Behance (social icon)

```jsx
// viewBox="0 0 1024 1024"
<svg
  fill="currentColor"
  viewBox="0 0 1024 1024"
  height="20"
  width="20"
  className="mx-auto inline-block text-center"
>
  <path
    d="M634 294.3h199.5v48.4H634zM434.1 485.8c44.1-21.1 67.2-53.2
           67.2-102.8 0-98.1-73-121.9-157.3-121.9H112v492.4h238.5c89.4
           0 173.3-43 173.3-143 0-61.8-29.2-107.5-89.7-124.7zM220.2
           345.1h101.5c39.1 0 74.2 10.9 74.2 56.3 0 41.8-27.3 58.6-66
           58.6H220.2V345.1zm115.5 324.8H220.1V534.3H338c47.6 0 77.7
           19.9 77.7 70.3 0 49.6-35.9 65.3-80 65.3zm575.8-89.5c0-105.5-61.7-193.4-173.3-193.4-108.5
           0-182.3 81.7-182.3 188.8 0 111 69.9 187.2 182.3 187.2
           85.1 0 140.2-38.3 166.7-120h-86.3c-9.4 30.5-47.6 46.5-78.9
           46.5-48 0-81.2-27.3-86.8-76.5h254.7c.4-10.8.9-22 .9-32.6zm-254-35.3c7.6-42.7
           35.8-67.8 77.5-67.8 42.8 0 68.2 25.8 72.9 67.8H657.5z"
  />
</svg>
```

### LinkedIn (social icon)

```jsx
// viewBox="0 0 17 17"
<svg
  fill="currentColor"
  viewBox="0 0 17 17"
  height="20"
  width="20"
  className="mx-auto inline-block text-center"
>
  <path
    d="M0.698 5.823h3.438v10.323h-3.438v-10.323zM2.438
           0.854c-1.167 0-1.938 0.771-1.938 1.782 0 0.989 0.74 1.781
           1.896 1.781h0.021c1.198 0 1.948-0.792
           1.938-1.781-0.011-1.011-0.74-1.782-1.917-1.782zM12.552
           5.583c-1.829 0-2.643 1.002-3.094 1.709v-1.469h-3.427c0 0
           0.042 0.969 0 10.323h3.427v-5.761c0-0.312
           0.032-0.615 0.114-0.843 0.251-0.615 0.812-1.25 1.762-1.25
           1.238 0 1.738 0.948 1.738 2.333v5.521h3.428v-5.917c0-3.167-1.688-4.646-3.948-4.646z"
  />
</svg>
```

### ProductHunt (social icon)

```jsx
// viewBox="0 0 512 512"
<svg
  fill="currentColor"
  viewBox="0 0 512 512"
  height="20"
  width="20"
  className="mx-auto inline-block text-center"
>
  <path
    d="M326.3 218.8c0 20.5-16.7 37.2-37.2 37.2h-70.3v-74.4h70.3c20.5
           0 37.2 16.7 37.2 37.2zM504 256c0 137-111 248-248
           248S8 393 8 256 119 8 256 8s248 111 248 248zm-128.1-37.2c0-47.9-38.9-86.8-86.8-86.8H169.2v248h49.6v-74.4h70.3c47.9
           0 86.8-38.9 86.8-86.8z"
  />
</svg>
```

---

## Complete React Component

```tsx
// components/Footer.tsx
import Link from "next/link";

const socialLinks = [
  {
    href: "https://github.com/okraks",
    label: "GitHub",
    icon: (
      <svg
        fill="currentColor"
        viewBox="0 0 1024 1024"
        height={20}
        width={20}
        className="mx-auto inline-block text-center"
      >
        <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.2 48.9 132.2 0 102.3-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
      </svg>
    ),
  },
  {
    href: "https://www.npmjs.com/~okraks",
    label: "npm",
    icon: (
      <svg
        fill="currentColor"
        viewBox="0 0 576 512"
        height={20}
        width={20}
        className="mx-auto inline-block text-center"
      >
        <path d="M288 288h-32v-64h32v64zm288-128v192H288v32H160v-32H0V160h576zm-416 32H32v128h64v-96h32v96h32V192zm160 0H192v160h64v-32h64V192zm224 0H352v128h64v-96h32v96h32v-96h32v96h32V192z" />
      </svg>
    ),
  },
  {
    href: "https://leetcode.com/u/okraks",
    label: "LeetCode",
    icon: (
      <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        height={20}
        width={20}
        className="mx-auto inline-block text-center"
      >
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
      </svg>
    ),
  },
  {
    href: "https://dribbble.com/okraks",
    label: "Dribbble",
    icon: (
      <svg
        fill="currentColor"
        viewBox="0 0 1024 1024"
        height={20}
        width={20}
        className="mx-auto inline-block text-center"
      >
        <path d="M512 96C282.6 96 96 282.6 96 512s186.6 416 416 416 416-186.6 416-416S741.4 96 512 96zm275.1 191.8c49.5 60.5 79.5 137.5 80.2 221.4-11.7-2.5-129.2-26.3-247.4-11.4-2.5-6.1-5-12.2-7.6-18.3-7.4-17.3-15.3-34.6-23.6-51.5C720 374.3 779.6 298 787.1 287.8zM512 157.2c90.3 0 172.8 33.9 235.5 89.5-6.4 9.1-59.9 81-186.2 128.4C503.1 267.6 438.6 179.8 428.7 166.6c27.3-6.5 55.2-9.4 83.3-9.4zM360.9 191c9.4 12.8 72.9 100.9 131.7 205.5C326.4 440.6 180 440 164.1 439.8c23.1-110.3 97.4-201.9 196.8-248.8zM156.7 512.4c0-3.3.1-6.6.1-9.9 15.5.3 187.7 2.4 363.9-50.4 10.2 19.8 19.9 39.9 28.8 60.1-4.6 1.3-9.2 2.6-13.7 4.1C349.6 574.5 236.1 720.6 228 733.2 182.7 678.4 156.7 608.5 156.7 512.4zM512 867.5c-82.3 0-158.2-28.4-218.2-75.6 6.2-12.2 75.6-146.1 262.8-212.9.7-.2 1.4-.5 2.1-.7 47.1 122.3 66.5 224.8 71.5 253.5A356.9 356.9 0 0 1 512 867.5zm177.3-46.5c-3.5-21-21.5-118-65.4-238.6 111.7-17.8 209.5 11.5 221.3 15.1-15.5 93.5-73.6 173.3-155.9 223.5z" />
      </svg>
    ),
  },
  {
    href: "https://www.behance.net/okraks",
    label: "Behance",
    icon: (
      <svg
        fill="currentColor"
        viewBox="0 0 1024 1024"
        height={20}
        width={20}
        className="mx-auto inline-block text-center"
      >
        <path d="M634 294.3h199.5v48.4H634zM434.1 485.8c44.1-21.1 67.2-53.2 67.2-102.8 0-98.1-73-121.9-157.3-121.9H112v492.4h238.5c89.4 0 173.3-43 173.3-143 0-61.8-29.2-107.5-89.7-124.7zM220.2 345.1h101.5c39.1 0 74.2 10.9 74.2 56.3 0 41.8-27.3 58.6-66 58.6H220.2V345.1zm115.5 324.8H220.1V534.3H338c47.6 0 77.7 19.9 77.7 70.3 0 49.6-35.9 65.3-80 65.3zm575.8-89.5c0-105.5-61.7-193.4-173.3-193.4-108.5 0-182.3 81.7-182.3 188.8 0 111 69.9 187.2 182.3 187.2 85.1 0 140.2-38.3 166.7-120h-86.3c-9.4 30.5-47.6 46.5-78.9 46.5-48 0-81.2-27.3-86.8-76.5h254.7c.4-10.8.9-22 .9-32.6zm-254-35.3c7.6-42.7 35.8-67.8 77.5-67.8 42.8 0 68.2 25.8 72.9 67.8H657.5z" />
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/in/antwisaac/",
    label: "LinkedIn",
    icon: (
      <svg
        fill="currentColor"
        viewBox="0 0 17 17"
        height={20}
        width={20}
        className="mx-auto inline-block text-center"
      >
        <path d="M0.698 5.823h3.438v10.323h-3.438v-10.323zM2.438 0.854c-1.167 0-1.938 0.771-1.938 1.782 0 0.989 0.74 1.781 1.896 1.781h0.021c1.198 0 1.948-0.792 1.938-1.781-0.011-1.011-0.74-1.782-1.917-1.782zM12.552 5.583c-1.829 0-2.643 1.002-3.094 1.709v-1.469h-3.427c0 0 0.042 0.969 0 10.323h3.427v-5.761c0-0.312 0.032-0.615 0.114-0.843 0.251-0.615 0.812-1.25 1.762-1.25 1.238 0 1.738 0.948 1.738 2.333v5.521h3.428v-5.917c0-3.167-1.688-4.646-3.948-4.646z" />
      </svg>
    ),
  },
  {
    href: "https://www.producthunt.com/@okraks",
    label: "ProductHunt",
    icon: (
      <svg
        fill="currentColor"
        viewBox="0 0 512 512"
        height={20}
        width={20}
        className="mx-auto inline-block text-center"
      >
        <path d="M326.3 218.8c0 20.5-16.7 37.2-37.2 37.2h-70.3v-74.4h70.3c20.5 0 37.2 16.7 37.2 37.2zM504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-128.1-37.2c0-47.9-38.9-86.8-86.8-86.8H169.2v248h49.6v-74.4h70.3c47.9 0 86.8-38.9 86.8-86.8z" />
      </svg>
    ),
  },
];

export function Footer() {
  // Replace with your own last-updated logic (e.g. from a CMS, build time, or Supabase)
  const lastUpdated = "January 2, 2026. 11:46 AM GMT";

  return (
    <div className="mx-auto mt-10 w-full max-w-4xl px-5 md:px-0">
      {/* Divider */}
      <div className="mb-10 border-b-[0.2px] border-gray-200 dark:border-gray-800" />

      {/* Footer row */}
      <div className="flex flex-col items-start justify-between gap-10 pb-10 text-sm font-light md:flex-row md:items-end">
        {/* LEFT — Built by / Built with */}
        <div className="flex flex-col items-start gap-2">
          {/* Row 1: Built by */}
          <p className="flex items-center gap-2">
            {/* Heart icon */}
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
            >
              <path d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z" />
            </svg>
            Built by{" "}
            <a
              href="https://x.com/okraks"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              @okraks
            </a>
          </p>

          {/* Row 2: Built with */}
          <p className="flex items-center gap-2">
            {/* Code icon */}
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 640 512"
              height="1em"
              width="1em"
            >
              <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
            </svg>
            Built with{" "}
            <a
              href="https://nextjs.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              Next.js
            </a>{" "}
            ,{" "}
            <a
              href="https://nextui.org/docs/guide/introduction"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              NextUI
            </a>{" "}
            and{" "}
            <a
              href="https://supabase.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              Supabase
            </a>
          </p>
        </div>

        {/* RIGHT — Social icons + timestamp */}
        <div className="flex flex-col items-end justify-end">
          {/* Social icon row */}
          <div className="flex items-center gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Timestamp */}
          <span className="mt-2 block">Last updated on {lastUpdated}</span>
        </div>
      </div>
    </div>
  );
}
```
