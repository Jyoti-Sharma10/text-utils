import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar about="About TextUtils"/>
    <div className="container">
    <TextForm heading="Enter the text to modify below"/>
    </div>
    </>
  );
}

export default App;
