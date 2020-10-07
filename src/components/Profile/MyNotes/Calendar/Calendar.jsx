import React, { useState,useEffect } from 'react';
import style from './Calendar.module.css';

import buildCalendar from './build';
import dayStyles, { beforeToday } from "./styles";
import Header from "./header"

const Calendar = ({value, onChange}) => {
  const [calendar, setCalendar] = useState([]);
  

  useEffect(() => {
    setCalendar(buildCalendar(value));
  }, [value]);

  return (
    <div className={style.calendar}>
      <Header value={value} setValue={onChange}/>
      <div className={style.body}>
        <div className={style.dayNames}>
          {["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"].map((d) =>(
            <div className={style.week}>{d}</div>
          ))}
        </div>
        {calendar.map((week) => (
          <div>
            {week.map((day) => (
              <div className={style.day}
                onClick={() => !beforeToday(day) && onChange(day)}
              >
                <div
                  className={dayStyles(day, value)}
                >
                  {day.format("D").toString()}
                </div> 
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calendar;