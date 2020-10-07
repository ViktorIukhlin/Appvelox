import React from 'react';
import Appointment from './Main/Appointment/Appointment';
import ElectronicCards from './Main/ElectronicСard/ElectronicCards';
import style from './Profile.module.css';

const Profile = (props) => {
  return (
    <div className={style.container}>
      <Appointment listOfRecords={props.store.getState().listOfRecords.listOfRecords} /> 
      <ElectronicCards /> 
    </div>
  )
}

export default Profile;


