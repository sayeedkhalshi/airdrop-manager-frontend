import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { api } from "./features/api.slice";
import { userSlice } from "./features/user.slice";
import { rightSidebarSlice } from "./features/rightSidebar.slice";

const rootReducer = combineReducers({
    [api.reducerPath]: api.reducer,
    [userSlice.reducerPath]: userSlice.reducer,
    [rightSidebarSlice.reducerPath]: rightSidebarSlice.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
