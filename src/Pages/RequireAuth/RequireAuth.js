import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import LoadingPages from '../LoadingPages/LoadingPages';



const RequireAuth = ({children}) => {
    const [user,loading,error] = useAuthState(auth);
    const location=useLocation();
    const [sendEmailVerification, sending, error1] = useSendEmailVerification(auth);

    if(loading){
        return <LoadingPages></LoadingPages>
    }
    if(!user){
        return<Navigate to="/login" state={{from:location}} replace></Navigate>
    }
    if(user?.providerData[0]?.providerId=== "password" && !user.emailVerified){
        return<div className='mx-auto text-center py-5 '>
            <h3 className="text-danger">Your email is not verified !</h3>
            <h5 className='text-primary'> Please verified your email address.</h5>
            < button className='btn btn-primary btn-lg my-3'
                onClick={async () => {
                    await sendEmailVerification();
                    alert('Sent email');
                }}
            >
                Verify email
            </ button>
        </div>
    }

    return children;
};

export default RequireAuth;