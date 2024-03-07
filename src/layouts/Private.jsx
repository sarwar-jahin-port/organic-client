import React from 'react'
import { useAuth } from '../context/auth';
import { useDispatch } from 'react-redux';
import { loginToggle } from '../redux/features/modal/modalSlice';
import { Navigate } from 'react-router-dom';

export const Private = ({children}) => {
    console.log("on private");
    // const openLoginRef = useRef(null);
    const [auth, setAuth] = useAuth();
    const dispatch = useDispatch();
    if(!auth.user){
      dispatch(loginToggle());
      return <Navigate to="/" state={{ isLogin: true }}></Navigate>
    }
  return (
    <div>{children}</div>
  )
}
