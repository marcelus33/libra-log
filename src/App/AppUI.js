import React, { useContext } from "react";
import { BookContext } from "src/components/BookContext";
import { BookCounter } from "src/components/BookCounter";
import { BookItem } from "src/components/BookItem";
import { BookList } from "src/components/BookList";
import { BookLoading } from "src/components/BookLoading";
import { SearchInput } from "src/components/SearchInput";
import { SearchOptions } from "src/components/SearchOptions";
import "./App.css";

function AppUI() {
  const {
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
  } = useContext(BookContext);
  //
  return (
    <div className="w-full h-full flex flex-col bg-slate-300 p-8">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="col-span-1 md:col-span-8 md:col-start-3 flex justify-between items-center gap-2">
          <SearchInput placeholder="Search..." onChange={onSearch} />
          <SearchOptions
            searchField={searchField}
            setSearchField={setSearchField}
          />
        </div>
        <div className="col-span-1 md:col-span-8 md:col-start-3">
          <BookCounter total={totalBooks} read={readBooks} />
        </div>
        {/* sda */}
        <div className="col-span-1 md:col-span-8 md:col-start-3">
          <BookList>
            {!!loading && (
              <>
                <BookLoading />
                <BookLoading />
                <BookLoading />
              </>
            )}
            {!loading &&
              searchedBooks?.length > 0 &&
              searchedBooks?.map((book, bindex) => (
                <BookItem
                  key={`book-${bindex}`}
                  {...book}
                  onMarkAsRead={markBookAsRead(book.id)}
                  onDelete={deleteBook(book.id)}
                />
              ))}

            {!loading && searchedBooks?.length < 1 && (
              <div className="flex flex-col justify-center items-center gap-2 h-full bg-white rounded-md p-4">
                <span className="text-3xl">📚</span>
                <span className="text-xl italic">No books found</span>
              </div>
            )}
          </BookList>
        </div>
      </div>
    </div>
  );
}

export default AppUI;
