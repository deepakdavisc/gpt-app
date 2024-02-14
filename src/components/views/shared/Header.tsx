import NetflixLogo from "../../../assets/netflix_icon.png";

const Header = () => {
  return (
    <div className="absolute top-0 px-8 py-2 bg-gradient-to-b from-black w-full">
      <img className="w-20" src={NetflixLogo} alt="logo" />
    </div>
  );
};

export default Header;
