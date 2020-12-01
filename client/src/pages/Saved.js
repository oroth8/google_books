import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Results from "../components/Results";

const Saved = () => {
  const [savedBooks, setSavedBooks] = useState([]);

  useEffect(() => {
    API.savedBooks()
      .then((savedBooks) => setSavedBooks(savedBooks))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container">
      <h2>Saved books</h2>
      <Results books={savedBooks} />
    </div>
  );
};

export default Saved;
