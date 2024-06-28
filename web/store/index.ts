import {combineReducers, configureStore} from "@reduxjs/toolkit";

import app from "./state/app";

const rootReducer = combineReducers({
    app
});

const store = configureStore({
    reducer: rootReducer
});

export default store;

export type InitState = ReturnType<typeof rootReducer>;
