import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div>
      <h1>Blog 📚</h1>
      <p>Lista de artículos:</p>
      <ul>
        <li><Link to="/blog/item1">Artículo 1</Link></li>
        <li><Link to="/blog/item2">Artículo 2</Link></li>
      </ul>
    </div>
  );
};

export default Blog;
