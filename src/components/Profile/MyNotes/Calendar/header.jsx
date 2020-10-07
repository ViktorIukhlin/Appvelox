import React from 'react';
import style from "./Calendar.module.css"


export default function CalendarHeader({value, setValue}){
    
  function currMonthName() {
    return value.format("MMMM,")
  }

  function currYear() {
    return value.format("YYYY")
  }

  function prevMonth() {
    return value.clone().subtract(1, "month")
  }

  function nextMonth() {
    return value.clone().add(1, "month")
  }
  
  function thisMonth(){
    return value.isSame(new Date(), "month" )
  }

  return (
    <div className={style.header}>
      {/* <div className={style.previous} onClick={() => !thisMonth() && setValue(prevMonth())}> ///Если нужно что бы нельзя было выбирать предыдущие месяца
        {!thisMonth() ? String.fromCharCode(171) : null}
      </div> */}
      <div className={style.previous} onClick={() => setValue(prevMonth())}>
        {String.fromCharCode(60)}
      </div>
      <div className={style.current}>
          {currMonthName()} {currYear()}
      </div>
      <div className={style.next} onClick={() => setValue(nextMonth())}>
        {String.fromCharCode(62)}
      </div>
    </div>
  )
}
