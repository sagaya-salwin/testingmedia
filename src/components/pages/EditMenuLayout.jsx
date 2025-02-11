import React from 'react'
import './EditMenuLayout.css'
import { Link, Routes, Route } from 'react-router-dom'


const EditMenuLayout = ({id}) => {
  return (
    <>
    <div className='EditMenu'>
        <ul>
            <li><Link to={`/edit/${id}`}>Edit</Link></li>
            <li><Link to={`/delete/${id}`}>Delete</Link></li>
        </ul>
    </div>
  </>
  )
}

export default EditMenuLayout