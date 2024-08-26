import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ listBlogs, time }) => {
  return (
    <div>
      <div className="px-7 py-6 bg-[#1111110D] rounded-2xl mt-10">
        <div>
          <h1 className="text-[#6047EC] bg-[#6047EC1A] text-2xl font-bold p-5 my-5 rounded-lg">
            Spent time on read : {time} min
          </h1>
        </div>
        <h1 className="text-2xl font-bold">
          Bookmarked Blogs : {listBlogs.length}
        </h1>
        {listBlogs.map((blog, idx) => (
          <Bookmark blog={blog} key={idx}></Bookmark>
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;

Bookmarks.propTypes = {
  listBlogs: PropTypes.array.isRequired,
  time: PropTypes.number.isRequired,
};
