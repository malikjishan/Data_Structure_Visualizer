import React, { useState } from 'react';
import './SortingVisualizer.css';

function HeapSortVisualizer() {
    const [array, setArray] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [highlighted, setHighlighted] = useState([]);

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const generateArray = () => {
        const newArray = inputValue.split(',').map(Number);
        setArray(newArray);
        setHighlighted([]);
    };

    const heapify = async (arr, length, i) => {
        let largest = i;
        const left = 2 * i + 1;
        const right = 2 * i + 2;

        if (left < length && arr[left] > arr[largest]) largest = left;
        if (right < length && arr[right] > arr[largest]) largest = right;

        if (largest !== i) {
            [arr[i], arr[largest]] = [arr[largest], arr[i]];
            setArray([...arr]);
            setHighlighted([i, largest]);
            await new Promise((resolve) => setTimeout(resolve, 500)); // Animation delay
            await heapify(arr, length, largest);
        }
    };

    const heapSort = async () => {
        const arr = [...array];
        const length = arr.length;

        for (let i = Math.floor(length / 2 - 1); i >= 0; i--) {
            await heapify(arr, length, i);
        }

        for (let i = length - 1; i >= 0; i--) {
            [arr[0], arr[i]] = [arr[i], arr[0]];
            setArray([...arr]);
            await new Promise((resolve) => setTimeout(resolve, 500)); // Animation delay
            await heapify(arr, i, 0);
        }

        setHighlighted([]);
    };

    return (
        <div className="sort-visualizer">
            <section>
                <h3>Heap Sort Visualization</h3>
                <input
                    type="text"
                    placeholder="Enter numbers separated by commas"
                    value={inputValue}
                    onChange={handleChange}
                />
                <button onClick={generateArray}>Generate Array</button>
                <button onClick={heapSort}>Start Heap Sort</button>
                <div className="array-container">
                    {array.map((value, index) => (
                        <div
                            key={index}
                            className={`array-bar ${highlighted.includes(index) ? 'highlighted' : ''}`}
                            style={{ height: `${value * 5}px` }}
                        >
                            {value}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default HeapSortVisualizer;