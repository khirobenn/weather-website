import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Nav = (props) => {
  return (
    <nav className="flex justify-between px-8 w-dvw py-2 items-center border border-white border-l-0 border-r-0 border-t-0 bg-black/[0.7] phone:flex-col phone:border-0 phone:gap-y-3">
      <div
        className="text-white text-xl cursor-pointer font-logo uppercase phone:border phone:w-full phone:text-center phone:border-r-0 phone:border-l-0 phone:border-t-0 phone:border-white"
        onClick={props.goHome}
      >
        weather web
      </div>
      <div className="flex justify-end gap-x-3 items-center">
        <input
          type="text"
          name="ciry"
          id="city"
          placeholder="Search a city.."
          value={props.tmpCity}
          onChange={props.write}
          className="px-2 bg-transparent outline-none text-white border-2 border-t-0 border-x-0"
          onKeyDown={(e) => props.enterPressed(e)}
        />
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="w-6 cursor-pointer text-white"
          onClick={props.clicked}
        />
      </div>
    </nav>
  );
};

export default Nav;
