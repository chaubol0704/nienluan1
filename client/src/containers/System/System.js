import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { path } from '../../ultils/constant'
import {Profile, Header, Sidebar, PageContent}  from './'

const System = () => {
  const { isLoggedIn} = useSelector(state => state.auth)

  if(!isLoggedIn) return  <Navigate to={`/${path.LOGIN}`} replace={true}  />
  return (
    <div>
      
      <div className='flex gap-20'>
        <div className='w-80 h-screen px-5 py-8 overflow-y-auto bg-white  dark:bg-gray-900 dark:border-gray-700'>
              <Sidebar />
          
        </div>
        <div className='bg-white w-3/5 '>
          <PageContent />
        </div>
        
      </div>
       
    </div>
  )
}

export default System