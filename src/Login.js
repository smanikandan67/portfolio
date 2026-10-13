 import React from 'react';
import './Login.css'
const Login =()=>(
    <>
    <center>
        <div className='full'>
            <h2>Sign in with email</h2>
            <p> Make a database with document with this login</p>
            <form>
                📧<input type ='Email' placeholder='E-mail'/><br/>
                🔒<input type="password" placeholder='password'/><br/>
                <a href='#' className="forget">forget password?</a><br/>
                <div><button>login</button></div>
                <a href='#' className="new">Create new account?</a>
                
            </form>
        </div>
     </center>
    </>
)

export default Login