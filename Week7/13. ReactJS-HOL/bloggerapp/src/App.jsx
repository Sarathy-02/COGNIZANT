import React, { useState } from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

export const books = [
  { id: 101, bname: 'Master React', price: 670 },
  { id: 102, bname: 'Deep Dive into Angular 11', price: 800 },
  { id: 103, bname: 'Mongo Essentials', price: 550 }
];

export const blogs = [
  { id: 1, title: 'React Hooks Deep Dive', author: 'John Doe' },
  { id: 2, title: 'State Management in Redux', author: 'Jane Smith' }
];

export const courses = [
  { id: 1, cname: 'Fullstack Web Development', duration: '6 months' },
  { id: 2, cname: 'Data Science Bootcamp', duration: '4 months' }
];

function App() {
  const [showBooks, setShowBooks] = useState(true);
  const [showBlogs, setShowBlogs] = useState(true);
  const [showCourses, setShowCourses] = useState(true);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Blogger App</h1>

      {/* Buttons to toggle each section */}
      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => setShowBooks(!showBooks)}>
          {showBooks ? 'Hide' : 'Show'} Book Details
        </button>
        <button onClick={() => setShowBlogs(!showBlogs)} style={{ marginLeft: 10 }}>
          {showBlogs ? 'Hide' : 'Show'} Blog Details
        </button>
        <button onClick={() => setShowCourses(!showCourses)} style={{ marginLeft: 10 }}>
          {showCourses ? 'Hide' : 'Show'} Course Details
        </button>
      </div>

      {/* Conditional Rendering: Using Ternary */}
      <div className="st2">
        <h1>Book Details</h1>
        {showBooks ? <BookDetails books={books} /> : <p>Books are hidden.</p>}
      </div>

      {/* Conditional Rendering: Using Logical AND */}
      <div className="v1" style={{ marginTop: '30px' }}>
        <h1>Blog Details</h1>
        {showBlogs && <BlogDetails blogs={blogs} />}
        {!showBlogs && <p>Blogs are hidden.</p>}
      </div>

      {/* Conditional Rendering: Using if-else inside JSX */}
      <div className="mystyle1" style={{ marginTop: '30px' }}>
        <h1>Course Details</h1>
        {(() => {
          if (showCourses) {
            return <CourseDetails courses={courses} />;
          } else {
            return <p>Courses are hidden.</p>;
          }
        })()}
      </div>
    </div>
  );
}

export default App;
