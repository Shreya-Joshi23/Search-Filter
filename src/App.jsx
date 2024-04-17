import { useState } from 'react';
import './App.css';
import './countries.json'

function App() {

  const countries = ["India","America","China","Bhutan","Nepal","Albania"];
  const [input,setinput]=useState("");

  const handleonChange=(e)=>{
    setinput(e.target.value);
    console.log(input);
  }

  const check=(str)=>{
    return str.toLowerCase().includes(input.toLowerCase());
  }

  return (
    <div className="maindiv">
      <h1>A Simple search filter</h1>
      <input type='text' placeholder='Search' onChange={handleonChange}></input>
        <ul>
          {
            // checkIfInputIsSubstringOfAnyArrayElement
            countries.filter(check).map((name)=>(
              <li>{name}</li>
            ))
          }
        </ul>
    </div>
  );
}

export default App;
