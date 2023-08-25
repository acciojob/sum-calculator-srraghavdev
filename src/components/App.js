
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
        <input type='number' onChange={adddata}></input>
         <div>The sum is {
          sum.reduce((accu,element)=>accu+element,0)
          }
          </div>
    </div>
  )
}

export default App
