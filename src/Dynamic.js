import React, { useEffect } from "react";
import { useState } from "react";
import './Dynamic.css';
import Counter from "./Counter";

const Dynamic =()=>{
    
    // // const [name, setName] = useState("")
    // // const [email, setEmail] = useState("")
    // // const [password, setPassword] = useState("")

    // const [count,setCount]= useState(0)
    // const [val,setVal]= useState(0)
    
    

    // useEffect(()=> {},[]) //with out 
    // // useEffect(()=> {},[some]) //with 
    // useEffect(()=> { console.log("every")}) //empty
    const [open,setOpen]= useState(false)
    return (
        <>
        <p className="btn-style" onClick={()=> setOpen(!open)}>...</p>
        { open &&
        <center>
        <div className="banner">
       
            <span>Document</span>
            <span>archived Releases</span>
            
            </div>
        </center>
} <Counter />
        </>

    )

}
    
export default Dynamic
