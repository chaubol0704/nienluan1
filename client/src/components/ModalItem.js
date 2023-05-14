import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {MinusOutlined, PlusOutlined, CloseOutlined} from "@ant-design/icons"
import Button from './Button'
import * as  actions from '../store/actions';
import { apiCreateBookMenu, apiGetBookMenu } from '../services';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const data = []

const ModalItem = ({showModal, setShowModal}) => {
  const dispatch = useDispatch()
  const {dataEdit} = useSelector(state => state.menu)
  const {dataBook} = useSelector(state => state.book)
  const {order} = useSelector(state => state.book)
  console.log(dataBook)
  const [count, setCount] = useState(0);
  
  const dataMenu = {}
  dataMenu.data = dataEdit
  dataMenu.count = count
  
  
  const Order = async() => {
    let finalPayload = {
            id_book: dataBook?.id,
            id_mon: dataEdit?.id,
            so_luong: count || 0,
            don_gia: dataEdit?.gia*count || 0
        }
    
    // setData({id_mon: dataEdit?.id,so_luong: count})
    dataMenu.count = count
    data.push(dataMenu)
    console.log(finalPayload)
    
    const respone =  await apiCreateBookMenu(finalPayload)
    console.log(respone)
    if(respone.data.err==2){
           toast.error('Phải đặt bàn trước mới chọn món ăn !', {
                position: toast.POSITION.TOP_RIGHT
            })
      // setShowModal(false)
    } else {
         toast.success('Thao tác thành công!', {
                position: toast.POSITION.TOP_RIGHT
            }) 
    }
    dispatch(actions.saveData(data))
    setShowModal(false)
   }
  return (
    <div className='w-auto h-auto p-10' >
        <div className='bg-white max-w-1100 w-full overflow-y-auto justify-items-center p-20'
            onClick={e => {
                e.stopPropagation()
           
        }}>
        {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none "
          >
            <div className="relative w-auto my-6 mx-auto max-w-6xl">
                
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex justify-center items-center w-full bg-white outline-none focus:outline-none p-20 gap-5">
                
                <div>
                    <img src={dataEdit?.anh_mon} alt="" className='object-cover w-[330px] h-[330px]'  />
                </div>

                <div className="flex flex-col items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t gap-5">
                    <div className='flex gap-10'>
                        <h3 className="text-3xl font-semibold">
                        {dataEdit?.ten_mon}
                        </h3>
                        
                    </div>
                    <div>
                        <div className='text-2xl'>
                            <h3>Danh mục :<span className='text-red-400'>{dataEdit?.loai?.ten_loai}</span> </h3>
                            <h3>Giá : <span className='text-red-400'>{dataEdit?.gia}</span></h3>
                            <p>{dataEdit?.mo_ta}</p>
                        </div>
                    </div>

                    {/* số lượng */}
                    <div className='gap-10'>
                        <h3>Số lượng</h3>
                        <div className='flex justify-center gap-3 p-5'>
                            <button className='border border-gray-200  items-center justify-center p-4 hover:bg-red-500'
                                onClick={() => {count > 0 && setCount(count-1)}}
                            ><MinusOutlined/></button>
                            <h4 className='border border-gray-200  items-center justify-center p-4 py-3'><span className='text-2xl text-red-400'>{count}</span></h4>
                            <button className='border border-gray-200  items-center justify-center p-4 hover:bg-red-500'
                              onClick={() => {setCount(count+1)}}
                            ><PlusOutlined/></button>
                        </div>

                        <Button text = 'Đặt Ngay' textColor='text-white' bgColor='bg-red-400' 
                          onClick={Order}
                        />
                    </div>
                </div>
               
                
                <div className='absolute top-0 right-0'>
                    <button
                    className=" bg-transparent border border-black text-white"
                            onClick={() => setShowModal(false)}
                        >
                            <div className='bg-red-600 p-3 text-xl'>
                                <CloseOutlined/>
                            </div>
                                
                            
                </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )
    : null}

        </div>
        
          <ToastContainer />
    </div>
  )
}

export default ModalItem