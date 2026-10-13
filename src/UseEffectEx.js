import React from "react";
import {react,useState} from "react";
const UseEffectEx =()=>{
const [value,setValue]= useState(0);

const increment =()=>{
    return(
        setValue(value+1)
    )
}
const decrement =()=>{
    return(
        setValue(value-1)
    )
}


return(
    <>{value}<br/>
    <button onClick={increment}>increment</button>
    <button onClick={decrement}>decrement</button>
    </>
)
}
export default UseEffectEx