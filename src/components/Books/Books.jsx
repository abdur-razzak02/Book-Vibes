import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('./booksData.json')
            .then(res => res.json())
        .then(data => setBooks(data))
    },[])

    return (
        <div className="container mx-auto">
            <h1 className="text-5xl font-bold text-center title mb-5">Books</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-5 lg:px-0">
            {
                books.map(book => <Book book={book} key={book.bookId}></Book>)
            }
            </div>
        </div>
    );
};

export default Books;