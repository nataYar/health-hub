// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Exercise, Log, User } = initSchema(schema);

export {
  Exercise,
  Log,
  User
};