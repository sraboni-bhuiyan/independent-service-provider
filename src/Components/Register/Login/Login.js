import { async } from '@firebase/util';
import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../Firebase/Firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {

    const emailRef = useRef('');
    const passwordRef = useRef('')
    const navigate = useNavigate();
    let errorElement;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

      if(user){
          navigate('/checkout')
      }
      if (error) {
        errorElement =  <div>
            <p className='text-danger text-center'>Error: {error.message}</p>
          </div>
        }

    const handleSubmit = event =>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password)
    }

    const resetPassword = async() =>{
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
          alert('Sent email');
    }


    return (
        <div className='container'>
            <div className=''>
            <form onSubmit={handleSubmit} className='w-50 mx-auto mt-5 border border-dark px-5 py-3'>
                <h3 className='text-center fw-bold fst-italic'>Login
                </h3>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input ref={emailRef} type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input ref={passwordRef} type="password" name='password' className="form-control" id="exampleInputPassword1" required/>
                    <div className='d-flex justify-content-end'>
                    <p><Link to='/login' className='text-dark text-decoration-none fst-italic' onClick={resetPassword}>Forgot password?</Link></p>
                    </div>
                </div>
                
                <div className='mb-3 w-75 mx-auto'>
                    <button type="submit" className="btn btn-outline-dark w-100 py-3 rounded-pill">Login
                    </button>
                    {errorElement}
                </div>
                <div className="mb-3 text-center">
                    <p>Need an account? <Link to='/register' className='text-dark text-decoration-none fw-bold'>Sign Up</Link></p>
                </div>
                <SocialLogin></SocialLogin>
            </form>
            </div>
        </div>
    );
};

export default Login;