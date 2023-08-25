
import React,{useContext} from "react";
import './../styles/App.css';
import global from "../context/globalcontext";
const App = () => {
  let {sum,set}= useContext(global)
  console.log(sum)
  function adddata(event){
    console.log(event)
    set([...sum,Number(event.target.value)])
  }
  return (
    <div>
        <h1>Sum Calculator</h1>
        <input type='number' onChange={adddata}></input>
         <p>Sum: {
          sum.reduce((accu,element)=>accu+element,0)
          }
          </p>
    </div>
  )
}

export default App
