import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import './App.css';
import { useState } from 'react';
//import About from './components/About';

function App() {
  const [mode, setMode] = useState('light'); //state to check whether darkmode is enabled

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor="#212529";
    }
    else{
      setMode('light')
      document.body.style.backgroundColor="white";
    }
  }
  return (
    <>
      <Navbar title = "Text Utils" aboutText="About Text Utils" mode={mode} toggleMode={toggleMode}></Navbar>
      <div className="container my-3">
        <TextForm heading="Enter your text in the box below" mode={mode}/>
        {/* <About></About> */}
      </div>
      

    </>
  );
}

export default App;
