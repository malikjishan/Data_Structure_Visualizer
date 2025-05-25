import React from 'react'
import { Link } from 'react-router-dom';
import './Searching.css'

const Searching = () => {
  return (
    <div className='searching'>
      <section>
                <h1>Searching Algorithms</h1>
                <ul >
                    <li><Link to = "/linerSearch" className="content">Linear Search </Link></li>
                    <li><Link to = "/binarySearch" className="content">Binary Search </Link></li>
                </ul>
            </section>
    </div>
  )
}

export default Searching
