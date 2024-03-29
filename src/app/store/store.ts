import {configureStore} from "@reduxjs/toolkit";
import {rootReducer} from "./reducer";

export const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.APP_ENV !== "production",
});

export default store;
