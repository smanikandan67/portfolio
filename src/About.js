import React from "react";
import {Link,Outlet,useNavigate} from "react-router-dom"
function App(){
    const navigate= useNavigate();
    return(
        <div><h1> MANI</h1>
         <button onClick={()=> navigate("Contact")}>
            About pagr useNavigate
        </button>
            
             <Outlet/>
        </div>
    )
}
export default App;