// import React from 'react'

// const Project_task = () => {
//   return (
//     <div>Project_task</div>
//   )
// }

// export default Project_task
import React from 'react';

const Project_task = () => {
  const projects = [
    {
      title: 'Student Management System',
      description: 'A full-stack Web Application designed to manage student academic records, attendance, and performance tracking.',
      tech: ['React', 'Node.js', 'MongoDB'],
    },
    {
      title: 'Personal Portfolio Web App',
      description: 'A responsive portfolio created to showcase academic achievements and web development projects.',
      tech: ['React.js', 'JavaScript'],
    },
    {
      title: 'E-Commerce Shopping Cart',
      description: 'An interactive web app featuring product filtering, cart management, and payment gateway UI integration.',
      tech: ['React', 'Redux', 'REST APIs'],
    },
  ];

  return (
    <div>
      <center>
      <h2>Projects</h2>
      <div>
        {projects.map((proj, idx) => (
          <div key={idx}>
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <p><strong>Technologies:</strong> {proj.tech.join(', ')}</p>
            <hr />
          </div>
        ))}
      </div>
      </center>
    </div>
  );
};

export default Project_task;