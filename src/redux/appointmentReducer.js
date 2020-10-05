let initialState = {
  listOfRecords: [
      { id: 1, 
        date: 'Понедельник 15.06.20', 
        time: '15:30', 
        hospitalName: 'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А',
        photo: 'malushko.jpg',
        name: 'Малушко Т.Н.',
        specialty: 'Хирургия'
      },
      { id: 2, 
        date: 'Понедельник 15.06.20', 
        time: '18:30', 
        hospitalName: 'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А',
        photo: 'harkov.jpg',
        name: 'Харьков В. С.',
        specialty: 'Хирургия'
      },
      { id: 3, 
        date: 'Понедельник 15.06.20', 
        time: '15:30', 
        hospitalName: 'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А',
        photo: 'malushko.jpg',
        name: 'Малушко Т.Н.',
        specialty: 'Терапевтическое отделение'
      },
      { id: 4, 
        date: 'Понедельник 15.06.20', 
        time: '15:30', 
        hospitalName: 'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А',
        photo: 'harkov.jpg',
        name: 'Харьков В. С.',
        specialty: 'Хирургия'
      },
      { id: 5, 
        date: 'Понедельник 15.06.20', 
        time: '15:30', 
        hospitalName: 'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А',
        photo: 'malushko.jpg',
        name: 'Малушко Т.Н.',
        specialty: 'Терапевтическое отделение'
      }
  ]
}

const appointmentReducer = (state = initialState, action) => {
  return state;
}

export default appointmentReducer;