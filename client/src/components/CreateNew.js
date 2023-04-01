import React,{useState} from 'react'
import FormPost from './FormPost'
import FormCreat from './FormCreat'
import FormMenu from './FormMenu'

const CreateNew = ({po,cus,me,setIsCreate}) => {
    console.log(po)
    console.log(cus)
  return (
    <div className='absolute top-5 left-7 right-7 bottom-5  bg-overlay-70 flex justify-center  '
        onClick={e => {
            e.stopPropagation()
            setIsCreate(false)
        }}
    >
        
        <div className='bg-white max-w-1100 w-full overflow-y-auto justify-items-center pr-12'
            onClick={e => {
                e.stopPropagation()
           
        }}
        >
            {/* <FormPost isCreate  setIsCreate={setIsCreate}/> */}
            {/* <FormCreat isCreate  setIsCreate={setIsCreate}/> */}
            
            {cus && <FormCreat isCreate  setIsCreate={setIsCreate}/> }
            {po && <FormPost isCreate  setIsCreate={setIsCreate}/>}
            {me && <FormMenu isCreate  setIsCreate={setIsCreate}/>}
        </div>
    </div>
  )
}

export default CreateNew