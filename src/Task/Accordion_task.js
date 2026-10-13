// import React from 'react'

// const Accordion_task = () => {
//   return (
//     <div>Accordion_task</div>
//   )
// }

// export default Accordion_task

import React from "react";
import { useState } from "react";

const Accordion_task = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <center>
      <h1>More About Me</h1>
      <button onClick={() => setOpen(!open)}> My Education </button>
      {open && <p> Enter your education details here. </p>}
      </center>
    </div>
  );
};

export default Accordion_task;