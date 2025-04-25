

# Books REST API Documentation

## Introduction

The Books REST API is a simple web service for managing a collection of books. The API allows users to perform CRUD operations (Create, Read, Update, Delete) on books in a MongoDB database.

## Table of Contents

- [Tech Stack](#tech-stack)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
  - [GET /books](#get-books)
  - [GET /books/:id](#get-book-by-id)
  - [POST /books](#create-book)
  - [PUT /books/:id](#update-book)
  - [DELETE /books/:id](#delete-book)
- [Postman Collection](#postman-collection)
- [Example Response](#example-response)
- [Testing](#testing)

## Tech Stack

- Node.js: Backend server
- Express.js: Web framework for building the API
- MongoDB: Database for storing book data
- Mongoose: ODM (Object Data Modeling) for MongoDB and Node.js
- Jest: Testing framework for unit and integration testing

## Setup and Installation

### Prerequisites

- Node.js installed (version 14 or higher)
- MongoDB installed or use MongoDB Atlas for a cloud database
- A code editor such as [Visual Studio Code](https://code.visualstudio.com/)
- Npm install cors express mongoose express dotenv 

### Installation Steps

1. Clone the repository:

  
   git clone https://github.com/Saichandu-allamgari/Books-RestApi.git
  

2. Navigate to the project folder:

   
   cd Books-RestApi
   

3. Install the required dependencies:

   
   npm install
   

4. Configure the MongoDB connection in `.env` (if using environment variables).

    MONGO_URI = "your mongodb connection"
  

5. Start the server:

   
   npm start
   

6. The API will be running on `http://localhost:5000` by default.

## Usage

Once the server is running, you can interact with the API using a tool like [Postman](https://www.postman.com/) or cURL. The API supports various HTTP methods to manage books.


###Sample data for usage


    {
        "_id": "680b157464e415852fb5f0ee",
        "title": "1984",
        "author": "George Orwell",
        "publishedDate": "1949-06-08T00:00:00.000Z",
        "genre": "Dystopian",
        "createdAt": "2025-04-25T04:54:12.324Z",
        "updatedAt": "2025-04-25T04:54:12.324Z",
        "__v": 0
    },
    {
        "_id": "680b158364e415852fb5f0f0",
        "title": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "publishedDate": "1925-04-10T00:00:00.000Z",
        "genre": "Classic",
        "createdAt": "2025-04-25T04:54:27.591Z",
        "updatedAt": "2025-04-25T04:54:27.591Z",
        "__v": 0
    },
    {
        "_id": "680b158d64e415852fb5f0f2",
        "title": "The Hobbit",
        "author": "J.R.R. Tolkien",
        "publishedDate": "1937-09-21T00:00:00.000Z",
        "genre": "Fantasy",
        "createdAt": "2025-04-25T04:54:37.134Z",
        "updatedAt": "2025-04-25T04:54:37.134Z",
        "__v": 0
    },
    {
        "_id": "680b159564e415852fb5f0f4",
        "title": "The Catcher in the Rye",
        "author": "J.D. Salinger",
        "publishedDate": "1951-07-16T00:00:00.000Z",
        "genre": "Coming-of-Age",
        "createdAt": "2025-04-25T04:54:45.212Z",
        "updatedAt": "2025-04-25T04:54:45.212Z",
        "__v": 0
    },
    {
        "_id": "680b166b64e415852fb5f0fd",
        "title": "The Alchemist (Updated)",
        "author": "Paulo Coelho",
        "publishedDate": "1988-04-15T00:00:00.000Z",
        "genre": "Philosophical Fiction Book",
        "createdAt": "2025-04-25T04:58:19.884Z",
        "updatedAt": "2025-04-25T04:58:19.884Z",
        "__v": 0
    }




### API Endpoints

#### 1. `GET /books`

Description: Fetch all books in the database.

- Response: Returns an array of all books.

Example Request:


GET http://localhost:5000/books


Example Response:

```json
[
    {
        "_id": "680b157464e415852fb5f0ee",
        "title": "1984",
        "author": "George Orwell",
        "publishedDate": "1949-06-08T00:00:00.000Z",
        "genre": "Dystopian",
        "createdAt": "2025-04-25T04:54:12.324Z",
        "updatedAt": "2025-04-25T04:54:12.324Z",
        "__v": 0
    },
    {
        "_id": "680b158364e415852fb5f0f0",
        "title": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "publishedDate": "1925-04-10T00:00:00.000Z",
        "genre": "Classic",
        "createdAt": "2025-04-25T04:54:27.591Z",
        "updatedAt": "2025-04-25T04:54:27.591Z",
        "__v": 0
    }
]
```

#### 2. `GET /books/:id`

Description: Fetch a specific book by its ID.

Example Request:


GET http://localhost:5000/books/680b157464e415852fb5f0ee


Example Response:

```json
{
    "_id": "680b157464e415852fb5f0ee",
    "title": "1984",
    "author": "George Orwell",
    "publishedDate": "1949-06-08T00:00:00.000Z",
    "genre": "Dystopian",
    "createdAt": "2025-04-25T04:54:12.324Z",
    "updatedAt": "2025-04-25T04:54:12.324Z",
    "__v": 0
}
```

#### 3. `POST /books`

Description: Create a new book.

Example Request:

POST http://localhost:5000/books


Request Body:

```json
{
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "publishedDate": "1960-07-11T00:00:00.000Z",
    "genre": "Fiction"
}
```

Example Response:

```json
{
    "_id": "680b16f464e415852fb5f0fe",
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "publishedDate": "1960-07-11T00:00:00.000Z",
    "genre": "Fiction",
    "createdAt": "2025-04-25T05:00:00.000Z",
    "updatedAt": "2025-04-25T05:00:00.000Z",
    "__v": 0
}
```

#### 4. `PUT /books/:id`

Description: Update an existing book by its ID.

Example Request:

PUT http://localhost:5000/books/680b157464e415852fb5f0ee


Request Body:

```json
{
    "title": "1984 (Updated)",
    "author": "George Orwell",
    "publishedDate": "1949-06-08T00:00:00.000Z",
    "genre": "Dystopian"
}
```

Example Response:

```json
{
    "_id": "680b157464e415852fb5f0ee",
    "title": "1984 (Updated)",
    "author": "George Orwell",
    "publishedDate": "1949-06-08T00:00:00.000Z",
    "genre": "Dystopian",
    "createdAt": "2025-04-25T04:54:12.324Z",
    "updatedAt": "2025-04-25T05:05:12.324Z",
    "__v": 0
}
```

#### 5. `DELETE /books/:id`

Description: Delete a book by its ID.

Example Request:


DELETE http://localhost:5000/books/680b157464e415852fb5f0ee


Example Response:

```json
{
    "message": "Book deleted successfully"
}
```

## Postman Collection

You can download the [Postman collection](https://www.postman.com/) to test the endpoints directly.

Steps to import the Postman collection:

1. Open Postman.
2. Click on `Import` in the top left.
3. Paste the collection JSON or import the file directly.

## Example Response

Here’s an example response of a `GET /books` request:

```json
[
    {
        "_id": "680b157464e415852fb5f0ee",
        "title": "1984",
        "author": "George Orwell",
        "publishedDate": "1949-06-08T00:00:00.000Z",
        "genre": "Dystopian",
        "createdAt": "2025-04-25T04:54:12.324Z",
        "updatedAt": "2025-04-25T04:54:12.324Z",
        "__v": 0
    },
    {
        "_id": "680b158364e415852fb5f0f0",
        "title": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "publishedDate": "1925-04-10T00:00:00.000Z",
        "genre": "Classic",
        "createdAt": "2025-04-25T04:54:27.591Z",
        "updatedAt": "2025-04-25T04:54:27.591Z",
        "__v": 0
    }
]
```

## Testing

Run the tests to ensure everything is working:


npm test


This will run the Jest testing suite and output results to the terminal.
