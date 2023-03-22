import React from 'react'
import { useSelector } from 'react-redux'
// import anonAvatar from '../assets/anon-avatar.png'
const anonAvatar = 'https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png'

const User = () => {
    const {currentData} = useSelector(state => state.user)
  
    return (
    <div className='flex items-center text-white gap-2 p-2'>
        <img src={currentData?.avatar || anonAvatar} alt="avatar" className='w-10 object-cover rounded-full h-10 border-2 shadow-md border-white' />
        <div>
            {/* <span>Xin chào,  */}
                <span className='font-semibold '>{currentData?.name}</span>
                
            {/* </span> */}
        </div>
    </div>
  )
}

export default User