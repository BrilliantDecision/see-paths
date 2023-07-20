import { combineReducers, configureStore } from "@reduxjs/toolkit";
import routeReducer from "./reducers/route/route";
import mapReducer from "./reducers/map/map";
import createSagaMidleware from "redux-saga";

const rootReducer = combineReducers({
  routeReducer,
  mapReducer,
});
export const sagaMiddlewaere = createSagaMidleware();

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddlewaere],
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
