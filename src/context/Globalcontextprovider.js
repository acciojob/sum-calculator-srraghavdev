import React,{useState} from 'react'
import global from './globalcontext'


let Globalcontextproivder = (props)=>{
    console.log(1)
    let [sum,Setsum]=useState([])
    return (
        <global.Provider value={{
            sum:sum,
            set:Setsum
        }}>
        {props.children}
        </global.Provider>
    )
}
export default Globalcontextproivder