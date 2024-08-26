import PropTypes from 'prop-types';
const Bookmark = ({ blog }) => {
  let { title } = blog;
  return (
    <div>
      <div className="my-6">
        <h1 className="p-5 rounded-lg text-lg my-5 bg-white">HI: {title}</h1>
      </div>
    </div>
  );
};

export default Bookmark;
Bookmark.propTypes = {
  blog: PropTypes.object.isRequired,
};
