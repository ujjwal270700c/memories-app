import React, { useContext, useEffect } from 'react'
import AuthContext from '../layouts/auth/AuthContext'


const Service = (props) => {
    const authContext=useContext(AuthContext)
    const {isAuthenticated, loadUser}=authContext;
    useEffect(() => {
       if(isAuthenticated){
           loadUser();
       }else{
           props.history.push('/login')
       }
    }, [isAuthenticated,props.history])
    return (
        <div>
            Sevice
        </div>
    )
}

export default Service
