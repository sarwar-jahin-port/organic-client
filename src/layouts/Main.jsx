import React from 'react'
import { Header } from '../components/Header/Header'
import { Outlet, useLocation } from 'react-router-dom'
import { Footer } from '../components/Footer/Footer'

export const Main = () => {
  const location = useLocation();
  console.log(location);

  return (
    <>
        <Header></Header>
        <Outlet></Outlet>
        <Footer className='absolute bottom-0'></Footer>
    </>
  )
}
