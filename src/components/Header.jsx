import profile from '../assets/profile.png';
const Header = () => {
  return (
    <div>
      <nav className="flex justify-between w-10/12 mx-auto">
        <h1 className="text-3xl font-bold">Knowledge Cafe</h1>
        <div>
          <img className="" src={profile} alt="" />
        </div>
      </nav>
    </div>
  );
};

export default Header;
