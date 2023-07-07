// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Day } = initSchema(schema);

export {
  User,
  Day
};