// NoteState.js
import { createContext, useState, useEffect } from "react";

const NoteContext = createContext();

const NoteState = (props) => {
  const [LoginStatus, setLoginStatus] = useState(false);
  useEffect(() => {
    const savedLoginStatus = localStorage.getItem("LoginStatus");

    if (savedLoginStatus ) {
      setLoginStatus(true);
    }
  }, []);

  const logout = () => {
    setLoginStatus(false);
    localStorage.removeItem('LoginStatus');
  };

  const setAuthenticatedUser = (user) => {
    setLoginStatus(true);
    localStorage.setItem('LoginStatus', 'true');
  };

  return (
    <NoteContext.Provider value={{ LoginStatus, setLoginStatus,  logout, setAuthenticatedUser }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export { NoteState, NoteContext };
