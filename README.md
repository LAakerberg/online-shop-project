# JavaScript Frameworks - Course Assignment

## React installed together with TailwindCSS & Vite js.

Clone the project and install the dependency

```
npm install
```

To run the product you can use the build in dev server from Vite js.

```
npm run dev
```

## Features

- react-router-dom
- react-icons
- react-hook-form
- yup
- styled-components
- eslint
- lint-staged
- prettier
- tailwindcss
- vite

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

## Deployed to Netlify

[![Netlify Status](https://api.netlify.com/api/v1/badges/5ffbf66b-07c5-4e4a-abb8-2a505cfc36e7/deploy-status)](https://app.netlify.com/sites/meek-pika-e025e2/deploys)

Live page:
[Vision Store](https://meek-pika-e025e2.netlify.app/)

#

# Course Assignment - Process

- [x] Create a new CRA app.
- [x] Create a Header that has a Nav.
- [x] Create a Cart Icon component and position this next to your Nav. This Cart Icon component will have an overlay that displays the number of items in the cart.
- [x] Create a Footer component.
- [x] Create a Layout component that has your Header and Footer.
- [x] Create the other pages:
  - [x] ContactPage
  - [x] ProductPage
  - [ ] CheckoutPage
  - [ ] CheckoutSuccessPage
- [x] Add React Router and route to each of the pages. The ProductPage page will be using a dynamic segment.
- [x] Fetch the list of products on the Homepage and store this as a state.
- [x] On the homepage, loop through the products and display a Product component for each of the values. This Product component should look like a product card. Each Product component will have a View product button which will link to the ProductPage page.
- [ ] The homepage should have a lookahead/auto-complete Search bar component. Typing values in the search bar should display products where the title matches the search input. Clicking on an item should take the user to the ProductPage page. Tip: Filter the user input and then display products that match the input.
- [x] On the ProductPage, use the ID of the product as the params for the dynamic segment. Add the product details as mentioned in the brief.
- [ ] Create a cart state. When the Add to cart button on the ProductPage is clicked, add the product to the cart.
- [ ] Clicking on the Cart Icon component will take the user to the CheckoutPage page.
- [ ] The CheckoutPage must list all of the products in the cart, show a total at the bottom and a Checkout button.
- [ ] Clicking the Checkout button will take the user to the CheckoutSuccessPage.
- [ ] The CheckoutSuccessPage should display that the order was successful and clear the cart. There should be a link to go back to the store.
- [x] On the ContactPage, create the following inputs with the following requirements.
  - [x] Full name (Minimum number of characters is 3, required)
  - [x] Subject (Minimum number of characters is 3, required)
  - [x] Email (Must be a valid email address, required)
  - [x] (Minimum number of characters is 3, required)
  - [x] Submit button
  - [x] console.log the data from the form once validation requirements are met.
- [x] Once your project is done, deploy it to Netlify.

#

# Features to complete

## Need to complete the CA

- [ ] Shopping cart functionality
- [ ] Search functionality
