import React, { useState } from 'react';
// components to add
import Menu from './Menu'; 
import Categories from './Categories';
import items from './data';

function App() {
  const [menuItems, setItemsMenu] = useState(items);
  const [categories, setCategores] = useState([]);

  return <main>
    <section className="menu section">
      <div className="title">
        <h2>Our Menu</h2>
        <div className="underline"></div>
      </div>
      <Categories />
      <Menu items={menuItems}/>
    </section>
  </main>;
}

export default App;
