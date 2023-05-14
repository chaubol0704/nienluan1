import React from 'react'
import FormPost from './FormPost'
import FormCreat from './FormCreat'
import FormMenu from './FormMenu'
import ModalItem from './ModalItem'
import { BookingTable } from '../containers/Public'
import Order from '../containers/System/Order'
import FormOrderMenu from './FormOrderMenu'
import FormUser from './FormUser'
import FormTable from './FormTable'

const Update = ({po,cus,me,booking,tab ,setIsEditing,bookingMenu, setIsDetail}) => {
    // console.log(dataEdit)
  return (
    <div className='absolute top-0 left-0 right-0 bottom-0  bg-overlay-70 flex justify-center '
        onClick={e => {
            e.stopPropagation()
            bookingMenu ? setIsDetail(false)
            : setIsEditing(false)
            
        }}
    >
        
        <div className='bg-white max-w-1100 w-full overflow-y-auto justify-items-center p-20'
            onClick={e => {
                e.stopPropagation()
           
        }}
        >   
            {/* {cus && <FormCreat isEditing  setIsEditing={setIsEditing}/> } */}
            {cus && <FormUser isEditing  setIsEditing={setIsEditing}/> }
            {po &&  <FormPost isEditing setIsEditing={setIsEditing}/>}
            {me && <FormMenu isEditing setIsEditing={setIsEditing}/>}
            {booking && <BookingTable isEditing setIsEditing={setIsEditing}/>}
            {bookingMenu && <FormOrderMenu isDetail setIsDetail={setIsDetail}/>}
            {tab && <FormTable isEditing setIsEditing={setIsEditing}/>}
        </div>
    </div>
  )
}

export default Update