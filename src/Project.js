// import React, { useState } from "react";
// import './Project.css'
// const Project=()=>{
//     const [value,setValue]=useState(0);
//     const [input,setInput]=useState("")
//     const [email,setEmail]=useState("")
//     const [age,setAge]= useState(0)

//     function add(){
//         // setValue(value == 0?1:0)
//         // if (value==0){
//         //     setValue(1);

//         // }else{
//         //     setValue(0)
//         // }
//         setValue(!value)
//     }
//     function Data(event){
//         setInput(event.target.value)

//     }
//     function Register(e){
//         setInput(e.target.value)

//     }
    

    
//     function mail(e){
//         setEmail(e.target.value)
//     }
//     function ages(e){
//         setAge(e.target.value)
//     }
//     function handleSubmit(e){
//         e.preventDefault();
//         alert(input+" "+email+" "+age)
        
//      }   
//     return(
//         <div style={{backgroundColor:(value?"black":"white"), height:"100vh",}}>
//      <center>
//         {value}
       
//         <span style={{cursor:"pointer"}} onClick={add}>{value?"☀️":"🌙"}<br/></span>
//         <form onSubmit={handleSubmit}>
//             Name: <input onChange={Register}/><br/>
//             E-mail:<input onChange={mail}></input><br/>
//             age:<input onChange={ages}></input><br/>
//             <button type="submit">Register</button>
//         </form>
//          </center>
//         </div>
//     )
// }
// export default Project
import React, { useState } from "react";
import './Project.css'
const Project =()=>{
    const [form,setForm]=useState(
    {
        id:0,
        name:"mani",
        age:0,
        dept:"",
        marks:0
    }
)
const [value,setValue]=useState(
    {
        id:1,
        name:"mani",
        age:21,
        dept:"IT",
        marks:90
    }
)

function change(e){
    setValue({
        ...value,
        [e.target.name]:e.target.value
        
    })
}
function submit(e){
    e.preventDefault()
   setForm({
    ...form, 
    name:value.name,
    age:value.age,
    dept:value.dept})
}
return(
    <div>
        {form.name}<br/>
        {form.age}<br/>
        {form.dept}

        <form onSubmit={submit}>
            <label>Name</label><br/> <input onChange={change} name={"name"}></input><br/>
            <label>age</label><br/> <input  onChange={change} name={"age"}></input><br/>
            <label>dept</label><br/> <input  onChange={change} name={"dept"} /><br/>
            <button type="submit">submit</button>
        </form>
    </div>
)
}
export default Project