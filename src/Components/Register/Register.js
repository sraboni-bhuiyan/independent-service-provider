import React, { useState } from 'react';

const Register = () => {

    const [login, setLogin] = useState(false);


    return (
        <div className='container'>
            <div className=''>
            <form className='w-50 mx-auto mt-5 border border-dark px-5 py-3'>
                <h3 className='text-center fw-bold fst-italic'>
                    {login ? 'Login' : 'Register'}
                </h3>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                {
                    !login && <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword2"/>
                    </div>
                }
                
                <div className='mb-3 w-75 mx-auto'>
                    <button type="submit" className="btn btn-dark w-100 py-3 rounded-pill">
                        {login ? 'Login' : 'Register'}
                    </button>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={()=>setLogin(!login)}/>
                    <label className="form-check-label" for="exampleCheck1">Already have an account?</label>
                </div>
            </form>
            </div>
        </div>
    );
};

export default Register;