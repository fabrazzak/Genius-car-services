import React from 'react';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import facebook from '../../images/social/facebook.png'
import google from '../../images/social/google.png'
import github from '../../images/social/github.png'
import { useLocation, useNavigate } from 'react-router-dom';
import LoadingPages from '../LoadingPages/LoadingPages';

const SocialLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
    const [signInWithGithub, user2, loading2, error2] = useSignInWithGithub(auth);
    const [signInWithFacebook, user3, loading3, error3] = useSignInWithFacebook(auth);
    if ( user1) {
        navigate(from, { replace: true });
    }
    if (user2 || user3) {
        navigate(from, { replace: true });
    }
    if ( loading3) {
        return <LoadingPages></LoadingPages>
    }
    if (loading1 || loading2) {
        return <LoadingPages></LoadingPages>
    }
    let errorMessage;
    if (error1) {
        errorMessage = <div>
            <p className='text-danger fs-5'>Error: {error1?.message}</p>
        </div>

    }
    if (error2 || user3) {
        errorMessage = <div>
            <p className='text-danger fs-5'>Error: {error2?.message} {error3?.message} </p>
        </div>

    }

    const handleSignInWithGoogle = () => {
        signInWithGoogle();


    }
    const handleSignInWithGithub = () => {
        signInWithGithub();


    }
    const handleSignInWithFacebook = () => {
        signInWithFacebook();


    }
    return (
        <div>
            <div className='d-flex justify-content-center align-items-center'>
                <div className='form-empty-div'></div>
                <div ><p className='mx-3 mt-3 '>or</p></div>
                <div className='form-empty-div'></div>
            </div>
            <div>
                {errorMessage}
                <button className='btn-lg btn-primary w-100  fs-3 my-3' onClick={handleSignInWithFacebook}>
                    <img className='rounded rounded-circle me-3' height="50px" width='50px' src={facebook} alt="" />
                    Facebook Login</button>
                <button className='btn-lg btn-link text-decoration-none bg-white w-100  fs-3 my-3' onClick={handleSignInWithGoogle}>
                    <img className='rounded rounded-circle me-3' height="50px" width='50px' src={google} alt="" />
                    Google Login</button>
                <button className='btn-lg btn-link bg-white text-decoration-none w-100  fs-3 my-3'
                    onClick={handleSignInWithGithub}>
                    <img className='rounded rounded-circle me-3' height="50px" width='50px' src={github} alt="" />
                    Github Login</button>

            </div>
        </div>
    );
};

export default SocialLogin;