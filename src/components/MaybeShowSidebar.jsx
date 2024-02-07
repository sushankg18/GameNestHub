import React, {useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom'
const MaybeShowSidebar = ({children}) => {
    const location = useLocation()
    const [showSidebar, setShowSidebar] =useState(false)
    useEffect(()=>{
        if(location.pathname === "/login" || location.pathname === "/signup"){
            setShowSidebar(false)
        }else{
            setShowSidebar(true)
        }
    }, [location])
  return (
    <div>
      {showSidebar && children}
    </div>
  )
}

export default MaybeShowSidebar
