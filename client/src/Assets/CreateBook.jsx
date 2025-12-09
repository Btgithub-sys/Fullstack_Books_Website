import React from "react";

const CreateBook = () => {
    const [values, setValues] = React.useState({
        book_id: "",
        title: "",
        publisher: "",
        publication_year: "",
        isbn: "",
        description: "",
    });
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/create", values)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });

        console.log(values);
    };

    return (
        <div className="d-flex flex-column align-items-center mt-3">
           <h1>Add a Book</h1>
            <form className="w-50" onSubmit={handleSubmit}> 
                <div className="mb-3 mt-3">
                    <label htmlFor="book_id" className="form-label">book_id:</label>                   
                    <input
                        type="number"
                        className="form-control"
                        id="book_id"
                        placeholder="Enter book id number"
                        name="book_id"
                        value={values.book_id}
                        onChange={(e) => setValues({ ...values, book_id: e.target.value })}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        placeholder="Enter Book Title"
                        name="title"
                        value={values.title}
                        onChange={(e) => setValues({ ...values, title: e.target.value })}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="publisher" className="form-label">Publisher:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="publisher"
                        placeholder="Enter Publisher's name"
                        name="publisher"
                        value={values.publisher}
                        onChange={(e) => setValues({ ...values, publisher: e.target.value })}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="publication_year" className="form-label">Publication Year:</label>
                    <input
                        type="number"
                        className="form-control"
                        id="publication_year"
                        placeholder="Enter Publication Year"
                        name="publication_year"
                        value={values.publication_year}
                        onChange={(e) => setValues({ ...values, publication_year: e.target.value })}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="isbn" className="form-label">ISBN:</label>
                    <input
                        type="number"
                        className="form-control"
                        id="isbn"
                        placeholder="Enter ISBN number"
                        name="isbn"
                        value={values.isbn}
                        onChange={(e) => setValues({ ...values, isbn: e.target.value })}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="description"
                        placeholder="Enter Book Description"
                        name="description"
                        value={values.description}
                        onChange={(e) => setValues({ ...values, description: e.target.value })}
                    />
                </div>  

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
    )
};

export default CreateBook;