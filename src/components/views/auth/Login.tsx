import NetflixBanner from "../../../assets/neflix-banner.jpg";
import Header from "../shared/Header";

const Login = () => {
  return (
    <div className="h-screen flex justify-center items-center flex-col relative">
      <Header />
      <div className="bg-black p-10 absolute  w-3/12 text-white font-bold">
        <form>
          <h1 className="text-white font-bold">Sign In</h1>
          <div className="my-6">
            <input
              id="email"
              type="text"
              name="email"
              className="bg-gray-500 w-full h-10 border-none"
            />
            <label htmlFor="email" />
          </div>
          <div className="my-6">
            <input
              id="password"
              type="password"
              name="password"
              className="bg-gray-500 w-full h-10"
            />
            <label htmlFor="password" />
          </div>
          <div className="my-6">
            <button className="bg-red-900 w-full text-white font-bold p-2 rounded-lg">
              Sign In
            </button>
          </div>
          <p>Are you new to Netflix? Sign up now</p>
        </form>
      </div>
      <img src={NetflixBanner} alt="Netflix Banner" />
    </div>
  );
};

export default Login;
