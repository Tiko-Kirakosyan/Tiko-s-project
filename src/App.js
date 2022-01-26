import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';


function App() {
  const [count, setCount] = useState(0)

  function minuscount() {
    setCount(prevCount => prevCount -1)
    console.log((count))
  }

  function pluscount() {
    setCount(prevCount => prevCount + 1)
    console.log((count))

  }

  return (
    <div className="App">
     
     <button className='bt' onClick = {minuscount}>-</button>
     <span>{count}</span>
     <button onClick = {pluscount}>+</button>

    </div>
  );
    
}



export default App;
