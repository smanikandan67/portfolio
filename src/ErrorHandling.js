import React, { useState } from 'react'
function ErrorHandling({data}) {
    console.log(data)
    const [value,setValue]=useState(
        {
            name:"",
            email:"",
            mobile:""
        }
    )
    const [error,setError]=useState(
        {
            nameError:"",
            emailError:"",
            mobileError:""
        }
    )
    function change(event){
        setValue(
            {
                ...value,
                [event.target.name]:event.target.value
            }
        )
    }
    function handleSubmit(event){
     event.preventDefault();

     if(value.name == ""){
        setError({
            ...error,
            nameError:"field is required"
        })
     }
    //  console.log(value.name)
     else if(value.name.length<3){
        alert("name should be more than 3 letters")
     }

    }
  return (
    <div>
    <form onSubmit={handleSubmit}>
    <input type='text' placeholder='Name' name='name' onChange={change}></input><br/>
    {value.name=="" ? <span style={{color:'red'}}>{error.nameError} </span> :""} <br/>
    <input type='email' placeholder='Email' name='email' onChange={change}></input><br/>
    <input type='number' placeholder='Number' name='mobile' onChange={change}></input><br/>
    <button type='submit'>submit</button>
    </form>
    </div>
  )
}
export default ErrorHandling
