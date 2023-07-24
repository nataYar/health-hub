import { DataStore } from "@aws-amplify/datastore";
import { Exercise, User, Log} from "../models";

export const createUserFn = async (nickname, email) => {
  try {
    const user = await DataStore.save(
      new User({
        nickname: nickname,
        email: email,
        Logs: [],
      })
    );
    return user;
  } catch (error) {
    console.log("Error saving new user:", error);
  }
};

export const getUserFn = async (email) => {
  try {
    const user = await DataStore.query(User, (p) => p.email.eq(email));
    return user[0];
  } catch (error) {
    console.log("Error saving new user:", error);
    console.log(error);
  }
};

export const manageWeightLogFn = async (userId, date, field, value) => {
  try {
    console.log(userId, date, field, value)
    const logsByDate = await DataStore.query(Log, (log) => log.date.eq(date));

    // check if the Log exists
    const logByUser = logsByDate.filter(log => log.userID
      === userId) 

    if (logByUser.length > 0) {
        // if exists, update the field
      await DataStore.save(
        Log.copyOf(logByUser[0], updated => {
          updated[field] = value
        })
      );
    } else {
        // if doesn't exist, create the Log
        await DataStore.save(
          new Log({
          "date": date,
          [field]: value,
          "userID": userId,
        })
      );
    }
  } catch (error) {
    console.log("Error saving new user:", error);
    console.log(error);
  }
};

export const manageLogFn = async (
  userId,
  date,
  calories,
  proteinVal,
  fatsVal,
  carbsVal,
  ) => {
  try {
    const logsByDate = await DataStore.query(Log, (log) => log.date.eq(date));
    // check if the Log exists
    const logByUser = logsByDate.filter(log => log.userID
      === userId) 
    if (logByUser.length > 0) {
        Log.copyOf(logByUser[0], (updated) => {
          // check if the values are provided and are different from the current values
          if (caloriesVal !== undefined && updated.calories !== caloriesVal) {
            updated.calories = updated.calories + caloriesVal;
          }
          if (proteinVal !== undefined && updated.protein !== proteinVal) {
            updated.protein = proteinVal;
          }
          if (fatsVal !== undefined && updated.fats !== fatsVal) {
            updated.fats = fatsVal;
          }
          if (carbsVal !== undefined && updated.carbs !== carbsVal) {
            updated.carbs = carbsVal;
          }
        })
    } else {
        // if doesn't exist, create the Log
        await DataStore.save(
          new Log({
          "date": date,
          "userID": userId,
          "calories": calories,
          "protein": proteinVal,
          "fats":  fatsVal,
          "carbs": carbsVal,
        })
      );
    }
  } catch (error) {
    console.log("Error saving new user:", error);
    console.log(error);
  }
};


export const createExerciseFn = async(userId, exercise, duration, date) => {
  try {
    await DataStore.save(
      new Exercise({
      "date": date,
      "userID": userId,
      'duration': duration,
      "exercise": exercise,
    })
  );
  } catch (error) {
    console.log("Error saving new user:", error);
    console.log(error);
  }
}