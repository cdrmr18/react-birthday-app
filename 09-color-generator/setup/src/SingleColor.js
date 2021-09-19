import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb, weight, index}) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(',');

  return (
    <artcle 
    className="single-color"
    style={{backgroundColor:`rgb(${bcg})`}}
    >

    </artcle>
)
};

export default SingleColor
