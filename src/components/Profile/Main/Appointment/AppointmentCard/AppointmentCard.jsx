import React from 'react';
import style from './AppointmentCard.module.css'

const AppointmentCard = (props) => {
  return (
    <div className={style.container}>
      <div className={style.topBlock}>
        <h3>Понедельник 15.06.20 | 15:30</h3>
        <p>СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А</p>
      </div>
      <div className={style.bottomBlock}>
        <div className={style.profileBox}>
          <img
            className={style.photo}
            src={require('../../../../../assets/images/malushko.jpg')}
            alt="photoD"
          />
          <div className={style.box}>
            <div className={style.boxName}>Малушко Т.Н.</div>
            <div className={style.boxSpecialty}>Хирургия</div>
          </div>
        </div>
        <button>Отменить</button>
      </div>
    </div>
  )
}

export default AppointmentCard;