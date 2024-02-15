import { createContext, useState, useEffect } from "react";

const NoteContext = createContext();

const NoteState = (props) => {
  const [LoginStatus, setLoginStatus] = useState(false);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const savedLoginStatus = localStorage.getItem("LoginStatus");
    const savedUserEmail = localStorage.getItem("userEmail");

    if (savedLoginStatus === "true" && savedUserEmail) {
      setLoginStatus(true);
      setUserEmail(savedUserEmail);
    }
  }, []); 

  const logout = () => {
    setLoginStatus(false);
    setUserEmail(''); // Clear userEmail on logout
    localStorage.removeItem('LoginStatus');
    localStorage.removeItem('userEmail');
  };

  const setAuthenticatedUser = (user) => {
    setLoginStatus(true);
    setUserEmail(user.user.email);
    localStorage.setItem('LoginStatus', 'true');
    localStorage.setItem('userEmail', user.user.email);
  };

  return (
    <NoteContext.Provider value={{ LoginStatus, setLoginStatus, userName, setUserName, userEmail, setUserEmail,  logout, setAuthenticatedUser }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export { NoteState, NoteContext };
