# Paypal Payment Page



## Description

- E- commerce website PayPal payment page
- Online shop for shoe lovers.
- PayPal Developer payment API



## Table of Contents

- [Installation](https://github.com/Artur0705/ShoesOn#installation)
- [Usage](https://github.com/Artur0705/ShoesOn#usage)
- [License](https://github.com/Artur0705/ShoesOn#license)
- [Contributing](https://github.com/Artur0705/ShoesOn#contributing)
- [Tests](https://github.com/Artur0705/ShoesOn#tests)
- [Demo](https://github.com/Artur0705/ShoesOn#demo)
- [Screenshot](https://github.com/Artur0705/ShoesOn#screenshot)
- [Questions](https://github.com/Artur0705/ShoesOn#questions)



## Installation

- Create the Project

```bash
npm create vite@latest payment-page -- --template react
cd payment-page
```

- Install Dependencies

```bash
npm install
```

- Install Tailwind CSS

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

- Configure the template paths

```bash
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

- Add the Tailwind directives to index.css

```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```



## Build Process

- Start

```bash
npm run dev
```

- Import Google Fonts to index.css

  - In this project, I use ==Montserrat==
  - Specify the fonts on the theme of Tailwind.config.js

  ```js
  /** @type {import('tailwindcss').Config} */
  export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      extend: {},
    },
    plugins: [],
  };
  ```

  - Then we can set the Montserrat font to any element just using the Tailwind CSS syntax:

  ```js
  font-montserrat
  ```

- Use PayPal Developer Sandbox

  - Online - Checkout - Standard - Customize - Standard Payments with JavaScript Frameworks - React: https://developer.paypal.com/docs/checkout/standard/customize/single-page-app/
  - There are several ways, here I chose to use the **react-paypal-js** [npm package](https://www.npmjs.com/package/@paypal/react-paypal-js) within the React.js framework: https://developer.paypal.com/sdk/js/configuration/

  ```bash
  npm install @paypal/react-paypal-js
  ```

- Create a backend folder and files

```
- server
	-index.js
	-paypal-api.js
```

- Generate a package.json file

```bash
nmp init --y
```

- Install dependencies

```bash
npm i dotenv express node-fetch
```





