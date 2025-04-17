
import './App.css';
import { useState } from 'react';


function App() {
  const [color, setColor] = useState('olive');

 
  return (
 <>
  <div className='bgClass' style={{backgroundColor:color}}></div>
  <div className='btnClass'>
  <button className="btn" style={{backgroundColor:'yellow'}} onClick= {() => setColor('yellow')}>Yellow btn</button>
  <br />
  <button className="btn" style={{backgroundColor:'red'}}  onClick= {() => setColor('red')}>Red btn</button>
  </div>
    </>
  );
}

export default App;
