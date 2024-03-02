import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
import { authReducer } from '../auth/authSlice';

import { persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);

const persistConfigAuth = {
  key: 'token',
  storage,
  blacklist: ['user'],
};

const persistedReducerAuth = persistReducer(persistConfigAuth, authReducer);

export const reducer = {
  contacts: persistedContactsReducer,
  filter: filterReducer,
  auth: persistedReducerAuth,
};
