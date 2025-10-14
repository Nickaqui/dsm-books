import React, { useContext } from "react";
import { BooksContext } from "../context/BooksContext";

const BookList: React.FC = () => {
  const { books } = useContext(BooksContext);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Lista de Livros</h2>
      {books.length === 0 ? (
        <p>Nenhum livro encontrado.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {books.map((book, index) => (
            <li key={index} style={{ 
              marginBottom: "15px", 
              padding: "15px", 
              border: "1px solid #ddd", 
              borderRadius: "5px",
              backgroundColor: "#f9f9f9"
            }}>
              <strong style={{ fontSize: "1.1em", color: "#333" }}>{book.title}</strong><br />
              <span style={{ color: "#666" }}>Autor: {book.author}</span><br />
              <span style={{ color: "#666" }}>Disciplina: {book.course}</span><br />
              <span style={{ color: "#666" }}>Editora: {book.publisher} ({book.year})</span><br />
              <span style={{ color: "#666" }}>Semestre: {book.semester}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookList;

