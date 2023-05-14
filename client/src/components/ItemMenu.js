import React,{ useState} from 'react'
import {  useNavigate, Link } from 'react-router-dom'



function ItemMenu({image,title, id, gia}) {
  
  return (
  
    <div className='p-5 bg-white shadow-md h-auto relative'>
       <div>
          <div 
            
          >
              <img src={image}          
                alt=""
                className='object-cover w-[330px] h-[200px]'                
              />
          
            
          </div>
                
            
       </div> 
        <div className='flex flex-col pt-5 items-center justify-center'>
           <h5 className="post-title is-large text-red-400">{gia}đ</h5>
            <h5 className="post-title is-large text-gray-400">{title}</h5>
           
         </div>
     
     
    </div>
   
  )
}

export default ItemMenu