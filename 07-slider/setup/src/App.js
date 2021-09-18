import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [value, setValue] = useState(0);

  const increaseValue = () => {
    if (value === data.length - 1) {
      setValue(0);
    } else {
      setValue(value + 1);
    }
  }

  const decreaseValue = () => {
    if (value === 0) {
      setValue(data.length - 1);
    } else {
      setValue(value - 1);
    }
  }
  const {image, name, title, quote} = data[value]
  return (
    <section className="section">
      <div className="title">
        <h2><span>/</span>reviews</h2>
      </div>
      <div className="section-center">
        <article className="activeSlide">
          <img src={image} alt={name} className="person-img" />
          <h4>{name}</h4>
          <p className="title">{title}</p>
          <p className="text">{quote}</p>
          <FaQuoteRight className="icon" />
        </article>
        {/* <article className="nextSlide"></article>
        <article className="nextSlide"></article>
        <article className="lastSlide"></article> */}
        <button className="prev" onClick={decreaseValue}><FiChevronLeft /></button>
        <button className="next" onClick={increaseValue}><FiChevronRight /></button>
      </div>
    </section>
  )
}

export default App;
