import React from 'react'
import Header from './innerComponents/Header'
import { useNavigate } from 'react-router-dom'

export default function NotFoundPage() {
    const navigate = useNavigate();

    return (
        <>
            <Header/>
            <div className='container text-center'>
                <h1 className='text-secondary'>404</h1>
                <h2 className='mb-3'>Page Not Found</h2>
                <h4 className='text-secondary mb-3'>The page you're looking for does not seem to exist</h4>
                <button 
                        type="button" 
                        className="btn btn-success"  
                        onClick={() => navigate('/')}> Go Home
                    </button>
            </div>
        </>
    )
}
