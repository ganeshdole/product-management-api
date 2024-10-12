# Product Management API

This is a simple RESTful API for managing a list of products using Node.js, Express.js, and Sequelize ORM with PostgreSQL.

## Prerequisites

- Node.js (v14 or later)
- PostgreSQL (14)

## Installation

1. Clone the repository:
2. Install dependencies:
   ```
   npm install
   ```
3. Create a PostgreSQL database named `product_management`.
4. Copy the `.env.example` file to `.env` and update the database credentials:
5. Edit the `.env` file and update the following variables:
   ```
   DB_NAME=product_management
   DB_USER=your_username
   DB_PASSWORD=your_password
   DB_HOST=localhost
   DB_PORT=5432
   PORT=3000
   ```

## Running the API

1. Start the server:
   ```
   npm start
   ```
2. For development with auto-restart:
   ```
   npm run dev
   ```

The API will be available at `http://localhost:3000`.

## API Endpoints

- `POST /products` - Add a new product
- `GET /products` - Get a list of all products (with pagination and search)
- `GET /products/:id` - Get details of a single product by ID
- `PUT /products/:id` - Update an existing product
- `DELETE /products/:id` - Delete a product by ID

## Example Usage

### Adding a new product

```bash
curl -X POST -H "Content-Type: application/json" -d '{"name":"Smartphone", "price":499.99, "description":"Latest model", "category":"Electronics"}' http://localhost:3000/products
```

### Getting all products

```bash
curl http://localhost:3000/products
```

### Getting a single product

```bash
curl http://localhost:3000/products/1
```

### Updating a product

```bash
curl -X PUT -H "Content-Type: application/json" -d '{"price":449.99}' http://localhost:3000/products/1
```

### Deleting a product

```bash
curl -X DELETE http://localhost:3000/products/1
```

## Error Handling

The API includes error handling for invalid product IDs, missing required fields, and invalid data types. Appropriate HTTP status codes are returned for different error scenarios.

## Pagination and Search

The `GET /products` endpoint supports pagination and search functionality. Use the following query parameters:

- `page`: Page number (default: 1)
- `limit`: Number of items per page (default: 10)
- `search`: Search term for product name or category

Example:

```
GET /products?page=2&limit=20&search=electronics
```
