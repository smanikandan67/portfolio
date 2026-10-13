import React from "react";
import { Link,Outlet } from "react-router-dom";
function Home(){
    return(
        <div>
            <Link to="about">About</Link>
            <Outlet/>
        </div>
    )
}
export default Home