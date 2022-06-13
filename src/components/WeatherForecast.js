import { useEffect, useState } from "react";
import axios from "../helpers/axios";
import { showMonth, showDay } from "../helpers/showDate";
import * as React from "react";

const WeatherForecast = () => {
  const [daysList, setDaysList] = useState([]);
  const [selectedDay, setSelectedDay] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [isActive, setActive] = useState("");

  const handleClickDay = (selectedDay) => () => {
    setSelectedDay(selectedDay);
    setActive(selectedDay.id);
  };

  useEffect(() => {
    setLoading(true);
    axios.get("/rtx/api/forecast").then((objectData) => {
      setDaysList(objectData.data.slice(0, 7));
      setSelectedDay(objectData.data.slice(0, 1)[0]);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <h1>Weather forecast</h1>
      {isLoading ? (
        <p className="large-text-temp">LOADING...</p>
      ) : (
        <>
          <div className="selected-day">
            <div className="box-selected-day">
              <div className={`${selectedDay.type}-selected`}>
                <p className="large-text">{showDay(selectedDay.day)}</p>
                <p className="large-text">
                  {new Date(selectedDay.day).getDate()}{" "}
                  {showMonth(selectedDay.day)}
                </p>
              </div>
            </div>
            <div>
              <p className="extra-large-text" title="Температура воздуха">
                {selectedDay.temperature}
                {"\u00b0"}
              </p>
              <span className="large-text humidity" title="Влажность">
                {selectedDay.humidity}
              </span>
              <span
                className="large-text rain_probability"
                title="Вероятность дождя"
              >
                {selectedDay.rain_probability}
              </span>
            </div>
          </div>
          <ul className="list">
            {daysList.map((element) => (
              <li key={element.id} onClick={handleClickDay(element)}>
                <div
                  className={`list-item ${element.type} ${
                    isActive === element.id ? "active " : ""
                  }`}
                >
                  <p className="small-text">{showDay(element.day)}</p>
                  <p className="small-text">
                    {new Date(element.day).getDate()} {showMonth(element.day)}
                  </p>
                  <p className="large-text-temp">
                    {element.temperature}
                    {"\u00b0"}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default WeatherForecast;
