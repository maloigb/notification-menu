import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { notificationAPI } from "../services/NotificationService";

const rootReducer = combineReducers ({
    [notificationAPI.reducerPath]: notificationAPI.reducer
})

export const setupStore = () => {

    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(notificationAPI.middleware)
    })
};


export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];