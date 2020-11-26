import React, { createContext, useReducer, useEffect } from 'react';
import { BookReducer } from '../reducer/Bookreducer';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, dispatch] = useReducer( BookReducer, [], ()=>{
        const Data = localStorage.getItem('Books');
        return Data ? JSON.parse(Data) : ''
    });
    useEffect(()=>{
        localStorage.setItem('Books',JSON.stringify(books))
    },[books]);
    return ( 
        <BookContext.Provider value={{books, dispatch}}>
            {props.children}
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;