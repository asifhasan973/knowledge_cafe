import PropTypes from 'prop-types';
import { FaRegBookmark } from 'react-icons/fa';

const Blog = ({ blog, handleBookmark, handleTime }) => {
  const {
    title,
    cover,
    author,
    author_img,
    published_date,
    reading_time,
    category_tags,
  } = blog;
  return (
    <div className="my-10">
      <div className="space-y-5">
        <img className="rounded-xl" src={cover} alt="" />
        <div className="flex justify-between items-center my-10">
          <div className="flex items-center gap-4">
            <img
              className="h-12 rounded-full text-sm"
              src={author_img}
              alt=""
            />
            <div>
              <h2 className="text-2xl">{author}</h2>
              <h3 className="text-gray-500">{published_date}</h3>
            </div>
          </div>
          <div>
            <h3 className="text-gray-500 text-xl me-2">
              {reading_time} min read{' '}
              <FaRegBookmark
                onClick={handleBookmark}
                className="inline text-2xl"
              />
            </h3>
          </div>
        </div>
        <div>
          <h1 className="text-4xl font-bold">{title}</h1>
          <div className="text-gray-400 space-x-4 text-sm">
            {category_tags.map((tag, idx) => (
              <span key={idx}>#{tag}</span>
            ))}
          </div>
        </div>
        <button onClick={handleTime} className="text-[#6047EC] underline ">
          Mark as read
        </button>
      </div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleBookmark: PropTypes.func.isRequired,
  handleTime: PropTypes.func.isRequired,
};
export default Blog;
