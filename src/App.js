import React from 'react';
import NewBookForm from './components/Bookform';
import Booklist from './components/Booklist';
import Navbar from './components/Navbar';
import BookContextProvider from './context/BookContext';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <Booklist />
        <NewBookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
