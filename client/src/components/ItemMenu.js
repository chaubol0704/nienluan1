import React,{ memo } from 'react'
import {  useNavigate, Link } from 'react-router-dom'

function ItemMenu({image,title, id}) {
  return (
  
    <div className='p-5'>
       <div>
          <Link to= {`/chi-tiet/${title}/${id}`} 
            className=''>          
            <img src={image}          
                alt=""
                className='object-cover w-[330px] h-[200px]'                
                />
         </Link>
       </div> 
        <div className='flex pt-5 items-center justify-center'>
            <h5 className="post-title is-large ">{title}</h5>
         </div>
     
    </div>
   
  )
}

export default ItemMenu