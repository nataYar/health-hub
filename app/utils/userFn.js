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

    // const foundLog = await DataStore.query(Log, (log) => 
    // log.date.eq(date).and(log.userID.eq(userId))
    // );
    console.log(logsFilteredByDateAndId )

    // if (foundLog.length === 0) {
    //   console.log("Log not found.");
    //   const newLog = await DataStore.save(
    //     new Log({
    //       date: date,
    //       field: value,
    //     })
    //   );
    //   return newLog;
    // } else {
    //   const updatedLog = await DataStore.save(
    //     Log.copyOf(foundLog, (updated) => {
    //       updated[field] = newTitle;
    //     })
    //   );
    //   return updatedLog;
    // }
  } catch (error) {
    console.log("Error saving new user:", error);
    console.log(error);
  }
};
