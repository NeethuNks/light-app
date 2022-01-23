import { useState } from 'react';
import './App.css';
import Light from './components/Light';

function App() {
  const [value1,setvalue1]=useState('OFF')
  const [value2,setvalue2]=useState('OFF')
  return (
    <div className="App">
     <div className='container'>
       <Light value = {value1} changeValue = { () => setvalue1(value1 === "OFF" ? "ON" : "OFF")} />
       <Light value = {value2} changeValue = { () => setvalue2(value2 === "OFF" ? "ON" : "OFF")} />
     </div>
    </div>
  );
}

export default App;
