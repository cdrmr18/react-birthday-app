import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10)
      console.log(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  }
  return (
   <>
      <section className="container">
        <h3>color generator</h3>
        <form action="" onSubmit={handleSubmit}>
          <input 
          type="text" 
          value={color} 
          placeholder="#f15025" 
          onChange={(e)=>setColor(e.target.value)}
          className={`${error? 'error' : null}`} />
          <button className="btn" type="submit">Submit</button>
        </form>
      </section>
      <section className="colors">
        <article className="color false" style={{backgroundColor:"rgb(255, 255, 255)"}}>
          <p className="percent-value">List</p>
          <p className="color-value"></p>
        </article>
      </section>
   </>
  )
}

export default App
