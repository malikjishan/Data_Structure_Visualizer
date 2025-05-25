import React from 'react'
import { Link } from 'react-router-dom'
import './Visualization.css'

const PrommingLanguage = () => {
  return (
    <div className='language'>
      <section>
        <ul>
          <h1>Programming Tutorials</h1>
          <li><Link to= "/c" className="content">C Language</Link></li>
          <li><Link to= "/java" className="content">Java Language</Link></li>
          <li><Link to = "/python" className="content">Python Language</Link></li>
        </ul>
      </section>
    </div>
  )
}

export default PrommingLanguage
