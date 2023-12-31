import React from 'react';

const Courses = () => {
  const courses = [
    { grade: '9th Grade', course: 'Course A' },
    { grade: '10th Grade', course: 'Course B' },
    { grade: '11th Grade', course: 'Course C' },
    { grade: '12th Grade', course: 'Course D'}
    // Add more courses as needed
  ];

  return (
    <div className='container-fluid bg-light pt-5 d-flex flex-column align-items-center min-vh-100'>
      <div className="courses-list">
        <h3 className='pt-5 pb-2 custom-color'>Courses Since 9th Grade</h3>
        <ul className="list-group">
          {courses.map((course, index) => (
            <li key={index} className="list-group-item">
              <strong>{course.grade}:</strong> {course.course}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Courses;