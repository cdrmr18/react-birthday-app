import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [value, setValue] = useState('');
  console.log(value);
  return (
    <section className="section-center">
      <form action="
      " className="grocery-form">
        <h3>grocery bud</h3>
        <div className="form-control">
          <input 
          type="text" 
          className="grocery" 
          placeholder="e.g. eggs"
          value={value}
          onChange={(e)=>setValue(e.target.value)}
          />
          <button className="submit-btn">submit</button>
        </div>
      </form>
    </section>
  )
}

export default App
