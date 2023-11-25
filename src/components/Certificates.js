import React from 'react';
import './certificates.css';

const Certifications = () => {
  // Sample certifications data (replace this with your actual data)
  const certifications = [
    { title: 'Certification 1', description: 'Description of Certification 1' },
    { title: 'Certification 2', description: 'Description of Certification 2' },
    // Add more certification objects here as needed
  ];

  return (
    <div className="certifications-container">
      <h2>Certifications</h2>
      {/* Map through certifications and render each certification item */}
      {certifications.map((certification, index) => (
        <div className="certification-item" key={index}>
          <div className="certification-title">{certification.title}</div>
          <div className="certification-description">{certification.description}</div>
        </div>
      ))}
    </div>
  );
};

export default Certifications;
