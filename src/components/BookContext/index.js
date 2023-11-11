import { createContext, useState } from "react";
import { BooksList, SEARCH_FIELDS } from "src/constants/constants";
import { useLocalStorage } from "./useLocalStorage";

const BookContext = createContext({});

function BookProvider({ children }) {
  const [books, saveBooks, loading, error] = useLocalStorage(
    "BOOKS",
    BooksList
  );
  const [searchValue, setSearchValue] = useState("");
  const [searchField, setSearchField] = useState(SEARCH_FIELDS[0]);
  const onSearch = (e) => {
    const text = e.target.value;
    setSearchValue(text);
  };
  const markBookAsRead = (id) => () => {
    const newBooks = books.map((book) => {
      if (book.id === id) {
        return {
          ...book,
          read_status: !book.read_status,
        };
      }
      return book;
    });
    saveBooks(newBooks);
  };
  const deleteBook = (id) => () => {
    const newBooks = books.filter((book) => book.id !== id);
    saveBooks(newBooks);
  };
  const searchedBooks = books.filter((book) =>
    book[searchField].toLowerCase().includes(searchValue.toLowerCase())
  );
  const readBooks = books.filter((book) => !!book.read_status).length;
  const totalBooks = books.length;
  //
  const contextValue = {
    loading,
    error,
    books,
    saveBooks,
    searchValue,
    setSearchValue,
    searchField,
    setSearchField,
    onSearch,
    markBookAsRead,
    deleteBook,
    searchedBooks,
    totalBooks,
    readBooks,
  };
  return (
    <BookContext.Provider value={{ ...contextValue }}>
      {children}
    </BookContext.Provider>
  );
}

export { BookContext, BookProvider };
