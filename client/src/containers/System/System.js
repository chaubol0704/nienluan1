import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { path } from '../../ultils/constant'
import {CreatePost, Header, Sidebar}  from './'

const System = () => {
  const { isLoggedIn} = useSelector(state => state.auth)

  if(!isLoggedIn) return  <Navigate to={`/${path.LOGIN}`} replace={true}  />
  return (
    <div>
      
      <div className='flex justify-between relative'>
        <Sidebar className='w-2/5 z-30'/>
        <CreatePost className='w-3/5 items-center bg-white'/>
      </div>
       
    </div>
  )
}

export default System