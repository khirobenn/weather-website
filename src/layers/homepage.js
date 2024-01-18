import Nav from "../components/navbar.js";
import Home from "../components/home.js";
import earth from '../pics/earth.png';

const Homepage = (props) => {
  return (
    <div className="relative App w-dvw h-dvh bg-black font-textFont bg-cover bg-center overflow-hidden flex flex-col">
      <img
        src={earth}
        alt=""
        className="absolute bottom-[-100%] right-[-30%] animate-spin-slow phone:bottom-[-30%]"
      />
      <Nav tmpCity={props.tmpCity} write={props.write} clicked={props.clicked} goHome={props.goHome} enterPressed={props.enterPressed}/>
      <Home />
    </div>
  );
};

export default Homepage;
