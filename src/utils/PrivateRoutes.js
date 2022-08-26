import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes = () => {

    let isAuthorized = (localStorage.getItem('profile')) ? true : false

    return(
        isAuthorized ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default PrivateRoutes