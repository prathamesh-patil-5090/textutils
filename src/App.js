import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
function App() {
  return (
    <>
      <Navbar title="ReCra2" Home="Home" AboutText="About" Search="Search karna!"/>
      <div className="container my-3">
        <TextForm heading="Text Area"/>
      </div>
    </> 
  );
}

export default App;
