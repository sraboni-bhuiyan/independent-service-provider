import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';

const Checkout = () => {
    const [user] = useAuthState(auth);
    const {email, displayName, phoneNumber} = user;
    console.log(user)

    const submitData = () =>{
        alert('Thank you for the booking')
    }

    return (
        <div className='container w-50'>
            <h3 className='my-5 text-center fw-bold fst-italic'>Checkout</h3>
            <form className="form">
            <label className='my-3' htmlFor="">Your Name</label>
                <input type="name" className="form-control" id="floatingInputValue" placeholder="Your name" value={displayName}/>
                <label className='my-3' htmlFor="">Your Email</label>
                <input type="email" className="form-control" id="floatingInputValue" placeholder="name@example.com" value={email}/>
                <label className='my-3' htmlFor="">Your Phone Number</label>
                <input type="email" className="form-control" id="floatingInputValue" placeholder="+1234567890" value={phoneNumber}/>
                <div className='mt-3 w-50 mx-auto'>
                    <button type="submit" className="btn btn-outline-dark w-100 py-3 rounded-pill" onClick={submitData}>Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Checkout;