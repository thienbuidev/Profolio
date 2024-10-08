import { Link } from "react-router-dom";
import ButtonDark from "../ButtonDark/ButtonDark";
import { titleNavigate } from "../../constants/data";

const Header = () => {
  return (
    <div className="relative flex items-center justify-center">
      <div className="fixed top-4 container flex justify-between z-20 ">
        <div className="flex flex-row py-3 px-5 gap-5 rounded-xl bg-[#f5f5f5] bg-opacity-80 backdrop-blur-sm shadow-custom">
          {titleNavigate.map((item) => (
            <Link
              to={item.path}
              className={`text-lg cursor-pointer ${
                location.pathname === item.path ? "font-bold" : "font-medium"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="scale-[35%]">
          <ButtonDark />
        </div>
      </div>
    </div>
  );
};

export default Header;
