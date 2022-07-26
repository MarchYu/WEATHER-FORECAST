import styled from "styled-components";
import { useSelector } from "react-redux";
import { forecast, tommorowForecast } from "../features/Test/TestSlice";

const TopLvlContainer = styled.div`
  display: flex;
`;

const StyledContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 20px 30px 20px 30px;
  margin-top: 15vh;
  margin-right: 1vh;
  font-family: Okta;
  border-radius: 10px;

  .temperature {
    font-size: 3rem;
    color: #1c3144;
    text-align: center;
  }
  .icon {
    display: flex;
    justify-content: center;
  }
  .city {
    font-size: 1.2rem;
    text-align: center;
    color: #1c3144;
    font-weight: 900;
  }
  .description {
    text-align: center;
    margin-top: 1vh;
    color: #519872;
    font-weight: 900;
  }
  .current {
    color: #1c3144;
    min-width: 10vw;
    display: flex;
    justify-content: center;
  }
`;

export const Container = () => {
  const myForecast = useSelector(forecast);
  const myTommorowForecast = useSelector(tommorowForecast);
  console.log("forecast", myForecast);
  console.log("TommorowForecast", myTommorowForecast);
  console.log("other", "myTommorowForecast.list[11].main.temp");
  return (
    <TopLvlContainer>
      <StyledContainer>
        <div className="current">Current Weather</div>

        <div className="container">
          <div className="icon">
            <img
              src={`http://openweathermap.org/img/wn/${
                myForecast.weather
                  ? myForecast.weather.map((item) => item.icon)
                  : "10d"
              }@2x.png`}
            />
          </div>
          <div className="temperature">
            {myForecast.main ? (myForecast.main.temp - 273.15).toFixed() : 0}°C
          </div>
          <div className="description">
            {myForecast.weather
              ? myForecast.weather.map((item) => item.description)
              : ""}
          </div>
          <div className="city">{myForecast.name}</div>
        </div>
      </StyledContainer>
      <StyledContainer>
        <div className="current">Tommorov</div>

        <div className="container">
          <div className="icon">
            <img
              src={`http://openweathermap.org/img/wn/${
                myTommorowForecast.list
                  ? myTommorowForecast.list[11].weather[0].icon
                  : "10d"
              }@2x.png`}
            />
          </div>
          <div className="temperature">
            {myTommorowForecast.list
              ? (myTommorowForecast.list[11].main.temp - 273.15).toFixed()
              : 0}
            °C
          </div>
          <div className="description">
            {myTommorowForecast.list
              ? myTommorowForecast.list[11].weather[0].description
              : ""}
          </div>
          <div className="city">
            {myTommorowForecast.city ? myTommorowForecast.city.name : ""}
          </div>
        </div>
      </StyledContainer>
    </TopLvlContainer>
  );
};
