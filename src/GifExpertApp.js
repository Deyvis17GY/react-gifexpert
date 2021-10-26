import React, { Fragment, useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GitGrid } from "./components/GitGrid";
function GifExpertApp() {
  const [categories, setCategories] = useState(["vue"]);

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      {categories.map((category, index) => (
        <GitGrid key={index} category={category} />
      ))}
    </>
  );
}

export default GifExpertApp;
