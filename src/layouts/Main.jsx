import React from 'react'
import { Header } from '../components/Header/Header'
import { Outlet } from 'react-router-dom'
import { Footer } from '../components/Footer/Footer'

export const Main = () => {
  return (
    <>
        <Header></Header>
        <Outlet></Outlet>
        <Footer className='absolute bottom-0'></Footer>
    </>
  )
}
