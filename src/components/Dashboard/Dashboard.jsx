import React from 'react'
import { useAuth } from '../../context/auth'

const Dashboard = () => {
    const [auth, setAuth] = useAuth();
    
  return (
    <div className='ml-2'>{auth?.user?.email}</div>
  )
}

export default Dashboard