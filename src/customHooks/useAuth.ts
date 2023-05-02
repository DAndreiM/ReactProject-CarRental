import {useEffect} from 'react';
import { useAppDispatch, useAppSelector } from '../store/Store';
import { onAuthStateChanged } from 'firebase/auth';
import { userSliceAction } from '../store/userSlice';
import { auth } from '../firebase-config';

const useAuth = () => {
    const dispatch = useAppDispatch();
    const currentUser = useAppSelector(item => item.user.currentUser)
    console.log(currentUser);
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user){
                dispatch(userSliceAction.setUser(user))
            } else
            {
                dispatch(userSliceAction.setUser(null))     }
        })

    })
    return {currentUser}
}

export default useAuth;