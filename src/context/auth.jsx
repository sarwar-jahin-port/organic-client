import React, { useState, useContext, createContext, useEffect } from "react";

// Create context
const authContext = createContext()

// Make a function which returns authContext.Provider with a value
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });
  useEffect(()=>{
    const data = localStorage.getItem("auth");
    if(data){
      const parsedData = JSON.parse(data);
      setAuth(prevAuth => ({
        ...prevAuth,
        user: parsedData.user,
        token: parsedData.token,
      }))
    }
  }, [])
  // console.log(auth);
  return (
    <authContext.Provider value={[auth, setAuth]}>
      {children}
    </authContext.Provider>
  );
};

// make custom hooks like useAuth
const useAuth = () => useContext(authContext);

export {useAuth, AuthProvider}
// finally put anything under AuthProvider will be under the context. Here we are putting it over the whole app so in index.js 