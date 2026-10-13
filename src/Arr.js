
import {react, useState } from 'react'
function Arr(){
    const ctime = new Date().toLocaleTimeString();
        console.log(ctime);
        const[status,setStatus]=useState("offline")
    if (ctime>=" 04:50:00 pm"&& status !="grey"){
        console.log("offline")
        setStatus("grey")
    }
    return(
        <><div style={{width: "100%",height:"100vh",backgroundColor:status }}>
            header
            {status}
            <button disabled={status== "grey"? true:false}>test</button>
            </div></>
    )
}
export default Arr