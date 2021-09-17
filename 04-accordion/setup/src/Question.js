import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({title, info}) => {
  const [hidden, setHidden] = useState('none');
  
  const handleHiddenEle = () => {
    if (hidden === 'none') {
      setHidden("block");
    } else {
      setHidden("none");
    }
  }
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={handleHiddenEle}>{AiOutlinePlus}</button>
      </header>
      <p style={{display: hidden}}>{info}</p>
    </article>
  )
};

export default Question;
