import React from 'react';

const Categories = ({categories, buttonClick}) => {

  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => buttonClick(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
