import React, { useState } from 'react';
import './new.css';

export default function App() {
  const [message, setMessage] = useState('');

  const skills = ['HTML', 'CSS', 'JavaScript', 'React'];

  const handleClick = () => {
    setMessage('Thanks for visiting my portfolio!');
    console.log('Hello, World!');
  };

  return (
    <div className="container">
      <h1>Welcome to My Website</h1>

      <p>Hello! My name is Deepa Kumari.</p>

      <h2>About Me</h2>
      <p>I am a student interested in Full Stack Development.</p>

      <h2>My Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <button onClick={handleClick}>Click Me</button>

      {message && <p style={{ marginTop: '15px', fontWeight: 'bold' }}>{message}</p>}
    </div>
  );
}

