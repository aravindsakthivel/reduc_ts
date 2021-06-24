import { repoReducer } from "./repositoriesReducers";
import { combineReducers } from "redux";


export const rootReducer = combineReducers({
  repositories: repoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;