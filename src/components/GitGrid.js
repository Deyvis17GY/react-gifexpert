import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GitGridItem } from "./GitGridItem";

export const GitGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className="titulo animate__animated animate__fadeIn">{category}</h3>
      {loading && <p>Loading</p>}
      <div className="card-grid">
        {images.map((img) => (
          <GitGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
