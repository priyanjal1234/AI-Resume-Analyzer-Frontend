import React, { createContext, useEffect, useState } from "react";

export const UserDataContext = createContext();

const UserContext = ({ children }) => {
  const [user, setuser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : {};
  });

  const [isLoggedin, setisLoggedin] = useState(() => {
    const savedLoggedin = localStorage.getItem("isLoggedin");
    return savedLoggedin === 'true';
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);

  useEffect(() => {
    localStorage.setItem("isLoggedin", isLoggedin ? 'true' : 'false'); 
  }, [isLoggedin]);

  return (
    <UserDataContext.Provider
      value={{ user, setuser, isLoggedin, setisLoggedin }}
    >
      {children}
    </UserDataContext.Provider>
  );
};

export default UserContext;
