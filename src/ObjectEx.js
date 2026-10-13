import React from "react";

const ObjectEx =()=>{

    const student =[{
        id:1,
        name:"mani",
        age:20,
        dept:"IT",
        mark:100
    },
    {
        age:21,
        name:"tamil",
        mark:91
    },
    {
        age:22,
        name:"sri nave",
        mark:96,
    }
]

    // const data = student.map((i)=>{
    //     return(
    //         <>
    //         {console.log(i.name)}
    //         </>
    //     )
    // })
    // const data= student.filter((i)=>{
    //     return(
    //         <>
    //         {i.mark=i.mark>95}
    //         {console.log(i.mark)}
    //     </>
    //     )
    // })
    
    // return(
    //     <>
    //     {student.map((i)=>{
    //         return i.mark
    //     })}
    //     </>
    // )
const data = student.map((i)=>{
// return(
    
//     <>
//     <table>
//         <tbody>
//         <th>    name   </th>
//         <th>age</th>
//         <th>mark</th>
//         </tbody>
       
//         <tr>
//             <td>{i.name}</td>
//             <td>{i.age}</td>
//             <td>{i.mark}</td>
//         </tr>
//             </table>
//             </>
// )

}
)

 const num =[1,2,3,4,5,6]

 console.log(num.pop(),num)
 console.log(num.push(7),num)
 console.log(num.shift(),num)
 console.log(num.unshift(0),num)


 const name = ["mani","tamil","sri nave","theni"]
//  const result = name.slice(1,3)
//  console.log("result",result,name)
const spliceresut = name.splice(1,2,"added")
console.log(">>>>>>>",spliceresut,name)

return(
    <>
    {data}
    </>
)
}
export default ObjectEx