import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from "@reduxjs/toolkit";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import contactsReducer from "../redux/contacts/contactsSlices";
import authReduser from "../redux/auth/authSlice";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};
const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const rootReducer = combineReducers({
  contacts: contactsReducer,
  auth: persistReducer(authPersistConfig, authReduser),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
