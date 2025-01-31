import React, { useContext } from 'react';
import {BookContext} from "../context/BookContext";
import Bookdetails from "./Bookdetails";

const Booklist = () =>{
    const {books} = useContext(BookContext);
    return books.length ? (
        <div className="book-list">
          <ul>
            {books.map(book => {
              return ( <Bookdetails book={book} key={book.id} /> );
            })}
          </ul>
        </div>
      ) : (
        <div className="empty">No books to read. Hello free time :).</div>
      );
};
 
export default Booklist;