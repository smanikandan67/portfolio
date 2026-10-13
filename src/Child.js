import React from "react";
import ChildA from './ChildA'
const Child =({trail})=>{
    console.log( trail )
    return(
    <>
    <div style={{border:'1px solid blue',margin:'10px',width:'750px',backgroundColor:'blue'}}>
        <h2> Child </h2>
        <h2>{trail.Name}</h2>
        <ChildA trail={trail}/>
    </div>
    </>
    )
}
export default Child