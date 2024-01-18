import Nav from "../components/navbar.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faWind,
  faClock,
  faLocationDot,
  faCircleExclamation
} from "@fortawesome/free-solid-svg-icons";
import Loading from "../components/loading.js";

const Searched = (props) => {
  return (
    !props.isCharged ? <Loading/> :
    (!props.isFound ? <div className="relative h-dvh w-dvw bg-black bg-cover bg-center flex flex-col">
      <Nav
      tmpCity={props.tmpCity}
      write={props.write}
      clicked={props.clicked}
      goHome={props.goHome}
      enterPressed={props.enterPressed}
    />
      <div className="text-red-500 grow flex items-center justify-center text-2xl phone:flex-col phone:text-xl"><FontAwesomeIcon icon={faCircleExclamation} />&nbsp;Oops! Please check the name of the city.</div>
    </div> : <div style={{ backgroundImage:`url(${props.bground})` }} className="relative h-dvh w-dvw bg-theme3 bg-cover bg-center flex flex-col">
    <Nav
      tmpCity={props.tmpCity}
      write={props.write}
      clicked={props.clicked}
      goHome={props.goHome}
      enterPressed={props.enterPressed}
    />
      <div className="grow grid grid-rows-3 grid-cols-2 px-8 py-4 text-white font-textInfo text-4xl drop-shadow-2xl bg-black/[0.6] phone:grid-row-4 phone:grid-cols-1">
        <div className="flex gap-x-4 self-start col-span-2 phone:text-2xl phone:self-start phone:col-span-1">
          <p>
            <FontAwesomeIcon icon={faLocationDot} /> {props.cityAndCountry.city}
            ,{props.cityAndCountry.is_capital ? <> capital of</> : <></>}{" "}
            {props.cityAndCountry.country}&nbsp;
          </p>
          <img src={props.flag} alt="" className="w-10 h-10 rounded-full" />
        </div>
        <div className="self-center col-span-2 phone:text-3xl phone:self-start phone:col-span-1">
          <FontAwesomeIcon icon={faClock} /> {props.dayInfo.hour}:
          {props.dayInfo.minute}
          <br />
          <span className="text-3xl phone:text-2xl">{props.dayInfo.day_of_week},</span>
          <br />
          {props.dayInfo.day}/{props.dayInfo.month}/{props.dayInfo.year}
          <br />
          <span className="text-3xl phone:text-2xl">DD/MM/YYYY</span>
        </div>
        <div className="self-end phone:text-3xl phone phone:self-center">
          <FontAwesomeIcon icon={faCloud} /> {props.info.temp}°C
          <br />
          <p className="text-xl">
            MAX : {props.info.max_temp}°C | MIN : {props.info.min_temp}°C
          </p>
        </div>
        <div className="self-end text-right phone:text-3xl phone:text-left phone:self-start">
          <FontAwesomeIcon icon={faWind} /> {props.info.wind_speed} Km/h
        </div>
      </div>
    </div>)
  );
};

export default Searched;