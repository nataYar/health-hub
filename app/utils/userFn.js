import { DataStore, Predicates } from "@aws-amplify/datastore";
import { Log} from "../models";

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

export const manageLogFn = async (userId, date, field, value) => {
  try {
    console.log(userId, date, field, value)
    const logsByDate = await DataStore.query(Log, (log) => log.date.eq(date));
    console.log(logsByDate)

    // check if the Log exists
    const logByUser = logsByDate.filter(log => log.userID
      === userId)
      console.log(logByUser.length)

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
          "Exercises": [],
        })
      );
    }
  } catch (error) {
    console.log("Error saving new user:", error);
    console.log(error);
  }
};
