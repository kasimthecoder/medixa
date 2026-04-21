import React from "react";

const Category = async ({ params }) => {
  const { category } = await params;
  return <div>{category}</div>;
};

export default Category;
