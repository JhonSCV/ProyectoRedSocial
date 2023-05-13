import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { register, logIn } from './AuthSlice';
import { auth } from '../../../firebase/config';

export const registerAuth = (email, password) => {
    return async (dispatch) => {
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            if (response) {
                await updateProfile(auth.currentUser, {
                    displayName: 'A.',
                    photoURL: ''
                });

                const { email } = response.user;
                dispatch(register({email}));
                return true;
            }
        } catch (error) {
            alert(error.message);
            return false;
        }
    }
}

export const loginAuth = (email, password) => {
    return async (dispatch) => {
        try {
            const response = await signInWithEmailAndPassword(auth, email, password)
            if (response) {
                dispatch(logIn({email, password, status: "Logged."}))
                return true;
            }
        } catch (error) {
            alert(error.message);
            return false;   
        }
    }
}