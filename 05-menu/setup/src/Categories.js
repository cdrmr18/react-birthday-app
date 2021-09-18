import React from 'react';

const Categories = ({categories, updateMenu}) => {
  return (
    <div className="btn-container">
      {categories.map((category)=>{
        return <button className="filter-btn" onClick={()=>updateMenu(category)}>{category}</button>
      })}
    </div>
  )
};

export default Categories;
