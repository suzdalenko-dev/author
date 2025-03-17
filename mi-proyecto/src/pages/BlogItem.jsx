import React from "react";
import { useParams } from "react-router-dom";

const BlogItem = () => {
  const { itemId } = useParams();

  return (
    <div>
      <h1>Artículo: {itemId} ✍</h1>
      <p>Detalles sobre el artículo {itemId}.</p>
    </div>
  );
};

export default BlogItem;
