import React from "react";
import {Link,Outlet,useNavigate} from "react-router-dom";
function Payment(){
    
    return(
        <div>
        <h1>Payment</h1>
        <Outlet/>
                    
        </div>
    )
}
export default Payment;