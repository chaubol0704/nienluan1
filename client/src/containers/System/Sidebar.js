import React from 'react'
import { useSelector } from 'react-redux'
const anonAvatar = 'https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png'


const Sidebar = () => {
  const {currentData} = useSelector(state => state.user)
  console.log(currentData)
  return (
    <div className='w-[256px] flex-none p-4'> 
      <div>
        <div className='flex items-center gap-4'>
          <img className='w-10 h-10 object-cover' src={anonAvatar} alt="avatar"/>
          <div className='flex flex-col justify-center'>
            <span className='font-semibold'>{currentData?.name}</span>
            <small>{currentData?.phone}</small>
          </div>
        </div>
        <span>
        
      </span>
      </div>
      
    </div>
  )
}

export default Sidebar