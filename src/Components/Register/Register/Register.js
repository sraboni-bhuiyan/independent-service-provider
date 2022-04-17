import { updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../Firebase/Firebase.init';

const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

      const navigate = useNavigate();
      if(user){
          navigate('/checkout')
      }

    const handleRegister = event =>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;

        createUserWithEmailAndPassword(email, password)
    }

    return (
        <div className='container'>
            <div className=''>
            <form onSubmit={handleRegister} className='w-50 mx-auto mt-5 border border-dark px-5 py-3'>
                <h3 className='text-center fw-bold fst-italic'>Register
                </h3>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name='password' className="form-control" id="exampleInputPassword1" required/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Confirm Password</label>
                    <input type="password" name='confirmPassword' className="form-control" id="exampleInputPassword2" required/>
                </div>
                
                
                <div className='mb-3 w-75 mx-auto'>
                    <button type="submit" className="btn btn-dark w-100 py-3 rounded-pill">Register
                    </button>
                </div>
                <div className="mb-3 text-center">
                    <p>Already have an account? <Link to='/login' className='text-dark text-decoration-none'>Login</Link></p>
                </div>
                 {
                    error && <p className='text-danger'>{error.message}</p>
                }
                {
                    user && <p className='text-success'>User created successfully!</p>
                }
            </form>
            </div>
        </div>
    );
};

export default Register;