import React, { useEffect, useState } from "react";
import axios from "axios";

const Book = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000")
            .then(res => {
                setBooks(res.data);
            })
           .catch(err => {
                console.log(err);
            });
    }, []);
    const handelDelete = (id) => {
        axios.delete(`http://localhost:5000/delete/`+id)
            .then(res => window.location.reload())
            .catch(err => console.log(err));
    };

    return (
        <div className="container mt-5">
            <Link to="create" classname="btn btn -success">  Create Book </Link>
            {books && books.length !== 0 ? (
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">book_id</th>
                            <th scope="col">title</th>
                            <th scope="col">publisher</th>
                            <th scope="col">publication_year</th>
                            <th scope="col">isbn</th>
                            <th scope="col">Handle</th>
                            <th scope="col">description</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map((book, index) => (
                            <tr key={book.book_id ?? index}>
                                <td>{index + 1}</td>
                                <td>{book.book_id}</td>
                                <td>{book.title}</td>
                                <td>{book.publisher}</td>
                                <td>{book.publication_year}</td>
                                <td>{book.isbn}</td>
                                <td>{/* actions */}</td>
                                <td>{book.description}</td>
                                <td>
                                    <Link to={'/update/${book.id}'} type="button"classname="btn btn-info btn-sm me-2">Update</Link>
                                    <button type="button" onclick={() =>handelDelete(book.id)}classname="btn btn-danger btn-sm">Delete</button>
                                </td>            
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <h2>No Records</h2>
            )}
        </div>
    );
};

export default Book;