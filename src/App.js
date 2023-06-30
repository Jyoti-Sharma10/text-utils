import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if(mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    } else {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
    }
  }
  return (
    <>
    <Navbar mode={mode} toggleMode={toggleMode}/>
    <div className="container">
    <TextForm heading="Enter the text to modify below" mode={mode}/> 
    </div>
    </>
  );
}

export default App;
