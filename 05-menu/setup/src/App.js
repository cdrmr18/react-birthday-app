import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const categoriesList = ['all', ...new Set(items.map((item) => item.category))];
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(categoriesList);

  const updateMenuItems = (category) => {
    if (category === 'all'){
      setMenuItems(items);
      return;
    }
    const newMenu = items.filter((item)=>item.category === category);
    setMenuItems(newMenu);
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} updateMenu={updateMenuItems} />
        <Menu items={menuItems}/>
      </section>
    </main>
  )
}

export default App;
