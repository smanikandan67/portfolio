// import React from "react";
// import { useParams } from "react-router-dom";
// function Data(){
//     const id=1
//     const name="manikandan" 
//        console.log("my name is "+ name +" and my id is "+id)
//     console.log(`my name is ${name} and my id is ${id}`)
//     return(
//         <div>
//             <h1>Data</h1>
//         </div>
//     )
// }

// export default Data;
import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function UserProfile() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);

  if (!user) return <h2>Loading...</h2>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
    </div>
  );
}
export default UserProfile