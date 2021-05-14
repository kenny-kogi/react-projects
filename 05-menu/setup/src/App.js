import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const categoryList = () => {
    const new_category = ["all", ...new Set(items.map(item => item.category))]
    return new_category;
}

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(categoryList);
  

const buttonClick = (category) => {
  if (category === 'all') {
    setMenuItems(items);
    return;
  }
  const newItems = items.filter((item) => item.category === category);
  setMenuItems(newItems);
};


  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} buttonClick = {buttonClick}/>
        <Menu menu={menuItems} />
      </section>
    </main>
  );
}

export default App;
