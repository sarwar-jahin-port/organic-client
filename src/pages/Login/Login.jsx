import React from 'react';
import navLogo from '../../assets/nav_logo.png';
import { Helmet } from 'react-helmet-async';
import { toast } from 'react-toastify';

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login form submitted.")
  }
  const notify = () => toast("Login form submitted.");
  return (
    <>
      <Helmet>
        <title>Organic Seeds | Login</title>
      </Helmet>
      <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
        <div className='flex justify-center'><img className='max-w-[150px]' src={navLogo} alt="" /></div>
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@company.com"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="terms"
              aria-describedby="terms"
              type="checkbox"
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-green-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-green-600 dark:ring-offset-gray-800"
              required
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">
              I accept the <a className="font-medium text-green-600 hover:underline dark:text-green-500" href="#">Terms and Conditions</a>
            </label>
          </div>
        </div>
        <div className="divider">OR</div>
        <div className='flex justify-center'>
          <button className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
            <div className="relative flex items-center space-x-6 justify-center">
              <img src="https://tailus.io/sources/blocks/social/preview/images/google.svg" className="absolute left-0 w-5" alt="google logo" />
              <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue with Google</span>
            </div>
          </button>
        </div>
        <button
          onClick={notify}
          type="submit"
          className="text-white w-full bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Login
        </button>
        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
          Don't have an account?
          {/* The button to open login modal */}
          {/* TODO: toggle register and login modal open close */}
          <label htmlFor="my_modal_6" className="font-medium text-green-600 hover:underline dark:text-green-500">Register</label>
        </p>
      </form>
    </>
  );
};

export default Login;
