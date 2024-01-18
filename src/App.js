import { useEffect, useState, useRef } from "react";
import Homepage from './layers/homepage.js';
import Searched from "./layers/searched.js";


const App = () => {

  const [orientation, setOrientation] = useState("");
  const [tmpCity, setTmpCity] = useState("");
  const [city, setCity] = useState("");

  const [flag, setFlag] = useState("https://flagcdn.com/w2560/ua.png");
  const [bground, setBground] = useState("");
  const [cityAndCountry, setCityAndCountry] = useState([
    { city: "city", country: "country", is_capital: false },
  ]);
  const [clickState, setClickState] = useState(true);
  const [dayInfo, setDayInfo] = useState({
    day_of_week: "Thursday",
    day: "01",
    month: "01",
    year: "2024",
    hour: "20",
    minute: "20",
  });
  const [info, setInfo] = useState({
    temp: "19",
    max_temp: "20",
    min_temp: "15",
    wind_speed: "8",
  });
  const [encodes, setEncodes] = useState({});
  
  const effect = useRef(false);
  const [isCharged, setIsCharged] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [isFound, setIsFound] = useState(true);

  const write = (e) => {
    setTmpCity(e.target.value);
  }

  const clicked = () => {
    if(city !== tmpCity){
      setIsCharged(false);
      effect.current = true;
      setIsSearching(true);
      setCity(tmpCity);
      setClickState(!clickState);
    }
  }
  
  const enterPressed = (e) => {
    if(e.key === 'Enter'){
      clicked();
    }
  }

  const goHome = () => {
    setIsSearching(false);
    setTmpCity("");
  }

  const url = [
    "https://api.api-ninjas.com/v1/city?name=",
    "https://api.api-ninjas.com/v1/worldtime?city=",
    "https://api.api-ninjas.com/v1/weather?city=",
  ];
  const funcs = [setCityAndCountry, setDayInfo, setInfo];
  let forCountryImage;

  const fetchImage = (city, randomNb) => {
    fetch("https://api.pexels.com/v1/search?query="+city.toLowerCase().replace(/ /g, "_")+"&orientation="+orientation+"&size=large",{
        headers : {Authorization : process.env.REACT_APP_API_PEXELS}    
      }).then(res => res.json()).then(res => setBground(res.photos[randomNb].src.original)).catch(() => fetchImage(forCountryImage, randomNb))
  }

  const fetchedNinja = (num) => {
    if (num === -1) {
      const randomNb = Math.floor(Math.random() * 5);
      fetchImage(city, randomNb);
      return;
    }
    fetch(url[num] + city, {
      method: "GET",
      headers: { "X-Api-Key": process.env.REACT_APP_API_NINJA },
      contentType: "application/json",
    })
    .then((res) => res.json())
    .then((res) => {
      setIsFound(true);
      if (num !== 0) {
        funcs[num](res);
      } else {
        setFlag(
          "https://flagcdn.com/w2560/" + res[0].country.toLowerCase() + ".png"
          );
          funcs[num]([
            {
              city: res[0].name,
              country: encodes[res[0].country.toLowerCase()],
              is_capital: res[0].is_capital,
            },
          ]);
          forCountryImage = encodes[res[0].country.toLowerCase()];
        }
        fetchedNinja(num - 1);
      })
    .catch(() => {
      setIsFound(false);
      setIsCharged(true);
    });
  }

  useEffect(() => {
    if(effect.current) {
      fetchedNinja(2);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clickState]);

  useEffect(() => {
    fetch("https://flagcdn.com/en/codes.json")
      .then((res) => res.json())
      .then((res) => setEncodes(res))
      .catch(() => setIsFound(false));
    if(window.innerWidth >= 732){
      setOrientation("landscape");
    }
    else{
      setOrientation("portrait");
    }
  }, []);

  useEffect(() => {
    if(effect.current){
      setIsCharged(true);
    }
  }, [bground]);

  return (
      !isSearching ? <Homepage tmpCity={tmpCity} write={write} clicked={clicked} goHome={goHome} enterPressed={enterPressed}/> : <Searched
        tmpCity={tmpCity}
        write={write}
        clicked={clicked}
        flag={flag}
        cityAndCountry={cityAndCountry[0]}
        dayInfo={dayInfo}
        info={info}
        bground={bground}
        goHome={goHome}
        isCharged={isCharged}
        isFound={isFound}
        enterPressed={enterPressed}
      />
  );
};

export default App;