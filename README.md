# Tista-Method-019

## Introduction

Harley-Davidson: Your ultimate destination for an authentic motorcycle experience. Drawing inspiration from the iconic brand, Harley-Davidson offers a seamless platform for enthusiasts to explore the world of motorcycling like never before. From legendary bikes to exclusive accessories, Harley-Davidson caters to riders of all levels, ensuring unforgettable journeys on the open road. With user-friendly features and unparalleled heritage, Harley-Davidson redefines the thrill of riding, inviting you to join us and embrace the freedom of the ride. Experience the legacy, feel the power, and embark on your next adventure with Harley-Davidson. make it short. 

## Project Type

Frontend:

The project is a primarily front-end project which utilizes a mock server to simulate back-end.

## Deployed App

Frontend: https://tista-method-019.vercel.app/

Backend: https://tista-method-019-1.onrender.com/

## Directory Structure

```

Harley-Davidson
├── .gitignore
├── BackEnd/
│   ├── .gitignore
│   ├── db.json
│   ├── package-lock.json
│   ├── package.json
│   ├── products.json
│   ├── server.js
│   └── test.rest
├── FrontEnd/
│   ├── .eslintrc.cjs
│   ├── .gitignore
│   ├── README.md
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── public/
│   │   ├── logo/ 
│   │   └── vite.svg
│   ├── src/
│   │   ├── App.tsx
│   │   ├── assets/
│   │   │   ├── react.svg
│   │   │   
│   │   │   
│   │   │   
│   │   │   
│   │   │   
│   │   │   
│   │   ├── components/
│   │   │   ├── .dummy
│   │   │   ├── Admin/
│   │   │   │   ├── InitialFocus.tsx
│   │   │   │   ├── Sidebar.tsx
│   │   │   │   └── apiService/
│   │   │   │   │   ├── FetchProperty.tsx
│   │   │   │   │   ├── PostData.tsx
│   │   │   │   │   └── fetchData.tsx
│   │   │   ├── Body/
│   │   │   │   ├── Body.tsx
│   │   │   ├── Footer/
│   │   │   │   ├── Footer.tsx
│   │   │   ├── Header/
│   │   │   │   ├── Navbar.tsx
│   │   │   ├── Registration/
│   │   │   │   ├── Registration.tsx
│   │   │   ├── product/
│   │   │   │   ├── Products.tsx
│   │   │   └── Addcard/
│   │   │   │   ├── Men.tsx
│   │   ├── main.tsx
│   │   ├── pages/
│   │   │   ├── Admin.tsx
│   │   │   ├── Home.tsx
│   │   │   ├── LoginSignUp.tsx
│   │   │   ├── Property.tsx
│   │   │   └── Wishlist.tsx
│   │   ├── redux/
│   │   │   ├── action.ts
│   │   │   ├── actionTypes.ts
│   │   │   ├── authReducer.ts
│   │   │   └── store.ts
│   │   ├── routes/
│   │   │   ├── AllRoutes.tsx
│   │   │   └── PrivateRoute.tsx
│   │   ├── styles/
│   │   │   ├── Navbar.css
│   │   │   ├── App.css
│   │   │   ├── Footer/
│   │   │   │   └── footer.css
│   │   │   ├── Registration/
│   │   │   │   ├── css/
│   │   │   │   │   ├── style.css
│   │   │   │   │   └── style.css.map
│   │   │   │   ├── fonts/
│   │   │   │   │   └── material-icon/
│   │   │   │   │   │   ├── css/
│   │   │   │   │   │   │   ├── material-design-iconic-font.css
│   │   │   │   │   │   │   └── material-design-iconic-font.min.css
│   │   │   │   │   │   └── fonts/
│   │   │   │   └── scss/
│   │   │   ├── cards.css
│   │   │   ├── filterBar.css
│   │   │   ├── index.css
│   │   │   ├── navbar.css
│   │   │   └── propertyPageStyle/
│   │   ├── utils/
│   │   └── vite-env.d.ts
│   ├── tsconfig.json
│   ├── tsconfig.node.json
│   └── vite.config.ts
└── README.md

```

##video Walkthrough of the project

A detailed walkthrough of all the features of our project can be found here:

-----

## video Walkthrough of the project

A quick walkthrough of the project can be found here: 

-----

##Features

-Responsive and dynamic website
- User authentication
- Admin Dashboard and CRUD Operations
- Search and filter property using search param

## Design Decisions or Assumptions

The project is a clone of the popular website Harley-Davidson. To facilitate the proper design and flow of our project following assumptions were made :

- One admin for all CRUD operations instead of multiple admins and super admin
- User must be logged in to access the test-rdie details
- Admin user does not need to access the main website and is redirected to the admin dashboard

  ## Installation & Getting started

To run the frontend website, enter the following commands in your terminal:

```bash
# Move into the FrontEnd Directory
cd FrontEnd/

# Install all dependencies
npm install

# Run the dev server
npm run dev
```

The project uses a mock server deployed using JSON-server on render. The server can be accessed here: https://staybnb-server.onrender.com/

If you would like to run a local server instead, use the following commands:

```bash
# Move into the BackEnd directory
cd BackEnd/

# Run the server
npm run start
```

Warning: The project is built around the deployed server which can be accessed using the above link. Running a local server might cause some unwanted changes.

## Usage

The website lands on the home page. On the home page, the following functions can be performed:
