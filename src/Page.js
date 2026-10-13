// import React from "react";
// import './Page.css'

// const Page=()=>(
//     <>
//     <center>
// <div className='full'>
//             <h2>Sign in with email</h2>
//             <p> Make a database with document with this login</p>
//             <form>
//                 📧<input type ='Email' placeholder='E-mail'/><br/>
//                 🔒<input type="password" placeholder='password'/><br/>
//                 <a href='#' className="forget">forget password?</a><br/>
//                 <div><button>login</button></div>
//                 <a href='#' className="new">Create new account?</a>
                
//             </form>
//         </div>
//     </center>
//     </>
// )

// export default Page
import React from "react";
import "./Page.css";

function Login() {
  return (
    <div className="main">
      <div className="card">
        <div className="left">
            <center>
          <h2>Welcome!</h2>
          <p>Login to youre account</p>
</center>
          <form>
            <input type="email" placeholder="E-mail" required />
            <input type="password" placeholder="Password" required />
            <a href="#" className="forget">Forget password?</a><br/>
            <button type="submit">Login</button>
          </form>

          <div className="social">
            <p>Login with</p>
            <div className="icons">
              <button className="google">G</button>
              <button className="facebook">f</button>
            </div>
          </div>

          <p className="register">
              <center>Don’t have an account? <span>Register</span></center>
          </p>
        </div>

       
      </div>
    </div>
  );
}

export default Login;