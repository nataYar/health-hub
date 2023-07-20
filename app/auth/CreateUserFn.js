import { DataStore } from '@aws-amplify/datastore';
import { User } from '../models';

export const createUserFn = async (nickname, email) => {
      // CREATE
      await DataStore.save(
        new User({
          nickname: nickname,
          email: email,
          Logs: [],
        })
      );
  };

