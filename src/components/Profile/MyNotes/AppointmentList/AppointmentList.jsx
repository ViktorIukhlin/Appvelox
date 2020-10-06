import React from 'react';
import AppointmentCard from '../../Main/Appointment/AppointmentCard/AppointmentCard';
import style from './AppointmentList.module.css'

const AppointmentList = ({listOfRecords}) => {
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
  return (
    <div className={style.container}>
       {AppointmentCards}
    </div>
  )
}

export default AppointmentList;