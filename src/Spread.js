import React from 'react';

function Spread() {
  const students = [
    { id: 1, name: "mani", dept: "IT", age: "20" },
    { id: 2, name: "tamil", dept: "ECE", age: "21" },
    { id: 3, name: "nave", dept: "AIML", age: "19" },
    { id: 4, name: "theni", dept: "MECH", age: "18" },
    { id: 5, name: "virat", dept: "IT", age: "25" },
    { id: 6, name: "vijay", dept: "IT", age: "28" },
    { id: 7, name: "dhoni", dept: "CSE", age: "24" },
    { id: 8, name: "sri", dept: "AIDS", age: "22" },
    { id: 9, name: "mathi", dept: "CSE", age: "27" },
    { id: 10, name: "kathir", dept: "IT", age: "23" }
  ]

  return (
    <div >
      <h2>Student</h2>
      <table >
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>dept</th>
            <th>age</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td >{student.name}</td>
              <td>{student.dept}</td>
              <td>{student.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Spread
