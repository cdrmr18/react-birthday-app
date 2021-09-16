import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {
  const [list, setList] = useState(data);
  return (
    <main> 
      <section className="container">
        <h3>5 Birthdays Today</h3>
        <List people={list} />
        <button onClick={()=>setList([])} >Clear All</button>
      </section>
    </main>
  )
}

export default App;
