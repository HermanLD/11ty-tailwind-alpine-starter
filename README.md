# eleventy-tailwindcss-starter

based on starter by [Greg Wolanski](https://gregwolanski.com)

A starter repository showing how to build a website with the [Eleventy](https://www.11ty.dev) and [Tailwind CSS](https://tailwindcss.com).

Learn more on CSS-Tricks: [An Eleventy Starter with Tailwind CSS and Alpine.js](https://css-tricks.com/eleventy-starter-with-tailwind-css-alpine-js/)

## Getting Started

### 1. Clone this repository

```bash
git clone https://github.com/HermanLD/11ty-tailwind-alpine-starter my-website-name
```

### 2. Navigate to the directory

```bash
cd my-website-name
```

### 3. Install the dependencies

```bash
npm install
```

### 4. Run tailwind CLI

```bash
npm run dev
```

### 5. Run Eleventy dev server

```bash
npm run start
```

### 6. Run Eleventy for production

```bash
npm run build
```

## Troubleshooting

- Environment variable issue in [Windows](https://github.com/gregwolanski/eleventy-tailwindcss-alpinejs-starter/issues/3).
- Running eleventy serve & tailwindcss watch simultaniously in npm scripts:
  Original setup had tailwind and 11ty run in the same script but when run, would freeze.
  Now you will have to split the terminal and run dev and start separately.
