import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import userSlice from "./userSlice";

const Store = configureStore({
    reducer: { user: userSlice.reducer},
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat()
    ,
})

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default Store;