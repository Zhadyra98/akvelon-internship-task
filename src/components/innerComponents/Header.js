import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LOGOUT } from '../../constants/actionTypes';

export default function Header() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userName = localStorage.getItem('email');

    const logoutButtonHandle = () => {
        dispatch({ type: LOGOUT});
        navigate('/login');
    }

    return (
        <header className="bg-success mb-5">
            <div className="container-lg d-flex align-items-center p-2">
                <div className="fs-2 flex-grow-1 d-flex gap-3 align-items-center">
                    <h5 className="h5 text-white d-none d-sm-inline-block">User Management</h5>
                </div>
                {userName ? (
                    <div className="gap-2 d-flex align-items-center">
                        <h5 className="h4 mx-3 text-white">Hi, {userName.split('@')[0]}</h5>
                        <button type="button" className="btn btn-outline-light rounded-pill px-4" onClick={logoutButtonHandle}>Logout</button>
                    </div>
                ) : (
                    null
                )}
            </div>
        </header>
    )
}
