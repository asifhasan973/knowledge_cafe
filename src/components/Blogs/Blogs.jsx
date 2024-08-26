import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({ handleBookmark, handleTime }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch('data.json')
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <>
      <div>
        {blogs.map((blog) => (
          <Blog
            key={blog.id}
            blog={blog}
            handleBookmark={() => handleBookmark(blog)}
            handleTime={() => handleTime(parseInt(blog.reading_time), blog.id)}
          ></Blog>
        ))}
      </div>
    </>
  );
};

export default Blogs;

Blogs.propTypes = {
  handleBookmark: PropTypes.func.isRequired,
  handleTime: PropTypes.func.isRequired,
};
