import styled from "styled-components";
import { useSelector } from "react-redux";
import { forecast } from "../features/Test/TestSlice";

const StyledContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 20px 60px 20px 60px;
  margin-top: 15vh;
  font-family: Okta;
  border-radius: 10px;
  .temperature {
    font-size: 3rem;
    color: #1c3144;
    text-align: center;
  }
  .icon {
    margin-left: 9%;
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
  }
`;

export const Container = () => {
  const myForecast = useSelector(forecast);
  console.log("forecast", myForecast);
  return (
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
  );
};
