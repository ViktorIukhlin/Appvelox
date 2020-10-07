import React from 'react';
import Appointment from './Main/Appointment/Appointment';
import ElectronicCards from './Main/ElectronicСard/ElectronicCards';
import style from './Profile.module.css';
import json from '../../redux/jsonStore.json'

const Profile = (props) => {
  return (
    <div className={style.container}>
      <Appointment listOfRecords={json.listOfRecords} /> 
      <ElectronicCards /> 
    </div>
  )
}

export default Profile;


