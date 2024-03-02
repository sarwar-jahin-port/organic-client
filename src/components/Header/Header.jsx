import React, { useEffect, useRef } from 'react'
import navLogo from '../../assets/nav_logo.png'
import { Link } from 'react-router-dom';
import Register from '../../pages/Register/Register';
import Login from '../../pages/Login/Login';
import { useAuth } from '../../context/auth.jsx';
import { toast } from 'react-toastify';

export const Header = () => {
  const openLoginRef = useRef(null);
  const closeRegisterRef = useRef(null);
  const[auth, setAuth] = useAuth();
  // console.log(auth);
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: ""
    })
    localStorage.removeItem("auth");
    console.log("logout triggered");
    toast.success("Logout Successfully");
  }

  // useEffect(()=>{}, [auth]);

  const navSearch = <>
  <div className="flex items-center bg-white rounded-lg shadow-md w-full px-2">
            <input
                type="text"
                className="pl-10 pr-4 py-2 w-full bg-white rounded-lg focus:outline-none"
                placeholder="I'm Shopping for..."
              />
            <svg
              className="h-5 w-5 ml-3 text-gray-400 cursor-pointer"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a6 6 0 11-12 0 6 6 0 0112 0z"
              />
            </svg>
          </div></>
  return (
    <>
    <div className="navbar bg-base-100">
      <div className="flex-1 gap-10">
        <Link to='/'><img className='max-w-[150px]' src={navLogo} alt="" /></Link>
        <div className='hidden md:block w-full'>
          {navSearch}
        </div>
      </div>
        <div className="flex-none ml-10">
          
          {/* TODO: toggle between profile pic and login according to login status. */}
          {auth?.user ? 
          <>
          <div className="dropdown dropdown-end z-10">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </label>
            <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
              <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">View cart</button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end z-10">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li onClick={handleLogout}><a>Logout</a></li>
            </ul>
          </div>
          </>
          :
          <>
            <>
              {/* The button to open modal */}
              <button className="btn btn-sm btn-outline btn-success mr-2" onClick={()=>document.getElementById('my_modal_1').showModal()}>Register</button>
                <>
                  <dialog id="my_modal_1" className="modal">
                  <div className="modal-box">
                        <Register openLoginRef={openLoginRef} closeRegisterRef={closeRegisterRef}></Register>
                        <div className="modal-action">
                          <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button ref={closeRegisterRef} className="btn">Close</button>
                          </form>
                        </div>
                  </div>
                  </dialog>
                </>
            </>
            <>
              {/* The button to open modal */}
              <button className="btn btn-sm btn-outline btn-success" ref={openLoginRef} onClick={()=>document.getElementById('my_modal_2').showModal()}>Login</button>
                <>
                  <dialog id="my_modal_2" className="modal">
                  <div className="modal-box">
                        <Login></Login>
                        <div className="modal-action">
                          <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                          </form>
                        </div>
                  </div>
                  </dialog>
                </>
            </>
          </>
          }
        </div>
    </div>
    <div className='md:hidden w-11/12 mx-auto'>
      {navSearch}
    </div>
    </>
  )
}
