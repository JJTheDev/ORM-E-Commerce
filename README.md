# ORM E-commerce Back End

## Description

This is a back-end application for an e-commerce site. This application uses Express.js API and Sequelize to interact with a MySQL database.

## Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory in the terminal.
3. Run `npm install` to install all dependencies.
4. Set up your own `.env` file in the root of the project using `.env.EXAMPLE` as a guide.
5. Run `npm run seed` to seed the database.
6. Run `npm start` to start the server.

## Usage

Once the server is running, you can use API testing tools like Insomnia Core to test the routes. The application has routes for creating, reading, updating, and deleting categories, products, and tags.

### Categories

- `GET /api/categories`: Get all categories.
- `GET /api/categories/:id`: Get a single category by its `id`.
- `POST /api/categories`: Add a new category.
- `PUT /api/categories/:id`: Update a category by its `id`.
- `DELETE /api/categories/:id`: Delete a category by its `id`.

### Products

- `GET /api/products`: Get all products.
- `GET /api/products/:id`: Get a single product by its `id`.
- `POST /api/products`: Add a new product.
- `PUT /api/products/:id`: Update a product by its `id`.
- `DELETE /api/products/:id`: Delete a product by its `id`.

### Tags

- `GET /api/tags`: Get all tags.
- `GET /api/tags/:id`: Get a single tag by its `id`.
- `POST /api/tags`: Add a new tag.
- `PUT /api/tags/:id`: Update a tag by its `id`.
- `DELETE /api/tags/:id`: Delete a tag by its `id`.

## Technologies Used


- Node.js
- Express.js
- MySQL2
- Sequelize
- dotenv

## License

This project is licensed under the terms of the MIT license.

## Contributing

If you would like to contribute, please fork the repository and make changes as you'd like. Pull requests are warmly welcome.

## Questions

If you have any questions about the repo, open an issue or contact me directly.
