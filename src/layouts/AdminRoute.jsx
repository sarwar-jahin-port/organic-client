import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/auth';
import { Navigate, useLocation } from 'react-router-dom';
import axios from 'axios';

export const AdminRoute = ({children}) => {
    console.log("on private");
    const [auth, setAuth] = useAuth();
    const [ok, setOk] = useState(null);
    const location = useLocation();
    
    useEffect(()=>{
      const authCheck = async() => {
        const res = await axios.get("http://localhost:5050/api/v1/auth/admin-auth",
        {
          headers: {
            "Authorization": auth?.token,
          }
        })
        console.log(res.data.ok);
        res.data.ok ? setOk(true) : setOk(false);
      }
      if(auth?.token) authCheck();
      else setOk(false);
    },[auth?.token])
    
    if(ok===null){
      return <div className='h-screen'>Loading...</div>
    }
    return ok 
      ? <div>{children}</div> 
      : <Navigate to="/admin" state={{ isLogin: true, location: location.pathname }}></Navigate>
}
