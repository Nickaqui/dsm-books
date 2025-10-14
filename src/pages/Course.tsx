import React, { useContext } from "react";
import { BooksContext } from "../context/BooksContext";

const Course: React.FC = () => {
  const { books } = useContext(BooksContext);
  
  // Extrair disciplinas únicas dos livros
  const uniqueCourses = [...new Set(books.map((book) => book.course))].sort();
  
  // Agrupar livros por disciplina
  const courseGroups: { [key: string]: any[] } = {};
  books.forEach((book) => {
    if (!courseGroups[book.course]) {
      courseGroups[book.course] = [];
    }
    courseGroups[book.course].push(book);
  });

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
      <h1 style={{ color: "#333", textAlign: "center", marginBottom: "30px" }}>
        Disciplinas do Curso DSM
      </h1>
      
      {uniqueCourses.length === 0 ? (
        <p style={{ textAlign: "center", color: "#666" }}>
          Nenhuma disciplina encontrada.
        </p>
      ) : (
        <div>
          <p style={{ textAlign: "center", color: "#666", marginBottom: "20px" }}>
            Total de disciplinas: <strong>{uniqueCourses.length}</strong>
          </p>
          
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "20px" 
          }}>
            {uniqueCourses.map((course) => (
              <div 
                key={course} 
                style={{
                  padding: "20px",
                  backgroundColor: "#f9f9f9",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
                }}
              >
                <h3 style={{ 
                  color: "#0066cc", 
                  marginBottom: "10px",
                  fontSize: "1.1em"
                }}>
                  {course}
                </h3>
                <p style={{ color: "#666", margin: 0 }}>
                  <strong>{courseGroups[course].length}</strong> livro(s) de referência
                </p>
                <p style={{ color: "#999", margin: "5px 0 0 0", fontSize: "0.9em" }}>
                  Semestre: {courseGroups[course][0].semester}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Course;

