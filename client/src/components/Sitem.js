import React from 'react'
import moment from 'moment'
import 'moment/locale/vi'
import {Link} from 'react-router-dom'

const Sitem = ({title , image , createdAt, id}) => {

  const formatTime = (createdAt) => {
    return moment(createdAt).fromNow()
  }
  return (
    <div className='w-full flex items-center gap-1'>
       <Link to= {`/chi-tiet/${title}/${id}`} >
           <img 
            src={image}
             alt="anh"
            className='w-[65px] h-[65px] object-cover rounded-md'
        />
       
       </Link> 
        <div className='w-full flex flex-col justify-between'>
            <h4>{title}</h4>
            <span className='text-sm text-gray-300 flex flex-col justify-end'>{formatTime(createdAt)}</span>
        </div>

    </div>
  )
}

export default Sitem