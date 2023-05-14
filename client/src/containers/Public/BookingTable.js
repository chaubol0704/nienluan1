import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { apiCreateBook,apiUpdateBook } from '../../services/book';
import { InputForm, Button, Loading } from '../../components/index';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import moment from 'moment'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookingTable = ({isEditing, setIsEditing,isCreate, setIsCreate }) => {
     const formatDate = (time_book) => {
        return moment(time_book).format("YYYY-MM-DD");
    }
    const formatTime = (time_book) => {
        return moment(time_book).format('hh:mm');
    }
    let currentDate = new Date()
    console.log(currentDate)
    const {currentData} = useSelector(state => state.user)
    const {dataEdit} = useSelector(state => state.book)
    console.log(dataEdit)
    const [submit, setSubmit] = useState(false);
    const [payload, setPayload] =useState(() => {
      const initData = {
         name: isCreate ? '' : isEditing? dataEdit?.name: currentData?.name ,
         email: isCreate ? '' : isEditing? dataEdit?.email: currentData?.email,
         phone: isCreate ? '' : isEditing? dataEdit?.phone: currentData?.phone,
         guests: isCreate ? null :  dataEdit?.bookban?.so_nguoi ,
         date: isCreate ? null :  formatDate(dataEdit?.time_book),
         time: isCreate ? null :  formatTime(dataEdit?.time_book),
         id: isCreate ? null :  dataEdit?.id ,
         id_book: isCreate ? null :  dataEdit?.id_book ,
      }
     
      return initData
  }) 
  const showToastMessage = () => {
        toast.success('Success Notification !', {
            position: toast.POSITION.TOP_RIGHT
        });
    };
  const handleMenu = () =>{
    <Link to={'/menu'} ></Link>
    // <Menu/>
  }
  const handleEvent = (event) =>{
    setSubmit(false)
        let name = event.target.name;
        let val = event.target.value;
        console.log(name)
        console.log(val)
  }
  useEffect(() => {
        // setSubmit(false)
  },[])
  console.log(payload)
  const handleSubmitBook = async() =>{
        let finalPayload = {
            name: payload?.name ,
            email: payload?.email ,
            phone: payload?.phone ,
            guests: payload?.guests,
            date: payload?.date ,
            time: payload?.time ,
            id: payload?.id ,
            id_book: payload?.id_book ,
        }
        
        // let invalids = validate(finalPayload)
        const respone = isEditing?await apiUpdateBook(finalPayload) : await apiCreateBook(finalPayload) 
        console.log(respone)
        respone ?  toast.success('Đặt bàn thành công !', {
                position: toast.POSITION.TOP_RIGHT
            }) : toast.error('Đã xảy ra lỗi. Vui lòng kiểm tra lại!', {
                position: toast.POSITION.TOP_RIGHT
            }) 
        // !respone ? alert(' Đã xảy ra lỗi'): isEditing ? alert('Cập nhật thành công'): alert(' Đặt bàn thành công')
        isEditing ? setIsEditing(false):isCreate && setIsCreate(false)
  }
  return (
    <div className="flex items-center justify-center p-12">
        
        <div className="mx-auto w-full max-w-[1100px] ">
            <div className='mb-5'>
                <h2 className='flex justify-center mb-10 text-4xl font-serif'>Thông tin đặt bàn</h2>
                <div className='bg-cyan-300 p-3'>
                    <span className='text-red-500'>Lưu ý</span>
                    <ul>
                        <li>Các trường thông tin có dấu * là bắt buộc.</li>
                        <li><span>Quán chỉ phục vụ từ 8:00 sáng tới 20:00 tối</span></li>
                        <li>Quý khách vui lòng đặt bàn trước giờ dùng bữa ít nhất 1 tiếng</li>
                        <li>Quý khách muốn đặt thêm món ăn thì bấm <span className='text-blue-600 hover:text-red-700 cursor-pointer'
                            // onClick={() => }
                        ><Link to={'/menu'} >vào đây</Link></span></li>
                    </ul>
                </div>
                
            </div>  
            <form >
                <div className="-mx-3 flex flex-wrap">
                    <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                        <label
                        htmlFor="Name"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                        Họ và Tên
                        </label>
                        <input
                        type="text"
                        name="Name"
                        id="name"
                        placeholder=" Họ và Tên"
                        value={payload?.name}
                        onChange={(e) => setPayload(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    </div>
                    <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                        <label
                        htmlFor="Email"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                        Email
                        </label>
                        <input
                        type="text"
                        name="lName"
                        id="email"
                        placeholder="Email"
                        value={payload?.email}
                        onChange={(e) => setPayload(prev => ({ ...prev, email: e.target.value }))}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    </div>
                    <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                        <label
                        htmlFor="lName"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                        Số Điện Thoại
                        </label>
                        <input
                        type="text"
                        name="phone"
                        id="phone"
                        value={payload?.phone}
                        placeholder="Số điện thoại"
                        onChange={(e) => setPayload(prev => ({ ...prev, phone: e.target.value }))}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    </div>
                </div>
                <div className="mb-5">
                    <label
                    htmlFor="guest"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                    Số người
                    </label>
                    <input
                    type="number"
                    name="guest"
                    id="guest"
                    placeholder="5"
                    min="1"
                    value={payload?.guests}
                    // onChange={handleEvent}
                    onChange={(e) => setPayload(prev => ({ ...prev, guests: e.target.value }))}
                    className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                </div>

                <div className="-mx-3 flex flex-wrap">
                    <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                        <label
                        htmlFor="date"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                        Chọn ngày đặt bàn 
                        </label>
                        <input
                        type="date"
                        name="date"
                        id="date"
                        min={formatDate(currentDate)}
                        value={payload?.date}
                        onChange={(e) => setPayload(prev => ({ ...prev, date: e.target.value }))}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    </div>
                    <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                        <label
                        htmlFor="time"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                        Thời gian
                        </label>
                        <input
                        type="time"
                        // name="time"
                        id="time"
                        name="time" 
                        // step="3600" 
                        min="08:00" 
                        // max="20:00"
                        // pattern="[0-2][0-9]:[0-5][0-9]"
                        value={payload?.time}
                        onChange={(e) => setPayload(prev => ({ ...prev, time: e.target.value }))}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                        {/* {document.getElementById("time").min = "16:00"} */}
                    </div>
                    </div>
                </div>

                <div className="mb-5">
                    <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Are you coming to the event?
                    </label>
                    <div className="flex items-center space-x-6">
                    <div className="flex items-center">
                        <input
                        type="radio"
                        name="radio1"
                        id="radioButton1"
                        className="h-5 w-5"
                        />
                        <label
                        htmlFor="radioButton1"
                        className="pl-3 text-base font-medium text-[#07074D]"
                        >
                        Yes
                        </label>
                    </div>
                    <div className="flex items-center">
                        <input
                        type="radio"
                        name="radio1"
                        id="radioButton2"
                        className="h-5 w-5"
                        />
                        <label
                        htmlFor="radioButton2"
                        className="pl-3 text-base font-medium text-[#07074D]"
                        >
                        No
                        </label>
                    </div>
                    </div>
                </div>

                <div className='flex justify-center outline-none gap-10'>
                    <Button
                        className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                        onClick={handleSubmitBook}
                        text='Submit'
                        bgColor = 'bg-green-600'
                        textColor = 'text-white'
                    >
                    
                    </Button>
                    {isEditing && <Button
                        className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                        onClick={()=> setIsEditing(false)}
                        text='Thoát'
                        bgColor = 'bg-green-600'
                        textColor = 'text-white'
                    >
                    
                    </Button>}
                </div>
            </form>
        </div>
        <ToastContainer />
    </div>
  )
}

export default BookingTable