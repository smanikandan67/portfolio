import React from "react";

const ChildA =({trail})=>{
    console.log(trail.city)
    return(
    <>
    <div style={{border:'1px solid green',margin:'10px',width:'350px',backgroundColor:'pink'}}>
        <h1>childA</h1>
        <h2>{trail.city}</h2>
    </div>
</>
    )
}
export default ChildA