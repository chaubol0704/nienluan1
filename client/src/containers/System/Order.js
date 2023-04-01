import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {getOrder} from '../../store/actions/book';
import {AppstoreOutlined,EditOutlined,CloseOutlined,ShoppingCartOutlined,UserOutlined,ClockCircleOutlined, TableOutlined,CalendarOutlined}  from "@ant-design/icons"
import moment from 'moment'



const Order = () => {
  const formatDate = (time_book) => {
    return moment(time_book).format("dddd, DD/MM/YYYY");
  }
  const formatTime = (time_book) => {
    return moment(time_book).format('h:mm ');
  }


  const dispatch = useDispatch()
  const {currentData} = useSelector(state => state.user)
  // console.log(currentData)
  const {order} = useSelector(state => state.book)
  useEffect(() =>{
        
        dispatch(getOrder({phone: '0966735872'}))
    },[])
  console.log(order[0])
  const Cancle = () => {
    console.log('xóa')
  }
  return (
    <div className='text-xl p-5'>
        <div>
            {/* bàn */}
            <div>
                <h2 className='text-3xl text-green-600 flex justify-center items-center'>Reservation at KING BBQ</h2>
                <div className='flex gap-10 p-10'>
                  <div className='w-1/3'>
                    <img src="https://kingbbq.vn/wp-content/uploads/2014/08/mat-tien-400x266.jpg" alt=""/>
                  </div>
                  <div>
                    <ul className='flex flex-col'>
                      <li className='flex gap-5  items-center'>
                        <CalendarOutlined/>
                        {formatDate(order[0].time_book)}
                      </li>
                      <li className='flex gap-5  items-center'>
                        <ClockCircleOutlined/>
                        {formatTime(order[0].time_book)}
                      </li>
                      <li className='flex gap-5  items-center'>
                        <TableOutlined/>
                        Số bàn: {order[0]?.bookban?.id_ban}
                      </li>
                      <li className='flex gap-5  items-center'>
                        <UserOutlined/>
                        {order[0]?.bookban?.so_nguoi} người
                      </li>
                    </ul>
                  </div>
                  <div className='w-1/3 justify-center items-center'>
                    <button className='gap-5 flex justify-center items-center '>
                      <EditOutlined/>
                      Modify
                    </button>
                    <button className='gap-5 flex justify-center items-center'
                      onClick={Cancle}
                    >
                      <CloseOutlined/>
                      Cancle
                    </button>
                     
                  </div>
                </div>
            </div>
            {/* món ăn */}
            <div>
              
            </div>
        </div>
        <div>
          <button>Hủy</button>
        </div>
    </div>
  )
}

export default Order