import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





type EagerExercise = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Exercise, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly exercise?: string | null;
  readonly date?: string | null;
  readonly duration?: number | null;
  readonly logID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyExercise = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Exercise, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly exercise?: string | null;
  readonly date?: string | null;
  readonly duration?: number | null;
  readonly logID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Exercise = LazyLoading extends LazyLoadingDisabled ? EagerExercise : LazyExercise

export declare const Exercise: (new (init: ModelInit<Exercise>) => Exercise) & {
  copyOf(source: Exercise, mutator: (draft: MutableModel<Exercise>) => MutableModel<Exercise> | void): Exercise;
}

type EagerLog = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Log, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userID: string;
  readonly date?: string | null;
  readonly calories?: number | null;
  readonly fats?: number | null;
  readonly carbs?: number | null;
  readonly weight?: number | null;
  readonly Exercises?: (Exercise | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyLog = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Log, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userID: string;
  readonly date?: string | null;
  readonly calories?: number | null;
  readonly fats?: number | null;
  readonly carbs?: number | null;
  readonly weight?: number | null;
  readonly Exercises: AsyncCollection<Exercise>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Log = LazyLoading extends LazyLoadingDisabled ? EagerLog : LazyLog

export declare const Log: (new (init: ModelInit<Log>) => Log) & {
  copyOf(source: Log, mutator: (draft: MutableModel<Log>) => MutableModel<Log> | void): Log;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nickname: string;
  readonly email?: string | null;
  readonly Logs?: (Log | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nickname: string;
  readonly email?: string | null;
  readonly Logs: AsyncCollection<Log>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}