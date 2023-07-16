export const guestUser = {
    id: 'userId123',
    nickname: 'Eikichi Onizuka',
    email: 'onizuka@gto.com',
    Logs: [
      {
        id: 'logId123',
        userID: 'userId123',
        date: '2023-07-15',
        calories: 2500,
        fats: 90,
        carbs: 160,
        protein: 95,
        weight: 185,
        Exercises: [
          {
            id: 'exerciseId1',
            exercise: 'Running',
            date: '2023-07-15',
            duration: 40,
            logID: 'logId123',
          },
          {
            id: 'exerciseId2',
            exercise: 'Weightlifting',
            date: '2023-07-15',
            duration: 45,
            logID: 'logId123',
          },
        ],
      },
    //   nextday
      {
        id: 'logId456',
        userID: 'userId123',
        date: '2023-07-14',
        calories: 2300,
        fats: 70,
        carbs: 130,
        protein: 76,
        weight: 186,
        Exercises: [
          {
            id: 'exerciseId3',
            exercise: 'Cycling',
            date: '2023-07-14',
            duration: 60,
            logID: 'logId456',
          },
        ],
      },
    ],
  };
  

  