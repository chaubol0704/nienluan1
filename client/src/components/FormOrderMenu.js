import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
// import {getOrder} from '../../store/actions/book';
import {AppstoreOutlined,EditOutlined,CloseOutlined,DeleteOutlined,UserOutlined,ClockCircleOutlined, TableOutlined,CalendarOutlined}  from "@ant-design/icons"
import moment from 'moment'
import { apiGetMenu, apiGetOrder ,apiDeleteBookMenu,apiDeleteBook} from '../services';
import {getOrder} from '../store/actions/book';

const FormOrderMenu = ({isDetail, setIsDetail}) => {
  const {dataEdit} = useSelector(state => state.book)
  const {order, orderMenu} = useSelector(state => state.book)
  console.log(dataEdit)
  console.log(orderMenu)
  const dispatch = useDispatch()
  const [isOrderMenu, setIsOrderMenu] = useState(false);
  const handleDelete= async(item) => {
    // console.log(item?.id)
    
    const respone = await apiDeleteBookMenu({id:item?.id})
    setIsOrderMenu(prev => !prev)
  }
  useEffect(() =>{
        
      dataEdit  &&  dispatch(getOrder({phone: dataEdit?.phone, id: dataEdit?.id}))
    },[isOrderMenu])
  return (
    <div>
        <div className='text-xl p-5'>
        <div>
            {/* bàn */}
           {/* {order.length > 0  ?
            <div>
                
                <h2 className='text-3xl text-green-600 flex justify-center items-center'>Reservation at KING BBQ</h2>
                <div className='flex gap-10 p-10'>
                  <div className='w-2/3'>
                    <img src="https://kingbbq.vn/wp-content/uploads/2014/08/mat-tien-400x266.jpg" alt=""
                       className='object-cover w-[300px] h-[200px]'
                    />
                  </div>
                  <div>
                    <ul className='flex flex-col'>
                      <li className='flex gap-5  items-center'>
                        <CalendarOutlined/>
                        { formatDate(order[0]?.time_book)}
                      </li>
                      <li className='flex gap-5  items-center'>
                        <ClockCircleOutlined/>
                        { formatTime(order[0]?.time_book)}
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
                    <button className='gap-5 p-1 flex justify-center items-center hover:bg-red-700'
                      onClick={Cancle}
                    >
                      <CloseOutlined/>
                      Cancle
                    </button>
                     
                  </div>
                </div> 
                
            </div>
            : <h2 className='text-3xl text-green-600 flex justify-center items-center'>Không có đơn đặt nào</h2>} */}
            {/* món ăn */}
            <div>
             { orderMenu?.length>0 &&  <h2 className='text-green-500 text-3xl'>Các món đặt trước</h2>}
                {orderMenu?.length>0 && orderMenu.map((item)  => 
                 { 
                    // console.log(item)
                    // const mon = await apiGetMenu(item?.bookmon)
                    // console.log(mon)
                    return(
                        <div className='pt-10 flex justify-center items-center gap-10 '
                            // onClick = {()=> {
                            //     dispatch(actions.editMenu(item))
                            //     setShowModal(true)
                            
                            // }} 
                        >
                          
                            <div>
                               <img src={item?.mon?.anh_mon} alt="" className='object-cover w-[200px] h-[150px]' />
                            </div>
                            <div>
                                <h3>Tên món: <span className='text-red-500'>{item?.mon?.ten_mon}</span></h3>
                            </div>
                            <div>
                                <h3>Số lượng: <span className='text-red-500'>{item?.so_luong}</span></h3>
                            </div>
                            <div>
                                <h3>Giá: <span className='text-red-500'>{item?.mon?.gia}</span></h3>
                            </div>
                            <div> 
                                
                                <h3>Tổng tiền: <span className='text-red-500'>{item?.don_gia}</span></h3>
                            </div>
                            <div>
                               <button 
                                  onClick={() => handleDelete(item)}
                                  
                               ><DeleteOutlined className='hover:bg-red-700'/></button>
                            </div>
                        </div>
                        
                    )
                })}
            </div>
        </div>
        { orderMenu?.length == 0 &&  <h2 className='text-green-500 text-3xl'>Không có món đặt trước</h2>}
        <div className='pt-20'>
          <button className=' text-red-700 text-2xl' onClick={()=> setIsDetail(false)}>Thoát</button>
        </div>
    </div>
    </div>
  )
}

export default FormOrderMenu