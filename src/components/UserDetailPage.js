import React, {useEffect} from 'react'
import Header from './innerComponents/Header'
import { useDispatch } from 'react-redux'
import {  useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { getUser } from '../actions/users';
import { TailSpin } from  'react-loader-spinner'

export default function UserDetailPage() {
    const { id } = useParams();
    const { user, isLoading } = useSelector((state) => state.users );
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getUser(id));
    }, [id, dispatch]);

    if(!user) return null;

    if(isLoading){
        return (<TailSpin color = 'green'/>)
    }
    return (
        <>
            <Header />
            <div className='container'>
                <div className="d-flex justify-content-between">
                    <h2 className="mb-4">User details</h2>
                    <button 
                        type="button" 
                        className="btn btn-success"  
                        onClick={() => navigate('/')}> Go Back
                    </button>
                </div>
                <div className ="row">
                    <div className ="col-4 d-none d-sm-inline-block">
                        <img src={user.avatar} alt={user.first_name} className="w-75" />
                    </div>
                    <div className ="col-8">
                    <table className="table w-100">
                        <tbody>
                            <tr>
                                <td className='fw-bold'>ID</td>
                                <td>{user.id}</td>
                            </tr>
                            <tr>
                                <td className='fw-bold'>First Name</td>
                                <td>{user.first_name}</td>
                            </tr>
                            <tr>
                                <td className='fw-bold'>Last Name</td>
                                <td>{user.last_name}</td>
                            </tr>
                            <tr>
                                <td className='fw-bold'>Email Address</td>
                                <td>{user.email}</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </>

    )
}
