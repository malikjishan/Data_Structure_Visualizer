import React from 'react'
import { Link } from 'react-router-dom';
// import './DSA.css'
import './Visualization.css'

const DSA = () => {
  return (
    <div className='backgrounddsa'>
      <section id='dsavisual'>
        <h1>Data Structures and Algorithms</h1>
        <ul >
          <li><Link to = "/sorting" className="content">Sorting Algorithms</Link></li>
          <li><Link to = "/searching" className="content">Searching Algorithms</Link></li>
          <li><Link to = "/stack" className="content">Stack Data Structures</Link></li>
          <li><Link to = "/queue" className="content">Queue Data Structures</Link></li>
          <li><Link to = "/linkedList" className="content">LinkedList Data Structures</Link></li>
          <li><Link to = "/tree" className="content">Tree Data Structures</Link></li>
          <li><Link to = "/graph" className="content">Graph Data Structures</Link></li>
        </ul>
      </section>
    </div>
  ) 
}

export default DSA