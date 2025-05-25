import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route, createBrowserRouter } from 'react-router-dom';
import './App.css'
import Home from './components/HOME/Home';

// DSA
import DSA from './components/HOME/DSA'

// PROGRAMMING
import PrommingLanguage from './components/Programming/PrommingLanguage';
import CProgramming from './components/Programming/CProgramming';
import JavaProgramming from './components/Programming/JavaProgramming';
import PythonProgramming from './components/Programming/PythonProgramming';

// UNDER DSA
// SORTING
import Sorting from './components/Sorting/Sorting';
import BubbleSortVisualizer from './components/Sorting/BubbleSortVisualizer';
import InsertionSortVisualizer from './components/Sorting/InsertionSortVisualizer';
import QuickSortVisualizer from './components/Sorting/QuickSortVisualizer';
import MergeSortVisualizer from './components/Sorting/MergeSortVisualizer';
import SelectionSortVisualizer from './components/Sorting/SelectionSortVisualizer';
import CountingSortVisualizer from './components/Sorting/CountingSortVisualizer';
import RadixSortVisualizer from './components/Sorting/RadixSortVisualizer';
import HeapSortVisualizer from './components/Sorting/HeapSortVisualizer';

// SEARCHING
import Searching from './components/Searching/Searching';
import LinearSearchVisualizer from './components/Searching/LinearSearchVisualizer';
import BinarySearchVisualizer from './components/Searching/BinarySearchVisualizer';

// STACK/QUEUE/LINKEDLIST
import StackVisualizer from './components/Stack/StackVisualizer';
import QueueVisualizer from './components/Queue/QueueVisualizer';
import LinkedListVisualizer from './components/LinkedList/LinkedListVisualizer';

// TREE
import Tree from './components/Tree/Tree';
import BinaryTreeVisualizer from './components/Tree/BinaryTreeVisualizer';

// GRAPH
import GraphVisualizer from './components/Graph/GraphVisualizer';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
function App() {
    return (
        <Router>
            <Header />
          
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/DSA' element={<DSA />} />
                <Route path="/sorting" element={<Sorting />} />
                <Route path="/tree" element={<Tree/>} />
                <Route path="/bubblesort" element={<BubbleSortVisualizer/>} />
                <Route path="/insertionsort" element={<InsertionSortVisualizer/>} />
                <Route path="/quicksort" element={<QuickSortVisualizer/>} />
                <Route path="/mergesort" element={<MergeSortVisualizer/>} />
                <Route path="/selectionsort" element={<SelectionSortVisualizer/>} />
                <Route path="/countingsort" element={<CountingSortVisualizer/>} />
                <Route path="/radixsort" element={<RadixSortVisualizer/>} />
                <Route path="/heapsort" element={<HeapSortVisualizer/>} />

                
                <Route path="/searching" Component={Searching} />
                <Route path="/binarySearch" Component={BinarySearchVisualizer} />
                <Route path="/linerSearch" Component={LinearSearchVisualizer} />

                <Route path="/stack" Component={StackVisualizer} />
                <Route path="/queue" Component={QueueVisualizer} />
                <Route path="linkedList" Component={LinkedListVisualizer} />

                <Route path="/tree" Component={Tree} />
                <Route path="/binaryTree" Component={BinaryTreeVisualizer}/>
                <Route path="/graph" Component={GraphVisualizer} />
                <Route path="/programming" Component={PrommingLanguage} />
                <Route path="/c" Component={CProgramming} />
                <Route path="/java" Component={JavaProgramming} />
                <Route path="/python" Component={PythonProgramming} />
                <Route path="/signup" Component={Signup} />
                <Route path="/login"  Component={Login} />
            </Routes>
            <Footer />
        </Router>

    );
}

export default App;