// import React from 'react'

// const Skills_task = () => {
//   return (
//     <div>Skills_task</div>
//   )
// }

// export default Skills_task

import React from "react";
import { useState } from "react";

const Skills_task = () => {
  const [skill, setSkill] = useState("");
  const [skills, setSkills] = useState([]);
  function addSkill() {
    if (skill !== "") {
      setSkills([...skills, skill]);
      setSkill("");
    }
  }
  return (
    <div>
      <center>
      <h1>My Skills</h1>
      <input type="text" placeholder="Enter your skill" value={skill} onChange={(e) => setSkill(e.target.value)}/>
      <button onClick={addSkill}>Add Skill</button> <h2>My Technical Skills</h2>
      {skills.map((i) => (
        <p>{i}</p>
      ))}
      </center>
    </div>
  );
};

export default Skills_task;