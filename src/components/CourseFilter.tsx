import React, { useContext, useState, useEffect } from "react";
import { BooksContext } from "../context/BooksContext";
import axios from "axios";

const CourseFilter: React.FC = () => {
  const { books, setBooks } = useContext(BooksContext);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [allBooks, setAllBooks] = useState<any[]>([]);

  // Carregar todos os livros na primeira renderização
  useEffect(() => {
    axios.get("/data/books.json").then((response) => {
      setAllBooks(response.data);
    });
  }, []);

  // Filtrar livros quando a disciplina selecionada mudar
  const handleCourseChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const course = e.target.value;
    setSelectedCourse(course);

    if (course === "") {
      // Se nenhuma disciplina for selecionada, mostrar todos os livros
      setBooks(allBooks);
    } else {
      // Filtrar livros pela disciplina selecionada
      const filteredBooks = allBooks.filter((book) => book.course === course);
      setBooks(filteredBooks);
    }
  };

  return (
    <div style={{ 
      padding: "20px", 
      backgroundColor: "#f0f0f0", 
      borderRadius: "5px",
      marginBottom: "20px"
    }}>
      <h2>Filtrar por Disciplina</h2>
      <select 
        value={selectedCourse}
        onChange={handleCourseChange}
        style={{
          padding: "10px",
          fontSize: "1em",
          width: "100%",
          maxWidth: "400px",
          borderRadius: "5px",
          border: "1px solid #ccc"
        }}
      >
        <option value="">Todas as disciplinas</option>
        {[...new Set(allBooks.map((b) => b.course))].sort().map((course) => (
          <option key={course} value={course}>
            {course}
          </option>
        ))}
      </select>
      {selectedCourse && (
        <p style={{ marginTop: "10px", color: "#555" }}>
          Exibindo livros de: <strong>{selectedCourse}</strong>
        </p>
      )}
    </div>
  );
};

export default CourseFilter;

