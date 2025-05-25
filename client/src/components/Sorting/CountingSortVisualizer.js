import React, { useState } from 'react';
import './SortingVisualizer.css';

function CountingSortVisualizer() {
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

    const countingSort = async () => {
        const arr = [...array];
        const max = Math.max(...arr);
        const count = new Array(max + 1).fill(0);

        for (let i = 0; i < arr.length; i++) {
            count[arr[i]]++;
        }

        let sortedIndex = 0;
        for (let i = 0; i < count.length; i++) {
            while (count[i] > 0) {
                arr[sortedIndex] = i;
                sortedIndex++;
                count[i]--;
                setHighlighted([i]);
                setArray([...arr]);
                await new Promise((resolve) => setTimeout(resolve, 500)); // Animation delay
            }
        }
        setHighlighted([]);
    };

    return (
        <div className="sort-visualizer">
            <section>
                <h3>Counting Sort Visualization</h3>
                <input
                    type="text"
                    placeholder="Enter numbers separated by commas"
                    value={inputValue}
                    onChange={handleChange}
                />
                <button onClick={generateArray}>Generate Array</button>
                <button onClick={countingSort}>Start Counting Sort</button>
                <div className="array-container">
                    {array.map((value, index) => (
                        <div
                            key={index}
                            className={`array-bar ${highlighted.includes(value) ? 'highlighted' : ''}`}
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

export default CountingSortVisualizer;