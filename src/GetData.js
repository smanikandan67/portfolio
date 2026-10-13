import {React,useEffect,useState} from 'react';
import axios from 'axios';

const GetData = () => {
const [data,setData]=useState([])
   useEffect(()=>{
    axios.get("https://dummyjson.com/c/7f6a-a18a-455a-a523")
    .then((res)=> {setData(res.data)})
   },[]
)
  return (
    <div >
        <table border="1"  style={{ borderCollapse: 'collapse' }}>
                <thead>
                        <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        </tr>
                        
                </thead>
        
        {data.map((i)=>{
            return(
                <>
                <tbody>
                    <tr>
                        <td>{i.id}</td>
                        <td>{i.name}</td>
                        <td>{i.email}</td>
                    </tr>
                </tbody>
                </>
            )
        })}
        </table>
    </div>
  )
}

export default GetData