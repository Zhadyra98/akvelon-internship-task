import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { signup } from '../actions/auth';

export default function RegistrationPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorText, setError] = useState('')
    const [passwordConfirm, setPasswordConfirm] =useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleRegisterUser = (event) => {
        event.preventDefault();
        if(email && password && passwordConfirm){
            if(password === passwordConfirm) {
                dispatch(signup( email, password, navigate));
            }
            else setError('The passwords do not match')
        }
        else setError('Please fill out all fields')
    }

    return (
        <div className='container'>
            <div className="row justify-content-center mt-5">
                <div className="col-9 col-xs-8 col-sm-7 col-md-6 col-lg-4 text-center">
                    <h1 className='h2 mb-3 font-weight-normal'>Register</h1>
                    <form onSubmit={handleRegisterUser} onChange = {() => setError('')}>
                        <input 
                            className='form-control mb-2'
                            placeholder='Email Address'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            autoFocus
                        />
                        <input 
                            className='form-control mb-2'
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                        />
                        <input 
                            className='form-control'
                            placeholder='Confirm Password'
                            value={passwordConfirm}
                            onChange={(e) => setPasswordConfirm(e.target.value)}
                            type="password"
                        />
                        <p className='error h6 text-danger mt-2'>{errorText}</p>
                        <div className="my-3">
                            <input className='btn btn-success btn-lg w-100' type="submit" value="Sign Up"/>
                        </div>
                            <a href="/login" className="link-success">Login</a>
                    </form>
                </div>
            </div>
        </div>
    )
}
