# TechBeauty

![Image of live site ](/src/assets/site_image.jpg)

## Demo
[View Live Site Here.](https://gleaming-boba-6793eb.netlify.app/)

## Project Brief

Simple e-commerce SPA website made with Create React App using a provided API as part of a Noroff assignment. Using styled-components, react-router-dom to move between pages, redux for state management across pages, and react-hook-form and yup to handle the contact form. Key components include:

### Homepage
- Displays a list of all products.
- Features a lookahead search bar for product filtering.
- Each product leads to its respective Individual Product Page when clicked.

### Layout Component
- All pages utilize a `<Layout>` component, which includes a header and footer.
- The header features a navigation bar and a Cart Icon component that displays the current number of cart items.

### Individual Product Page
- Displays data for a single product (title, description, image).
- Reviews are listed if available.
- The `discountedPrice` property indicates the product's price. Any difference between `discountedPrice` and `price` suggests a product discount.
- An 'Add to Cart' button adds the product to the cart.

### Cart Page
- Accessible by clicking the Cart Icon.
- Lists all products in the cart and their total.
- A 'Checkout' button leads to the Checkout Success Page.

### Checkout Success Page
- Confirms the success of the user's order.
- Provides a link back to the store.
- Clears the cart upon arrival.

### Contact Page
- Contains a contact form with fields (Full Name, Subject, Email, Body) requiring validation.

The website will employ React Router for page navigation and should be responsive. While a CSS Framework is optional, design from scratch is encouraged, using styled-components or CSS Modules.


## Install

Download or clone the repository and install the dependencies. 
```
npm i
```

To start to viewing locally run.
```
npm run start
``` 
## Built With

<img src="https://skillicons.dev/icons?i=html,css,js,react,styledcomponents,redux"/>

- React
- JavaScript

## Contributing

If you experience any errors feel free to add issues, or open up a pull request with suggested changes. Likewise if there are features you would like to suggest feel free.

## Contact

[<img src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white">](https://discordapp.com/users/178264761199362048)

[<img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white">](https://www.linkedin.com/in/alexander-barrett-64568a47/)

[<img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white">](mailto:alexanderbarrett189@gmail.com)

## License

This project is licensed under a Creative Commons license. It is open for contributions, but please credit the project if you use the code in your own projects.
