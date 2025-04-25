const Book = require('../models/Book');

exports.getAllBooks = async (req, res, next) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (err) {
        next(err);
    }
};

exports.getBookById = async (req, res, next) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) return res.status(404).json({ message: "Book not found" });
        res.status(200).json(book);
    } catch (err) {
        next(err);
    }
};

exports.createBook = async (req, res, next) => {
    try {
        const { title, author, publishedDate, genre } = req.body;
        if (!title || !author || !publishedDate || !genre) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const newBook = new Book({ title, author, publishedDate, genre });
        const savedBook = await newBook.save();
        res.status(201).json(savedBook);
    } catch (err) {
        next(err);
    }
};

exports.updateBook = async (req, res, next) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!book){ return res.status(404).json({ message: "Book not found" });}
        res.status(200).json(book);
    } catch (err) {
        next(err);
    }
};

exports.deleteBook = async (req, res, next) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        if (!book) return res.status(404).json({ message: "Book not found" });
        res.status(200).json({ message: "Book deleted successfully" });
    } catch (err) {
        next(err);
    }
};
