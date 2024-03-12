import React from 'react'
import { TopBanner } from './TopBanner/TopBanner'
import { Marketing } from './Marketing/Marketing'
import { Body } from './Body/Body'
import { Helmet } from 'react-helmet-async'
// import { useAuth } from '../../context/auth'

export const Home = () => {
  // const [auth, setAuth] = useAuth();
  // console.log(auth);
  return (
    <>
      <Helmet>
        <title>Organic Seeds | Home</title>
      </Helmet>
      <TopBanner></TopBanner>
      <div className="md:grid md:grid-cols-8 md:gap-10 my-10">
        <div className='col-span-2'>
          <Marketing></Marketing>
        </div>
        <div className='col-span-6'>
          <Body></Body>
        </div>
      </div>
    </>
  )
}
