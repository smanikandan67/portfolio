import React from "react";
import Payment from "./Payment";

import {Link,Outlet,useParams} from 'react-router-dom'
function Contact(){
    const{id}=useParams()
    return(
        <div>
            <Link to="payment">Payment</Link>
            
            <h1>8903381417</h1>
            <Outlet/>
        </div>
    )
}
export default Contact;