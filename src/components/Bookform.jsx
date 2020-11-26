import React,{useContext, useState} from 'react';
import { BookContext } from '../context/BookContext';

const NewBookForm = () => {
    const {dispatch} = useContext(BookContext);
    const [title, seTitle] = useState('');
    const [author, setAuthor] = useState('');
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(title && author){
        dispatch({type: "ADD_BOOK", book:{ title, author}})
        seTitle('');
        setAuthor('');
        }
    }
    return ( 
        <form onClick={handleSubmit}>
            <input type="text" placeholder="Book Title" required value={title} onChange={(e)=>seTitle(e.target.value)}/>
            <input type="text" placeholder="Author of the book" required value={author} onChange={(e)=>setAuthor(e.target.value)}/>
            <input type="submit" value="Add Book"/>
        </form>
     );
}
 
export default NewBookForm;

