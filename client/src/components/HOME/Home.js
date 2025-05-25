import React from 'react';
import './Home.css'; // Create a CSS file for styling
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="home">
            <section id='homesection'>
                <section id="visualizations">
                    <Link to="/DSA" className="content"><h2>Data Structures and Algorithms Visualizer</h2></Link>
                    <p>Explore various algorithms and data structures through interactive visualizations.</p>
                </section>

                <section id="programming">
                    <Link to="/programming" className="content"><h2>Programming Tutorials</h2></Link>
                    <p>Learn programming languages like C, Java, and Python with our resources.</p>
                </section>

                <section id="compiler">
                    <a href='https://onecompiler.com/' className="content" target='_blank'><h2>Online Compiler</h2></a>
                    <p>Try out your code in an online compiler with just a click.</p>
                </section>
            </section>
        </div>
    );
}

export default Home;
