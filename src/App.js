import React, { useState } from 'react' ;
import "./App.css";
import Header from "./components/Header";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState('light'); // weather dark mode
  const [alert, setAlert] = useState(null)

  const showAlert = ( message, type)=>{
    setAlert({
      msg: message,
      type: type

    })
    setTimeout(()=>{
      setAlert(null);
    }, 2000)
  }


   const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = "#042743"
      showAlert("Dark mode has been enabled", "success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = "white"
      showAlert("Light mode has been enabled", "success")
    }
   }
  return (
    <>
      <Header title="Text Utilz" Home ="Home" mode={mode} toggleMode={toggleMode} /> 
    <Alert alert ={alert}/>
      {/* <Header title="Netflix" aboutus="Aboutus" /> */}

      {/* <Header /> */}
      <div className="container my-3">
      < TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
      
      </div>
     
    </>
  );
}

export default App;
