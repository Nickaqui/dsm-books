import React from "react";
import BookList from "../components/BookList";
import CourseFilter from "../components/CourseFilter";

const Home: React.FC = () => {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
      <h1 style={{ color: "#333", textAlign: "center" }}>Bibliografia DSM</h1>
      <CourseFilter />
      <BookList />
    </div>
  );
};

export default Home;

