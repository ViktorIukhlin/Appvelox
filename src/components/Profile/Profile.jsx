import React from 'react';
import Appointment from './Main/Appointment/Appointment';
import ElectronicCards from './Main/ElectronicСard/ElectronicCards';
import style from './Profile.module.css'
import jsonStore from '../../redux/jsonStore.json'

const Profile = (props) => {
  const componentDidMount = (store) => {
    fetch('../../redux/jsonStore.json/listOfRecords')
    .then((result) => {
  
      return result.json();
    }).then((jsonResult) => {
      console.log(jsonResult);
    })
  }
  componentDidMount(jsonStore);

  return (
    <div className={style.container}>
      <Appointment listOfRecords={props.store.getState().listOfRecords.listOfRecords} /> 
      <ElectronicCards /> 
    </div>
  )
}

export default Profile;


