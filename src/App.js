import "./App.css";
import Header from "./components/Header";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Header title="Text Utilz" Home ="Home"/>
      {/* <Header title="Netflix" aboutus="Aboutus" /> */}

      {/* <Header /> */}
      <div className="container my-3">
      < TextForm heading="Enter the text to analyze below"/>
      
      </div>
     
    </>
  );
}

export default App;
