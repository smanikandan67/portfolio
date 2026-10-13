import React, { useState } from "react";

import './Accordion.css';

const Accordion =()=>{
    const [open,setOpen]=useState(null)  // for accordion
    
    // function on(){
    //     setOpen(!open)  
    //          // normal function 
    // }      
    const accor=[
        {
           id:1, title:"Accordion 1",p:"p1"
        },
        {
           id:2, title:"Accordion 2",p:"p2"
        }
    ]

    function handleId(id){
        console.log(id)
        setOpen(open===id? null:id)
    }
    return(
        // <>
        // <p className="h1" onClick={on}>Accordion 1</p> 
        // {/* ()=>{setOpen(!open)} */}  
        // {open ? <p> i am manikandan </p> :""}
        
        
        //  <p className="h1" onClick={()=>{setOpen(!open)}}>Accordion 2</p>
         
       
        // {open ? <p>muthayammal engineering college</p> :""}
        // </>
        <>
        {
        accor.map((i)=>{
            return(

                <>
                <p className="h1" onClick={()=> handleId(i.id)}>{i.title}</p>
                       
                {open == i.id? <p>{i.p}</p> :""}
                </>
            )
        })
        }
        </>
    )
}

export default Accordion