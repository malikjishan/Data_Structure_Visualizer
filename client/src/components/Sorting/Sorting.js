import React from 'react'
import { Link } from 'react-router-dom';
import './Visualization.css'

const Sorting = () => {
    return (
        <div className='sorting'>
            <section>
                <h1>Sorting Algorithms</h1>
                <ul >
                    <li><Link to = "/bubblesort" className="content">Bubble Sort </Link></li>
                    <li><Link to = "/insertionsort" className="content">Insertion Sort </Link></li>
                    <li><Link to = "/quicksort" className="content">Quick Sort  </Link></li>
                    <li><Link to = "/mergesort" className="content">Merge Sort  </Link></li>
                    <li><Link to = "/selectionsort" className="content">Selection Sort  </Link></li>
                    <li><Link to = "/countingsort" className="content">Counting Sort  </Link></li>
                    <li><Link to = "/radixsort" className="content">Radix Sort  </Link></li>
                    <li><Link to = "/heapsort" className="content">Heap Sort  </Link></li>
                </ul>
            </section>
        </div>
    )
}

export default Sorting
