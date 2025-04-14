
import './App.css';
import { useState } from 'react';


function App() {
  const [count, setCounter] = useState(5);

  const incValue = () => {
    setCounter(count+1);
   
  }

  const descValue = () => {
    setCounter(count-1);
  }

  return (
    <div className="App">
  <h1>Counter Program increament/descrement</h1>
  <h1>Value is : {count}</h1>
  <button  onClick={incValue}>Add Value</button>
  <br />
  <button onClick={descValue}>Remove value</button>
    </div>
  );
}

export default App;
