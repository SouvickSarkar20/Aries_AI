import { useAuth } from '@clerk/clerk-react'
import React, { useEffect, useId } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import ChatList from '../../components/ChatList/ChatList';
import "./DashBoardLayout.css";

const DashBoardLayout = () => {

  const {userId,isLoaded} = useAuth();
  const navigate = useNavigate();

  useEffect (()=>{
    if(isLoaded && !userId){
      navigate("/sign-in");
    }
  },[isLoaded,userId,navigate]);

  if(!isLoaded) return "Loading.."
  return (
    <div className='dashboardLayout'>
        <div className='menu'><ChatList/></div>
        <div className='content'>
            <Outlet/>
        </div>
    </div>
  )
}

export default DashBoardLayout