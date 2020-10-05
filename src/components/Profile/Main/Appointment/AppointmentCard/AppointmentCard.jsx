import React from 'react';
import style from './AppointmentCard.module.css'

const AppointmentCard = ({date, time, hospitalName, photo, name, specialty}) => {
  return (
    <div className={style.container}>
      <div className={style.topBlock}>
        <h3>{date} | {time}</h3>
        <p>{hospitalName}</p>
      </div>
      <div className={style.bottomBlock}>
        <div className={style.profileBox}>
          <img
            className={style.photo}
            src={require(`../../../../../assets/images/${photo}`)}
            alt="photoD"
          />
          <div className={style.box}>
            <div className={style.boxName}>{name}</div>
            <div className={style.boxSpecialty}>{specialty}</div>
          </div>
        </div>
        <button>Отменить</button>
      </div>
    </div>
  )
}

export default AppointmentCard;