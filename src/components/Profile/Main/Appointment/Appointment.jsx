import React from 'react';
import style from './Appointment.module.css'
import AppointmentCard from './AppointmentCard/AppointmentCard';

const Appointment = (props) => {
  return (
    <div className={style.container}>
      <h3>Записи на прием</h3>
      <div className={style.cardsContainer}>
        <AppointmentCard />
        <AppointmentCard /> 
      </div>
    </div>
  )
}

export default Appointment;