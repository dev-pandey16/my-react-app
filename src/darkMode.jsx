import {useState} from 'react';
import './App.css';

function DarkMode() {
    const [darkMode , setDarkMode] = useState(false);
    const appStyle = {
        backgroundColor: darkMode ? '#333' : '#fff',
        color: darkMode ? '#fff' : '#000',
        height: '100px',
        display: 'flex',
        textAlign: 'center'
    }

    return (
        <div style = {appStyle}>
        <h1>{darkMode ? 'Dark Mode' : 'Light Mode '}</h1>
            <button onClick = { () => setDarkMode(!darkMode)}> Toggle Dark Mode</button>
        </div>
    )
}

export default DarkMode;