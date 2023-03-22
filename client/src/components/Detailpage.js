import React from 'react'

const Detailpage = ({image, title, content}) => {
  return (
    <div className='w-full flex flex-col items-center  '>
        <div className='w-auto h-auto'>
            <img src={image} alt=""
              className='object-cover w-[800px] h-[400px]'    
            />
        </div>
        <div className='text-left w-auto p-20'>         
            <div>
                <h4 className='font-medium text-xs'>TIN TỨC</h4>
                <h3 className='font-bold text-xl text-gray-600'>{title}</h3>
            </div>
            

            <p>{content}</p>
        </div>

    </div>
  )
}

export default Detailpage