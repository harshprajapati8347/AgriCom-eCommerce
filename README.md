# AgriCom - Ecommerce Platform

## Introduction
The agriculture industry is one of the oldest and most important industries, providing the
world's population with food and raw materials. However, the traditional methods of
agriculture have their limitations in terms of efficiency, transparency, and sustainability.
E-commerce platforms have the potential to address these limitations by connecting
farmers, suppliers, and consumers, providing a transparent and efficient supply chain. This
project aims to develop an agriculture e-commerce platform for all agriculture needs that
leverages modern technology to provide a one-stop-shop for all agricultural needs. 

The platform will enable producers/vendors to sell their products which are used in agriculture
in any level, directly to consumers and suppliers, cutting out middlemen and increasing
profits. The platform will also provide users with an extensive range of products, including
fertilizers, machinery, pesticides, remedies and all kind of agri products. The specific page
for frequent agricultural news and government schemes will be there in website. The
platform will leverage MERN stack (MongoDB, Express.js, React, and Node.js) to create a
user-friendly and efficient web application. The project will also study the existing
agriculture e-commerce platforms, their advantages, disadvantages, and limitations, and
propose an improved methodology to address these limitations. The project aims to
enhance transparency, efficiency, and sustainability in the agriculture industry by providing
a centralized platform for all agricultural needs. 

# How to Run the Project

## Prerequisites

- Run this cmd to Clone the repository

        git clone https://github.com/harshprajapati8347/AgriCom-eCommerce

- Download & Install [``NodeJs``](https://nodejs.org/en/download/)
        
        Open command prompt & run ``node --version`` to check if it is installed or not.

- Open [MongoDB Atlas](https://www.mongodb.com/)
            
        Create a new account & create a new cluster.
        Create a new database & add a new user.
        Whitelist your IP address.
        Create ".env" file & Copy the connection string and paste it in the ``.env`` file in the ``DATABASE`` variable in server folder.

- Create .env file in client folder and add the following variables:

        REACT_APP_API_URL=http://localhost:8000

- Create .env file in server folder and add the following variables:

        DATABASE = <Your MongoDB Connection String>
        PORT = 8000
        NODE_ENV = development

- Do the same in client and server folder:

        npm install
        npm start

- Open [``localhost:3000``](http://localhost:3000/) in your browser.

# Technologies Used

- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [React Router](https://reactrouter.com/)
- [Redux](https://redux.js.org/)
- [Multer](https://www.npmjs.com/package/multer)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
