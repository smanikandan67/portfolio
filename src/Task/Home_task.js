// import React from 'react';
// import Login_task from "./Login_task";
// import Accordion_task from "./Accordion_task";
// import Contact_task from "./Contact_task";
// import Project_task from "./Project_task";
// import Skills_task from "./Skills_task";
// import About_task from './About_task';
// import { Link,Route,Router,Routes } from 'react-router-dom';

// const Home_task = () => {
//     const data =[
//         {
//             id:"01",
//             name:"Mani",
//             username:"manikandan67",
//             contact:"8903381417",
//             role:"student",
//             email:"selvamani19782007@gmail.com",
//             location:"kallakurichi",
//             about:"hi hello",
//             Accordion:[{
                
//             }],
//             project:[
//             {
//                 title:"project",
//                 description:" project description"
//             },
//             {  
//                  title:"project1",
//                 description:"project1 description"
//             },
//             {
//                title:"project2",
//                description:"project2 description"
//             }],
//             social:{linkedin:"https://www.linkedin.com/in/manikandan-s-a23411338"},
//             skills:["java basic", "react"]
//         }
//     ]
//   return (
//     <div>
//     hi
//     </div>
//   )
// }

// export default Home_task
import React from 'react';

const Home_task = ({ setActiveTab }) => {
  return (
    <div>
      <center>
      <header>
        
        <div>
          <h1>Manikandan</h1>
          <p>Full Stack Developer Aspirant</p>
          <p><strong>College:</strong> Muthayammal engineering college</p>
          <p><strong>Course:</strong> B.TECH. Information technology</p>
          <p><strong>Batch:</strong> 2024 - 2028</p>

          <div>
            <a 
              href="#resume" 
              download="Resume.pdf" 
              onClick={(e) => {
                e.preventDefault();
                alert('Resume download started!');
              }}
            >
              Download Resume
            </a>
            {' | '}
            <button onClick={() => setActiveTab && setActiveTab('contact')}>
              Contact Me
            </button>
          </div>
        </div>
      </header>

      <section>
        <h2>Education</h2>
        <div>
          <h3>Bachelor of Technology (IT)</h3>
          <p>Muthayammal engineering college| CGPA: 8.5</p>
        </div>
        <div>
          <h3>Higher Secondary School (HSC)</h3>
          <p>Govt boys Higher Secondary School | Percentage: 90%</p>
        </div>
      </section>
      </center>
    </div>
  );
};

export default Home_task;