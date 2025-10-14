import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { Book } from "../types";

interface BooksContextType {
  books: Book[];
  setBooks: React.Dispatch<React.SetStateAction<Book[]>>;
}

export const BooksContext = createContext<BooksContextType>({
  books: [],
  setBooks: () => {},
});

export const BooksProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    axios.get("/data/books.json").then((response) => setBooks(response.data));
  }, []);

  return (
    <BooksContext.Provider value={{ books, setBooks }}>
      {children}
    </BooksContext.Provider>
  );
};

