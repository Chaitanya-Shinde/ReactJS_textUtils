import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import './App.css';
import { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import {
  HashRouter as Router,

  Route,

  Routes,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //state to check whether darkmode is enabled
  const [alert, setAlert] = useState(null);

  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type: type,
    })

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor="#212529";
      showAlert("Dark mode has been enabled.", "success");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor="white";
      showAlert("Light mode has been enabled.", "success");
    }
  }
  return (
    <>
    <Router>
      <Navbar title = "Text Utils" aboutText="About Text Utils" mode={mode} toggleMode={toggleMode}></Navbar>
      <Alert alert={alert}/>
      <div className="container my-3">
        <Routes>
          <Route exact path='/' element={
            <TextForm heading="Enter your text in the box below" mode={mode} showAlert={showAlert}/>
          }
          />
          <Route exact path='/about' element={<About/>}/>      
        </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
