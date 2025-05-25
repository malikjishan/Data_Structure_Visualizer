import React, { useState } from 'react';
// import './SortingVisualizer.css';
import './SortingVisualizer.css'


function RadixSortVisualizer() {
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

    const getDigit = (num, place) => Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;

    const digitCount = (num) => (num === 0 ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1);

    const mostDigits = (nums) => Math.max(...nums.map((num) => digitCount(num)));

    const radixSort = async () => {
        const arr = [...array];
        const maxDigitCount = mostDigits(arr);

        for (let k = 0; k < maxDigitCount; k++) {
            const buckets = Array.from({ length: 10 }, () => []);

            for (let i = 0; i < arr.length; i++) {
                const digit = getDigit(arr[i], k);
                buckets[digit].push(arr[i]);
                setHighlighted([arr[i]]);
                await new Promise((resolve) => setTimeout(resolve, 300)); // Animation delay
            }

            arr.length = 0;
            for (let i = 0; i < buckets.length; i++) {
                arr.push(...buckets[i]);
            }
            setArray([...arr]);
        }
        setHighlighted([]);
    };

    return (
        <div className="sort-visualizer">
            <section>                    
                <h3>Radix Sort Visualization</h3>
                <input
                    type="text"
                    placeholder="Enter numbers separated by commas"
                    value={inputValue}
                    onChange={handleChange}
                />
                <button onClick={generateArray}>Generate Array</button>
                <button onClick={radixSort}>Start Radix Sort</button>
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

export default RadixSortVisualizer;