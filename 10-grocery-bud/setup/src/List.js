import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({list}) => {
  console.log(list);
  return (
    <div className="grocery-container">{list}</div>
  )
}

export default List
