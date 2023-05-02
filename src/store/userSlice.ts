import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type { AppDispatch } from './Store';
import { auth } from '../firebase-config';
import { updateProfile,signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import {doc, setDoc} from 'firebase/firestore';
import { db } from '../firebase-config';
import {redirect} from 'react-router-dom';

type initialStateType = {
    currentUser: any,
    isLoading: boolean,
    error: string,
}

const initialState: initialStateType = {
    currentUser: null,
    isLoading: false,
    error: ''
}

const userSlice = createSlice({
    name: 'userSlice',
    initialState: initialState,
    reducers:{
        setUser(state, action: PayloadAction<any>){
            state.currentUser = action.payload;
        },
        setLoading(state, action:PayloadAction<boolean>){
            state.isLoading = action.payload;
        },
        setError(state, action:PayloadAction<string>){
            state.error = action.payload;
        }
    }
})

export const userSliceAction = userSlice.actions;
export default userSlice;

export function signUp(email:string, password:string, userName:string){
    return async function(dispatch: AppDispatch){
        try{
        dispatch(userSliceAction.setError(''));
        dispatch(userSliceAction.setLoading(true));
        
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password);

        const user = userCredentials.user;

        await updateProfile(user, {
            displayName: userName
        })

        await setDoc(doc(db, 'users', user.uid), {
            email: user.email,
            displayName: user.displayName,
            uid: user.uid,
            role: [{user:true}],
        })

        dispatch(userSliceAction.setUser(user));
        dispatch(userSliceAction.setLoading(false));
        return true;
        } catch(error: any){
            console.log(error);
            dispatch(userSliceAction.setError(error.message));
        }
        dispatch(userSliceAction.setLoading(false));
    }
}

export function login(email:string, password:string){
    return async function(dispatch: AppDispatch){
        try{
            dispatch(userSliceAction.setError(''))
            dispatch(userSliceAction.setLoading(true));
            const userCredentials = await signInWithEmailAndPassword(auth ,email, password);

            const user = userCredentials.user;

            dispatch(userSliceAction.setUser(user));
            dispatch(userSliceAction.setLoading(false));
            return true;
        }catch(error:any){
            console.log(error);
            dispatch(userSliceAction.setError(error.message));
        }
        dispatch(userSliceAction.setLoading(false));
    }
}

export async function logOut(){
    return function(dispatch: AppDispatch){
        signOut(auth).then(() => redirect('/')).catch(err => {
            console.log(err);
            dispatch(userSliceAction.setError(err.message))
        });
    }
}