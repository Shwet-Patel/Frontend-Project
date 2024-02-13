import React from "react";
import ReactDOM from "react-dom/client";

/*import files*/
import "./index.css";
import Book from "./Book";
import books from "./books";

const Booklist = () => {
  // const getBook = (id)=>{
  //   const book = books.find((book) => book.id === id);
  //   console.log(book);
  // }

  return (
    <>
    <h1 className="title">The Stormlight Archive</h1>
    <section className="booklist">
      {
        books.map((book) => {
          return <Book {...book} key = {book.id} /* getBook = {getBook} *//>;
        })
      }
    </section>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Booklist />);
