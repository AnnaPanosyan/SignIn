import React from 'react'
import {useAuthState} from "react-firebase-hooks/auth"
import {auth} from "./firebase-config"
import { useNavigate } from 'react-router-dom'
function Home() {
  const [user,loding,error]=useAuthState(auth)
  const navigate=useNavigate()
  return (
    <>
    <div>Welcome {user?.email}</div>
    <button  onClick={()=>{
      auth.signOut();
      navigate("/")
    
    }}>SIGNOUT</button>
    </>
  )
}

export default Home