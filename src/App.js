import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500); 
  }

  const toggleMode = () => {
    if(mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");

    } else {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode has been enabled", "success");
    }
  }
  return (
    <>
    <Navbar mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container">
    <TextForm heading="Enter the text to modify below" mode={mode} showAlert={showAlert}/> 
    </div>
    </>
  );
}

export default App;
