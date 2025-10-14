import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { BooksProvider } from "./context/BooksContext";
import Home from "./pages/Home";
import Course from "./pages/Course";
import './App.css';

function App() {
  return (
    <BooksProvider>
      <Router>
        <div className="App">
          {/* Menu de navegação */}
          <nav style={{
            backgroundColor: "#282c34",
            padding: "15px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
          }}>
            <div style={{
              maxWidth: "1200px",
              margin: "0 auto",
              display: "flex",
              gap: "20px"
            }}>
              <Link 
                to="/" 
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: "1.1em",
                  fontWeight: "bold",
                  padding: "8px 16px",
                  borderRadius: "4px",
                  transition: "background-color 0.3s"
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#3a3f49"}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = "transparent"}
              >
                📚 Bibliografia
              </Link>
              <Link 
                to="/course" 
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: "1.1em",
                  fontWeight: "bold",
                  padding: "8px 16px",
                  borderRadius: "4px",
                  transition: "background-color 0.3s"
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#3a3f49"}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = "transparent"}
              >
                🎓 Disciplinas
              </Link>
            </div>
          </nav>

          {/* Rotas */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/course" element={<Course />} />
          </Routes>
        </div>
      </Router>
    </BooksProvider>
  );
}

export default App;
