import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../Firebase/Firebase.init';
import google from '../../../images/google.png'

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate =  useNavigate();
    let errorElement;
    let loadingElement;

    if (error) {
        errorElement =  <div>
            <p className='text-danger text-center'>Error: {error.message}</p>
          </div>
    }
    if (loading) {
        loadingElement = <div>
        <p className='text-center'>Loading...</p>
      </div>
      }

    if(user){
        navigate('/home')
    }

    return (
        <div className=''>
            <div className='d-flex align-items-center'>
                <div style={{height: '1px'}} className='w-50 bg-dark'></div>
                <p className='mt-3 px-3'>OR</p>
                <div style={{height: '1px'}} className='w-50 bg-dark'></div>
            </div>
            <div className='mx-auto w-75'>
                {loadingElement}
                {errorElement}
                <button onClick={()=>signInWithGoogle()} className='btn btn-outline-secondary w-100 py-2 rounded-pill'>
                    <img src={google} style={{width: '40px'}} alt="" />
                    Google Sign In
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;