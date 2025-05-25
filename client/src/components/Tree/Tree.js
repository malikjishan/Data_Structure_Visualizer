import React from 'react'
import { Link } from 'react-router-dom'
import './Visualization.css'

const Tree = () => {
  return (
    <div className='tree-visualizer'>
        <section>
        <h1>Sorting Algorithms</h1>
                <ul >
                    <li><Link to = "/binaryTree" className="content">Binary Tree </Link></li>
                    {/* <li><Link to = "/insertionsort" className="content">Binary Search Tree </Link></li>
                    <li><Link to = "/mergesort" className="content">AVL Tree  </Link></li>
                    <li><Link to = "/quicksort" className="content">B Tree  </Link></li> */}
                </ul>
        </section>
      
    </div>
  )
}

export default Tree;
