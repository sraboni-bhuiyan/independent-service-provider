import React, { useRef } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../Firebase/Firebase.init';

const Login = () => {

    const emailRef = useRef('');
    const passwordRef = useRef('')
    const navigate = useNavigate();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      if(user){
          navigate('/checkout')
      }

    const handleSubmit = event =>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password)
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
                </div>
                
                <div className='mb-3 w-75 mx-auto'>
                    <button type="submit" className="btn btn-dark w-100 py-3 rounded-pill">Login
                    </button>
                </div>
                <div className="mb-3 text-center">
                    <p>Need an account? <Link to='/register' className='text-dark text-decoration-none'>Sign Up</Link></p>
                </div>
            </form>
            </div>
        </div>
    );
};

export default Login;