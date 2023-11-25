import React from 'react';

const certificationsData = [
  {
    title: 'Certification Title 1',
    description: 'Description of Certification 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    title: 'Certification Title 2',
    description: 'Description of Certification 2. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  // Add more objects for each certification
];

const Certification = ({ title, description }) => (
  <section className="certification">
    <h2>{title}</h2>
    <p>{description}</p>
  </section>
);

const Certifications = () => (
  <div className="certifications">
    <h1>My Certifications</h1>
    {certificationsData.map((certification, index) => (
      <Certification
        key={index}
        title={certification.title}
        description={certification.description}
      />
    ))}
  </div>
);

export default Certifications;
