// import React from 'react'
// import data from '../data.js'

// import Project from './Project.js'

// const Projects = () => {
//   return (
//     <div className="container-fluid bg-light p-5 min-vh-100">

//       <div className="row">
//         {/* <h2 className='custom-font pb-5 text-center'>Completed: </h2> */}
//         {data.ProjectsData.map((project) => {
//           return(
//             <div className="col-12 d-flex justify-content-center" key={project.id}>
//                 <Project id={project.id}
//                   image={project.img}
//                   name={project.name}
//                   stack={project.stack}
//                   live={project.live}
//                   source={project.source}
//                   desc={project.description}
//                 />
//             </div>
//           )
//         })}
//       </div>
//     </div>
//   )
// }

// export default Projects

import React, { useState } from 'react';
import data from '../data.js';
import Project from './Project.js';

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = data.ProjectsData.filter(project =>
    project.stack.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="container-fluid bg-light p-5 min-vh-100">
      <div className="row">
        <div className="col-12 mb-4">
          <input
            type="text"
            placeholder="Search by technology/language"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-control"
          />
        </div>
        {filteredProjects.map((project) => (
          <div className="col-12 d-flex justify-content-center" key={project.id}>
            <Project
              id={project.id}
              image={project.img}
              name={project.name}
              stack={project.stack}
              live={project.live}
              source={project.source}
              desc={project.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
