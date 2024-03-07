import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './routes/router';
import { HelmetProvider } from 'react-helmet-async';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './context/auth';
import {Provider} from "react-redux";
import { store } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <HelmetProvider>
      <React.StrictMode>
        <div className='max-w-screen-xl mx-auto'>
          <Provider store={store}>
            <RouterProvider router={router} />
          </Provider>
        </div>
        <ToastContainer/>
      </React.StrictMode>,
    </HelmetProvider>
  </AuthProvider>
)
