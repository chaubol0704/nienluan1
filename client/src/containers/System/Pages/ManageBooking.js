import React, {useState,useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { CreateNew, Update, Search } from '../../../components'
import { useSearchParams} from 'react-router-dom';
import { Pagination } from '../../Public'
import * as actions from '../../../store/actions'
import { apiDeleteBook } from '../../../services';
import moment from 'moment'
import Order from '../Order';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const ManageBooking = () => {
  const formatDate = (time_book) => {
    return moment(time_book).format("dddd, DD/MM/YYYY");
  }
  // const formatTime = (time_book) => {
  //   return moment(time_book).format('hh:mm');
  // }
  //  const formatDate = (time_book) => {
  //       return moment(time_book).format("YYYY-MM-DD");
  //   }
    const formatTime = (time_book) => {
        return moment(time_book).format('hh:mm');
    }
    let currentDate = new Date()
  const dispatch = useDispatch()
  const [searchParams] = useSearchParams()
  const {allorder} = useSelector((state) => state.book)
  console.log(allorder)
  const [keyword, setKeyword] = useState("");
  const [tu, setTu] = useState("");
  let page = searchParams.get('page')
  let booking = true
  let bookingMenu = true
  const [isDetail, setIsDetail] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isCreate, setIsCreate] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  // hứng data từ component
  const [dataEdit, setDataEdit] = useState({});
   const changeHandleSearch = (q) => {         
            setKeyword(q);         
    };
    const date = new Date()
  useEffect(() =>{
        // dispatch(getMenu())    
        // const handleCheck= (item) => {
        //   const date = new Date()
        //   console.log(date)
        //   if(formatDate(date) > formatDate(item.time_book)){
        //       setTu("Đã hết hạn")
        //   }
        //   else {
        //     return setTu("Đang diễn ra")
        //   }
          
        // }    
        let offset = page? +page : 1
        dispatch(actions.getAllOrder({offset, phone: keyword }))
    },[page,isEditing,isCreate,isDelete, keyword])
  
  const handleDelete= async(item) => {
    // console.log(item.id)
    setIsDelete(true)
    const respone = await apiDeleteBook({id:item.id})
    respone ?  toast.success('Xóa thành công !', {
                position: toast.POSITION.TOP_RIGHT
            }) : toast.error('Đã xảy ra lỗi. Vui lòng kiểm tra lại!', {
                position: toast.POSITION.TOP_RIGHT
            }) 
    setIsDelete(false)
  }
  
  return (
    <div className='relative p-10 bg-white'>
      <div className='  border-b border-gray-200 flex items-center justify-between'>
        <h1 className='text-3xl text-green-600 font-medium'>Quản lý đơn đặt bàn</h1>
        <Search keyword={keyword} changeHandleSearch={changeHandleSearch} className='w-3/5'/>
        <button className='text-green-600 hover:text-red-700 text-xl'
            onClick={() => {  
              setIsCreate(true)
            }}
        >
            Tạo  đơn mới
          </button>
      </div>
      <table className='w-full table-fixed bg-white'>

          <thead>
            <tr className='h-'>
              <th className='border-2 border-black md:border-4 p-2 justify-center item-center'>Mã số đơn</th>
              <th className='border-2 border-black md:border-4 p-2 justify-center item-center'>Số điện thoại</th>
              <th className='border-2 border-black md:border-4 p-2 justify-center item-center'>Tên khách hàng</th>
              <th className='border-2 border-black md:border-4 p-2 justify-center item-center'>Số người </th>
              <th className='border-2 border-black md:border-4 p-2 justify-center item-center'>Thời gian đặt</th>
              <th className='border-2 border-black md:border-4 p-2 justify-center item-center'>Số bàn</th>
              {/* <th className='border-2 border-black md:border-4 p-2 justify-center item-center'>Tình trạng</th> */}
              {/* <th className='border-2 border-black md:border-4 p-2 justify-center item-center'>Giá</th>
              <th className='border-2 border-black md:border-4 p-2 justify-center item-center'>Mô tả</th>*/}
              <th className='border-2 border-black md:border-4 p-2 justify-center item-center'>Tùy chọn</th> 
            </tr>
          </thead>
          <tbody className=''>
              {allorder ?
                
                allorder?.map(item =>{
                  
                  return (
                    
                    <tr key={item.id}  >
                      <td className='border-2 border-black md:border-4 pl-20   justify-center items-center'>{item?.id}</td>
                      <td className='border-2 border-black md:border-4 pl-10   justify-center items-center'>{item?.phone}</td>
                      <td className='border-2 border-black md:border-4 pl-5  justify-center items-center '>{item?.name}</td>
                      {/* <td className='border-2 border-black md:border-4 pl-20  justify-center items-center'>{item?.content}</td> */}
                      
                      <td className='border-2 border-black md:border-4 pl-20  justify-center items-center '>{item?.bookban?.so_nguoi}</td>
                      <td className='border-2 border-black md:border-4 pl-5  justify-center items-center   '>
                          
                          
                          <span className='p-1'>{ formatDate(item?.time_book)}</span>
                          { formatTime(item?.time_book)}
                      </td>
                      <td className='border-2 border-black md:border-4 pl-20  justify-center items-center  '>

                          {item?.bookban?.id_ban}
                        
                        </td>
                       
                        <td className='border-2 border-black  p-5 flex justify-center items-center gap-5 '>
                          <button className='text-red-300 hover:text-red-600 justify-center items-center'
                            onClick={() => {
                              dispatch(actions.editBook(item)) // đẩy dữ liệu lên redux
                              setIsEditing(true)
                            
                            }}
                          >
                              Sửa
                          </button>
                          <button className='text-red-300 hover:text-red-600 justify-center items-center'
                            onClick={() => handleDelete(item)}
                          >
                              Xóa
                          </button>
                          <button className='text-red-300 hover:text-red-600 justify-center items-center'
                            onClick={() => {
                              dispatch(actions.editBook(item)) // đẩy dữ liệu lên redux
                              setIsDetail(true)
                            
                            }}
                          >
                              Chi tiết
                          </button>
                        </td>
                    </tr>
                  )
                })
                
                :
                <tr>
                  <td>Không có bài đăng</td>
                </tr>

            }
          </tbody>
       </table>

       <Pagination  category='allorder'/> 
      {isEditing && <Update booking  setIsEditing={setIsEditing}/>}
      {isCreate && <CreateNew booking setIsCreate={setIsCreate}/>}
      {isDetail && <Update bookingMenu setIsDetail={setIsDetail}/>}

      <ToastContainer />

    </div>
  )
}

export default ManageBooking