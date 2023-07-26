import { DataStore } from "@aws-amplify/datastore";
import { Exercise, User, Log } from "../models";

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

export const saveLogFieldFn = async (userId, date, field, value) => {
  try {
    console.log(userId, date, field, value);
    const logsByDate = await DataStore.query(Log, (log) => log.date.eq(date));

    // check if the Log exists
    const logByUser = logsByDate.filter((log) => log.userID === userId);

    if (logByUser.length > 0) {
      // if exists, update the field
      await DataStore.save(
        Log.copyOf(logByUser[0], (updated) => {
          updated[field] = value;
        })
      );
    } else {
      // if doesn't exist, create the Log
      await DataStore.save(
        new Log({
          date: date,
          [field]: value,
          userID: userId,
        })
      );
    }
  } catch (error) {
    console.log("Error saving new user:", error);
    console.log(error);
  }
};

export const saveLogFn = async (
  userId,
  date,
  caloriesVal,
  proteinVal,
  fatsVal,
  carbsVal
) => {
  try {
    const logsByDate = await DataStore.query(Log, (log) => log.date.eq(date));
    // check if the Log exists
    const logByUser = logsByDate.filter((log) => log.userID === userId);

    if (logByUser.length > 0) {
       await DataStore.save(Log.copyOf(logByUser[0], (updated) => {
        // check if the values are provided and are different from the current values
        if (caloriesVal !== undefined && updated.calories !== caloriesVal) {
          updated.calories = updated.calories + caloriesVal;
        }
        if (proteinVal !== undefined ) {
          updated.protein =  updated.protein + proteinVal;
        }
        if (fatsVal !== undefined) {
          updated.fats =  updated.fats + fatsVal;
        }
        if (carbsVal !== undefined ) {
          updated.carbs =  updated.carbs +carbsVal;
        }
      }));
    } else {
      // if doesn't exist, create the Log
      await DataStore.save(
        new Log({
          date: date,
          userID: userId,
          calories: caloriesVal,
          protein: proteinVal,
          fats: fatsVal,
          carbs: carbsVal,
        })
      );
    }
  } catch (error) {
    console.log("Error saving new user:", error);
    console.log(error);
  }
};

export const saveExerciseFn = async (userId, exercise, duration, date) => {
  try {
    await DataStore.save(
      new Exercise({
        date: date,
        userID: userId,
        duration: duration,
        exercise: exercise,
      })
    );
  } catch (error) {
    console.log("Error saving new user:", error);
    console.log(error);
  }
};

export const getLogFn = async (userId) => {
  const logsByUser = await DataStore.query(Log, (log) => log.userID.eq(userId));
  console.log(logsByUser)
  return logsByUser;
};

export const getExerciseFn = async (userId) => {
  const exerciseByUser = await DataStore.query(Exercise, (el) =>
    el.userID.eq(userId)
  );
  return exerciseByUser;
};

export const deleteExerciseFn = async (logID) => {
  const modelToDelete = await DataStore.query(Exercise, logID);
  DataStore.delete(modelToDelete);
};

export const saveGoals = async (userId, caloriesGoal, weightGoal, date) => {
  try {
    console.log(userId, caloriesGoal, weightGoal)
    const logs = await DataStore.query(Log, (log) => log.userID.eq(userId));
    const lastLog = logs[logs.length - 1];

    if (logs.length > 0) {
      // if exists, update the field
      await DataStore.save(
        Log.copyOf(lastLog, (updated) => {
          updated.caloriesGoal = caloriesGoal;
          updated.weightGoal = weightGoal;
          updated.date= date
        })
      );
    } else {
      // if doesn't exist, create the Log
      await DataStore.save(
        new Log({
          caloriesGoal: caloriesGoal,
          weightGoal: weightGoal,
          userID: userId,
          date: date,
        })
      );
    }
  } catch (error) {
    console.log("Error saving new user:", error);
    console.log(error);
  }
};
