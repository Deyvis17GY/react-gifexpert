import React, { Fragment, useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GitGrid } from "./components/GitGrid";
function GifExpertApp() {
  const [categories, setCategories] = useState(["One Punch"]);

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((category) => (
          <GitGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
}

export default GifExpertApp;
