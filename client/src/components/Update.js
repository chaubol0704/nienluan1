import React from 'react'
import FormPost from './FormPost'
import FormCreat from './FormCreat'
import FormMenu from './FormMenu'

const Update = ({po,cus,me ,setIsEditing}) => {
    // console.log(dataEdit)
  return (
    <div className='absolute top-0 left-0 right-0 bottom-0  bg-overlay-70 flex justify-center '
        onClick={e => {
            e.stopPropagation()
            setIsEditing(false)
        }}
    >
        
        <div className='bg-white max-w-1100 w-full overflow-y-auto justify-items-center p-20'
            onClick={e => {
                e.stopPropagation()
           
        }}
        >   
            {cus && <FormCreat isEditing  setIsEditing={setIsEditing}/> }
            {po &&  <FormPost isEditing setIsEditing={setIsEditing}/>}
            {me && <FormMenu isEditing setIsEditing={setIsEditing}/>}
        </div>
    </div>
  )
}

export default Update