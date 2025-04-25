

// const request = require('supertest');
// const mongoose = require('mongoose');
// const app = require('../server'); // adjust this path if needed

// beforeAll(async () => {
//   await mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });
// });

// afterAll(async () => {
//   await mongoose.connection.close();
// });

// describe("Books API", () => {
//   it("GET /books should return an array", async () => {
//     const res = await request(app).get("/books");
//     expect(res.statusCode).toEqual(200);
//     expect(Array.isArray(res.body)).toBe(true);
//   });
// });



const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../server'); // adjust this path if needed
const Book = require('../models/Book'); // Make sure this path is correct for your book model

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe("Books API", () => {
  
  // Test GET /books
  it("GET /books should return an array", async () => {
    const res = await request(app).get("/books");
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  // Test POST /books
  it("POST /books should create a new book", async () => {
    const newBook = {
      title: "New Book",
      author: "Author A",
      year: 2021,
      publishedDate: new Date(),
      genre: "Fiction",
     
    };

    const res = await request(app).post("/books").send(newBook);
    expect(res.statusCode).toEqual(201);
    expect(res.body.title).toBe("New Book");
  });

  // Test PUT /books/:id
  it("PUT /books/:id should update an existing book", async () => {
    // First, create a book to update
    const newBook = {
      title: "Original Title",
      author: "Author A",
      year: 2020,
      publishedDate: new Date(),
      genre: "Fiction",
    
    };

    const createRes = await request(app).post("/books").send(newBook);
    const bookId = createRes.body._id;

    // Update the book
    const updatedData = {
      title: "Updated Title",
      author: "Author A",
      year: 2021,
      publishedDate: new Date(),
      genre: "Fiction",
     
    };

    const res = await request(app).put(`/books/${bookId}`).send(updatedData);
    expect(res.statusCode).toBe(200);
    expect(res.body.title).toBe("Updated Title");
  });

  // Test DELETE /books/:id
  it("DELETE /books/:id should delete a book", async () => {
    // Create a book to delete
    const bookToDelete = {
      title: "To Be Deleted",
      author: "Author B",
      year: 2022,
      publishedDate: new Date(),
      genre: "Thriller",
    };

    const createRes = await request(app).post("/books").send(bookToDelete);
    const bookId = createRes.body._id;

    // Delete the book
    const res = await request(app).delete(`/books/${bookId}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Book deleted successfully");
  });

});


