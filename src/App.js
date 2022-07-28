import logo from './logo.svg';
import './App.css';
import Home from './Home/Home';
import {useState,useEffect} from 'react'
import PopUp from './Main/Success/success'

function App() {
  const[message, setMessage] = useState(false)
  useEffect(() => {
    const query = new URLSearchParams(window.location.search)
    if (query.get('success')){
      setMessage(true)
    }
    if (query.get('cancel')){
      setMessage(false)
    }
  }, [])
  return (
    <div className="App">
      <Home />
      <PopUp message = {message} setMessage = {setMessage}/>
    </div>
  );
}

export default App;
