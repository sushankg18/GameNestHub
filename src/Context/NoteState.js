// NoteState.js
import { createContext, useState, useEffect } from "react";

const NoteContext = createContext();

const NoteState = (props) => {
  const [LoginStatus, setLoginStatus] = useState(false);
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  useEffect(() => {
    const savedLoginStatus = localStorage.getItem("LoginStatus");

    if (savedLoginStatus ) {
      setLoginStatus(true);
    }
  }, []);

  const logout = () => {
    setLoginStatus(false);
    setUserEmail(null)
    localStorage.removeItem('LoginStatus');
  };

  const setAuthenticatedUser = (user) => {
    setLoginStatus(true);
    localStorage.setItem('LoginStatus', 'true');
  };
 
  return (
    <NoteContext.Provider value={{ LoginStatus, setLoginStatus, userName, setUserName,userEmail, setUserEmail,  logout, setAuthenticatedUser }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export { NoteState, NoteContext };
