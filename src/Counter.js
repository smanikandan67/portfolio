// import React from 'react'
// import  {useState}  from 'react'
// import './Counter.css'
// const Counter=()=>{
//    const[count,setCount]=useState(true);

//    function change(){
//     setCount(!count)
//     console.log(count)
//    }

//    return(
//     <div>
//         <h1>{count? "true":"false"}</h1>
//         <div className={count?"box1":"box2"}>

//         </div>
    
// <button className='btn_counter' onClick={change}>update</button>  
// </div>
//     )
// }

// export default Counter

import React, { useEffect, useState } from "react";

const btn ={
   padding: "10px",
   borderRadius:"10px",
   backgroundColor:"green",
   color:"white",
   boder:"10px"

}

const Counter = ()=>{
    const [count,setCount]=useState(0)
    // const [timeout,setTimeout]=useState(0)  //without

    // useEffect(()=>{
    // document.title="mani"
    // },[])

//     useEffect(()=>{
//         document.title=count
//   //with
//     },[count])

    // useEffect(()=>{
    //     setCount(67)    //empty
    // })
    function timeout(){
        setTimeout(
            ()=>{
                console.log("test")
            }, 2000
        )
    }
    function interval(){
        setInterval(()=>{
            console.log("i test")
        },1000)
    }
    return(
        <div style={{textAlign:"center"}}>
           Count:{count}<br/>
            <button style={btn} onClick={()=> setCount(count+1)}>Increment</button><br/>
            <button style={btn} onClick={()=> setCount(count-1)}>decrement</button><br/>
            <button style={btn} onClick={()=> setCount(0)}>reset</button>

            <button style={btn} onClick={timeout}>timeout</button>
            <button style={btn} onClick={interval}>interval</button>
        </div>

    )
}
export default Counter