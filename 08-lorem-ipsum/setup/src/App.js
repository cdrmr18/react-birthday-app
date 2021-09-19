import React, { useState } from 'react';
import data from './data';

function App() {
  const [text, setText] = useState([]); 
  const [count, setCount] = useState(0);

  const handleCount = (e) => {
    setCount(e.target.value);
  }
  const handleText = (e) => {
     e.preventDefault();
    setText(data.slice(0,count));
  }

  return (
    <section className="section-center">
      <h3>TIRED OF BORING LOREM IPSUM?</h3>
      <form action="" className="lorem-form">
        <label htmlFor="amount">paragraphs:</label>
        <input type="number" value={count} name="amount" id="amount" onChange={handleCount}/>
        <button className="btn" onClick={handleText}>generate</button>
      </form>
      <article className="lorem-text">
        {text.map((paragrapgh, index)=>{
          if (count <= 0) {
            return;
          } else {
            return <p key={index}>{paragrapgh}</p>
          }
        })}
      </article>
    </section>
    )
}

export default App;
