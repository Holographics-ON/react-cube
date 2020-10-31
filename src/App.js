import React, {useState} from "react";
import './App.css';
import {ClickButton} from './components/Button';
import {Canvas} from './components/Canvas';


function App() {
  const [colour, setColour ] = useState('red')
  const [name, setName ] = useState('')
  function handleChange(e){
    setName(e.target.value)
  }
  return (
    <div className="App">
      <h1> Hello {name}</h1>
      <p>Welcome to the cube generator ! Change the colour of the cube by pressing the buttons</p> 
      <p> You've added a {colour} to the cube!!</p>
      <p></p>
      <input placeholder="name" onChange={handleChange} />
           
      <div className={"buttons"}>
           
            <ClickButton name="red" onClick={value => setColour(value)}/>
            <ClickButton name="orange" onClick={value => setColour(value)} />
            <ClickButton name="lime" onClick={value => setColour(value)} />
            <ClickButton name="green" onClick={value => setColour(value)}/>
            <ClickButton name="aqua" onClick={value => setColour(value)} />
            <ClickButton name="blue" onClick={value => setColour(value)}/>
            <ClickButton name="purple" onClick={value => setColour(value)}/>           
        </div>
        <Canvas colour={colour}/>
      
    </div>
  );
}

export default App;
