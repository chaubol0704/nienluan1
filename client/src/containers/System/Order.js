import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {getOrder} from '../../store/actions/book';
import {AppstoreOutlined,EditOutlined,CloseOutlined,SelectOutlined,UserOutlined,ClockCircleOutlined, TableOutlined,CalendarOutlined,OrderedListOutlined}  from "@ant-design/icons"
import moment from 'moment'
import { Button } from '../../components';
import { apiGetMenu, apiGetOrder ,apiDeleteBookMenu,apiDeleteBook} from '../../services';
import { CreateNew, Update, Search } from '../../components'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as actions from '../../store/actions'
import { useLocation,  useNavigate } from 'react-router-dom';



const Order = () => {
  const formatDate = (time_book) => {
    return moment(time_book).format("dddd, DD/MM/YYYY");
  }
  const formatTime = (time_book) => {
    return moment(time_book).format('h:mm ');
  }
  const [isDetail, setIsDetail] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isOrder, setIsOrder] = useState(false);
  const [isOrderMenu, setIsOrderMenu] = useState(false);
  let bookingMenu = true
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {currentData} = useSelector(state => state.user)
  const {data} = useSelector(state => state.menu)
  
  console.log(currentData)
  const {order, orderMenu} = useSelector(state => state.book)
  const {dataEditBook} = useSelector(state => state.book)
  // const respone = apiGetOrder({phone: currentData?.phone})
  // console.log(order)
  useEffect(() =>{
        
      // dispatch(getOrder({phone: currentData?.phone}))
      dispatch(getOrder({phone: currentData?.phone, id: dataEditBook?.id}))
    },[isOrder,isOrderMenu.isEditing,isDetail])
  console.log(orderMenu)
  console.log(order)
  const Cancle = async() => {
    console.log('xóa')
    
    await apiDeleteBook({id:order[0]?.id})
    setIsOrder(prev =>!prev)
  }
  const handleDelete1= async(item) => {
    // console.log(item.id)
    // setIsDelete(true)
    const respone = await apiDeleteBook({id:item.id})
    respone ?  toast.success('Xóa thành công !', {
                position: toast.POSITION.TOP_RIGHT
            }) : toast.error('Đã xảy ra lỗi. Vui lòng kiểm tra lại!', {
                position: toast.POSITION.TOP_RIGHT
            }) 
    setIsOrder(prev =>!prev)
  }

  const Selection= async(item) => {
    // console.log(item.id)
    // setIsDelete(true)
     dispatch(actions.editBook(item))
    dispatch(actions.editBookMenu(item)) 
    navigate('/menu')
    setIsOrder(prev =>!prev)
  }
  // const Update = async() => {
  //   console.log('cập nhật')
    
  //   // await apiDeleteBook({id:order[0]?.id})
  //   setIsOrder(prev =>!prev)
  // }
  // const handleDelete= async(item) => {
  //   // console.log(item?.id)
    
  //   const respone = await apiDeleteBookMenu({id:item?.id})
  //   setIsOrderMenu(prev => !prev)
  // }
  return (
    <div className='relative p-5 bg-white'>
      <div className='text-xl p-5'>
        <div>
            {/* bàn */}
           {order.length > 0  ? order.map((item) => {

              return(
                   <div>               
                      <h2 className='text-3xl text-green-600 flex justify-center items-center'>Reservation at KING BBQ</h2>
                      {/* map item */}
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
                              { formatDate(item?.time_book)}
                            </li>
                            <li className='flex gap-5  items-center'>
                              <ClockCircleOutlined/>
                              { formatTime(item?.time_book)}
                            </li>
                            <li className='flex gap-5  items-center'>
                              <TableOutlined/>
                              Số bàn: {item?.bookban?.id_ban}
                            </li>
                            <li className='flex gap-5  items-center'>
                              <UserOutlined/>
                              {item?.bookban?.so_nguoi} người
                            </li>
                          </ul>
                        </div>
                        <div className='w-1/3 justify-center items-center'>
                          <button className='gap-5 flex justify-center items-center '
                              onClick={() => {
                              dispatch(actions.editBook(item))
                              dispatch(actions.editBookMenu(item))  // đẩy dữ liệu lên redux
                              setIsEditing(true)
                            
                            }}
                          >
                            <EditOutlined/>
                            Modify
                          </button>
                          <button className='gap-5 flex justify-center items-center '
                               onClick={() => {
                              dispatch(actions.editBook(item)) 
                              dispatch(actions.editBookMenu(item))// đẩy dữ liệu lên redux
                              setIsDetail(true)
                            
                            }}
                          >
                            <AppstoreOutlined/>
                            Detail
                          </button>
                          <button className='gap-5 p-1 flex justify-center items-center hover:bg-red-700'
                            // onClick={Cancle}
                            onClick={() => handleDelete1(item)}
                          >
                            <CloseOutlined/>
                            Cancle
                          </button>
                          <button className='gap-5 p-1 flex justify-center items-center hover:bg-red-700'
                            // onClick={Cancle}
                            onClick={() => Selection(item)}
                          >
                            <SelectOutlined/>
                            Chọn Món
                          </button>
                        </div>
                      </div> 
                
                  </div>
              )
           })
           
            : <h2 className='text-3xl text-green-600 flex justify-center items-center'>Không có đơn đặt nào</h2>}
            {/* món ăn */}
            {/* <div>
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
            </div> */}
        </div>
        {/* <div>
          <button>Hủy</button>
        </div> */}

      {isEditing && <Update booking  setIsEditing={setIsEditing}/>}
      {isDetail && <Update bookingMenu setIsDetail={setIsDetail}/>}
      <ToastContainer />
    </div>
    </div>
    
  )
}

export default Order