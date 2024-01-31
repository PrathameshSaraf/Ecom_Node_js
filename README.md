# E-Commerce Node.js Project

This project is a simple eCommerce application built with Node.js and MongoDB Atlas.

## Project Structure

1. **Helper:**
   - Contains JWT (JSON Web Token) functionality.
   - Implements an error handler.

2. **Model:**
   - Includes models for product, user, order, and category.

3. **Routes:**
   - Product, user, order, and category routes.
   - Supports CRUD operations (GET, POST, GET:id, PUT, etc.).

4. **index.js:**
   - The main entry point of the application.

## Database Connection

1. Create a MongoDB Atlas account.
2. Configure the database connection in the `.env` file.

## Packages Used

- `bcryptjs`: For password hashing.
- `dotenv`: For managing environment variables.
- `express`: Web application framework.
- `express-jwt`: Middleware for verifying JWT.
- `jsonwebtoken`: Implementation of JSON Web Tokens.
- `mongoose`: MongoDB object modeling for Node.js.
- `morgan`: HTTP request logger middleware.
- `nodemon`: Development server for automatic restarts.
- `parser`: A parser package (please provide the correct package name).
- `prettier`: Code formatter.

## How to Run the Project

1. Install Node.js.
2. Set up the database connection in the `.env` file.
3. Install project dependencies: `npm install`.
4. Run the project: `npm start`.

## Testing

For testing API endpoints, use Postman.

---

Feel free to customize this README according to your project's specific details.
