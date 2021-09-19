import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [name, setName] = useState('');
  const [alert, setAlert] = useState({});
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);


  const handleSubmit = (e) => {
    e.prventDefault();
    const newItem = value;
    setList([...list, newItem]);
    setValue('');
  }
  useEffect(()=>{
    console.log('effect');
  },[])
  return (
    <section className="section-center">
      <form action="
      " className="grocery-form" onSubmit={handleSubmit}>
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
      {list.length > 0 && <List list={list} />}
    </section>
  )
}

export default App
