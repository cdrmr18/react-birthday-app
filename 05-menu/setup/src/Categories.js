import React from 'react';

const Categories = ({categories, updateMenu}) => {
  return (
    <div className="btn-container">
      <button className="filter-btn" onClick={()=>updateMenu('all')}>All</button>
      {categories.map((category)=>{
        return <button className="filter-btn" onClick={()=>updateMenu(category)}>{category}</button>
      })}
    </div>
  )
};

export default Categories;
