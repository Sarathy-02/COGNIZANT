import React from 'react';

const BlogDetails = ({ blogs }) => {
  return (
    <ul>
      {blogs.map(blog => (
        <li key={blog.id} style={{ marginBottom: '10px' }}>
          <h3>{blog.title}</h3>
          <p>Author: {blog.author}</p>
        </li>
      ))}
    </ul>
  );
};

export default BlogDetails;
