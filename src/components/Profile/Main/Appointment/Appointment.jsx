import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Appointment.module.css'
import AppointmentCard from './AppointmentCard/AppointmentCard';

const Appointment = ({listOfRecords}) => {
  let AppointmentCards = listOfRecords.map(
    item => <AppointmentCard 
    id ={item.id} 
    date={item.date} 
    time={item.time} 
    hospitalName={item.hospitalName}
    photo={item.photo}
    name={item.name}
    specialty={item.specialty}
    />
  )
  let count = listOfRecords.length - 2;
  return (
    <div className={style.container}>
      <div className={style.title}>Записи на прием</div>
      <div className={style.cardsContainer}>
        {AppointmentCards[0]}
        {AppointmentCards[1]}
        <div className={style.textBox}>
          <div className={style.text}>Еще {count} записи</div>
          <NavLink to="/profile/myNotes" className={style.textLink} >Подробнее</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Appointment;