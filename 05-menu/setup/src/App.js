import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>

        <div className="btn-container">
          <button className="filter-btn">All</button>
          <button className="filter-btn">breaksfast</button>
          <button className="filter-btn">lunch</button>
          <button className="filter-btn">shakes</button>
        </div>

        <div className="section-center">
          {items.map((item)=>{
            return <Menu key={item.id} {...item} />
          })}
        </div>
      </section>
    </main>
  )
}

export default App;
