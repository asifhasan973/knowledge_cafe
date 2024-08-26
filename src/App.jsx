import { useState } from 'react';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Header from './components/Header';
import Bookmarks from './components/Bookmarks/Bookmarks';

function App() {
  const [listBlogs, setListBlogs] = useState([]);
  const handleBookmark = (blog) => {
    let newList = [...listBlogs, blog];
    setListBlogs(newList);
  };
  const [time, setTime] = useState(0);
  const handleTime = (curTime, id) => {
    setTime(time + curTime);
    // remove all
    let newFilterList = listBlogs.filter((blog) => blog.id != id);
    setListBlogs(newFilterList);
  };
  return (
    <div className="exo-2">
      <Header></Header>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 w-10/12 mx-auto">
        <div className="order-2 lg:order-1 lg:col-span-2">
          <Blogs
            handleBookmark={handleBookmark}
            handleTime={handleTime}
          ></Blogs>
        </div>
        <div className="order-1 lg:order-2">
          <Bookmarks listBlogs={listBlogs} time={time}></Bookmarks>
        </div>
      </div>
    </div>
  );
}

export default App;
