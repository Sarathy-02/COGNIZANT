import React from 'react';

const CourseDetails = ({ courses }) => {
  return (
    <ul>
      {courses.map(course => (
        <li key={course.id} style={{ marginBottom: '10px' }}>
          <h3>{course.cname}</h3>
          <p>Duration: {course.duration}</p>
        </li>
      ))}
    </ul>
  );
};

export default CourseDetails;
