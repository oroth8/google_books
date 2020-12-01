import React, { useEffect, useState } from "react";
import Results from "../components/Results";
import API from "../utils/API";

const Search = () => {
  const [value, setValue] = useState("");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    searchBook();
  }, []);

  const makeBook = (bookData) => {
    return {
      _id: bookData.id,
      title: bookData.volumeInfo.title,
      authors: bookData.volumeInfo.authors,
      description: bookData.volumeInfo.description,
      image: bookData.volumeInfo.imageLinks.thumbnail,
      link: bookData.volumeInfo.previewLink,
    };
  };

  const searchBook = (query) => {
    API.getBook(query)
      .then((res) =>
        setBooks(res.data.items.map((bookData) => makeBook(bookData)))
      )
      .catch((err) => console.error(err));
  };

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    searchBook(value);
  };

  return (
    <div>
      <div className="container">
        <form>
          <div className="form-group">
            <label htmlFor="search">
              <h2>Search for and save Books of Interest</h2>
            </label>
            <input
              onChange={handleInputChange}
              value={value}
              name="search"
              type="text"
              className="form-control"
              placeholder="Search a Book"
              id="search"
            />
            <button
              onClick={handleFormSubmit}
              className="btn btn-dark mt-3 mb-5"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="container">
        <h2>Results</h2>
        <Results books={books} />
      </div>
    </div>
  );
};

export default Search;
