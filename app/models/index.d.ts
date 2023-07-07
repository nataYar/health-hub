import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nickname: string;
  readonly days: Day[];
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
  readonly days: AsyncCollection<Day>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerDay = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Day, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user: User;
  readonly timestamp: string;
  readonly calories?: number | null;
  readonly protein?: number | null;
  readonly carbs?: number | null;
  readonly exercises?: string | null;
  readonly weight?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userDaysId?: string | null;
}

type LazyDay = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Day, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user: AsyncItem<User>;
  readonly timestamp: string;
  readonly calories?: number | null;
  readonly protein?: number | null;
  readonly carbs?: number | null;
  readonly exercises?: string | null;
  readonly weight?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userDaysId?: string | null;
}

export declare type Day = LazyLoading extends LazyLoadingDisabled ? EagerDay : LazyDay

export declare const Day: (new (init: ModelInit<Day>) => Day) & {
  copyOf(source: Day, mutator: (draft: MutableModel<Day>) => MutableModel<Day> | void): Day;
}