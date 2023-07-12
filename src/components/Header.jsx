import logo from "../assets/logo.png";
import youtubelogo from "../assets/youtubelogo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-6 bg-white">
      <div className="flex gap-7 items-center">
        <img className="w-[70px] rounded-full" src={logo} alt="/" />

        <ul className="hidden sm:flex space-x-6">
          <li className="cursor-pointer hover:text-red-500">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="cursor-pointer hover:text-red-500">Course</li>
          <li className="cursor-pointer hover:text-red-500">Videos</li>
        </ul>
      </div>

      <div>
        <img className="w-[70px]" src={youtubelogo} alt="/" />
      </div>
    </div>
  );
};

export default Header;
