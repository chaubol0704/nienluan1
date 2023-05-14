import React, {useState,useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { CreateNew, Update, Search } from '../../../components'
import { useSearchParams} from 'react-router-dom';
import { Pagination } from '../../Public'
import * as actions from '../../../store/actions'
import { apiDeleteTable } from '../../../services';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ManageTable = () => {
  let currentDate = new Date()
  console.log(currentDate)
  const dispatch = useDispatch()
  const [searchParams] = useSearchParams()
  const {table} = useSelector((state) => state.book)
  const [keyword, setKeyword] = useState("");
  let page = searchParams.get('page')
  let tab = true
  const [isEditing, setIsEditing] = useState(false);
  const [isCreate, setIsCreate] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  // hứng data từ component
  const [dataEdit, setDataEdit] = useState({});
   const changeHandleSearch = (q) => {         
            setKeyword(q);
           
    };
    console.log(table)
  useEffect(() =>{
        // dispatch(getMenu())
        let offset = page? +page : 1
        // dispatch(actions.getMenuLimit({offset , ten_mon: keyword}))
        dispatch(actions.getTable({offset }))
    },[page,isEditing,isCreate,isDelete, keyword])
  
  // useEffect(() => {
  //   dispatch(actions.getPosts())
    
  // }, [isEditing,isCreate]);
  // console.log(posts)
  const handleDelete= async(item) => {
    // console.log(item.id)
    setIsDelete(true)
    const respone = await apiDeleteTable({id:item.id})
    respone ?  toast.success('Xóa thành công !', {
                position: toast.POSITION.TOP_RIGHT
            }) : toast.error('Đã xảy ra lỗi. Vui lòng kiểm tra lại!', {
                position: toast.POSITION.TOP_RIGHT
            }) 
    setIsDelete(false)
  }
  return (
    
    <div className='relative p-10'>
      <div className='py-4 m-10 border-b border-gray-200 flex items-center justify-between'>
        <h1 className='text-3xl font-medium'>Quản lý bàn ăn</h1>
        <Search keyword={keyword} changeHandleSearch={changeHandleSearch} />
        <button className='text-green-600 hover:text-red-700 text-xl'
            onClick={() => {  
              setIsCreate(true)
            }}
        >
            Thêm bàn mới
          </button>
      </div>
      <table className='w-full table-fixed'>

          <thead>
            <tr className='h-'>
              <th className='border-2 border-black md:border-4 p-2 justify-center item-center'>Mã số bàn</th>
              <th className='border-2 border-black md:border-4 p-2 justify-center item-center'>Số ghế</th>
              <th className='border-2 border-black md:border-4 p-2 justify-center item-center'>Trạng thái</th>
              <th className='border-2 border-black md:border-4 p-2 justify-center item-center'>Tùy chọn</th>
            </tr>
          </thead>
          <tbody className=''>
              {table ?
                
                table?.map(item =>{
                  
                  return (
                    
                    <tr key={item.id}  >
                      <td className='border-2 border-black md:border-4 pl-20 justify-center items-center'>{item?.id}</td>
                      <td className='border-2 border-black md:border-4 pl-20  justify-center items-center'>{item?.so_ghe}</td>
                      <td className='border-2 border-black md:border-4 pl-20  justify-center items-center'>{item?.trang_thai}</td>
                      {/* <td className='border-2 border-black md:border-4 p-2'>{item?.content}</td> */}
                      {/* <td className='border-2 border-black md:border-4 p-2 '>
                        <img src={item?.anh_mon} 
                          alt=""
                          className='w-20 h-20 object-cover rounded-md'
                          />
                      </td>
                      <td className='border-2 border-black md:border-4 p-2 '>{item?.gia}</td>
                      <td className='border-2 border-black md:border-4 p-2  '>

                          {item?.mo_ta}
                        
                        </td> */}
                        <td className='border-2 border-black  p-8 pt-10 flex justify-center items-center gap-5 '>
                          <button className='text-red-300 hover:text-red-600'
                            onClick={() => {
                              dispatch(actions.editTable(item)) // đẩy dữ liệu lên redux
                              setIsEditing(true)
                            
                            }}
                          >
                              Sửa
                          </button>
                          <button className='text-red-300 hover:text-red-600'
                           onClick={() => handleDelete(item)}
                          >
                              Xóa
                          </button>
                        </td>
                    </tr>
                  )
                })
                
                :
                <tr>
                  <td>Không</td>
                </tr>

            }
          </tbody>
       </table>

      <Pagination  category='table'/> 
      {isEditing && <Update tab  setIsEditing={setIsEditing}/>}
      {isCreate && <CreateNew tab setIsCreate={setIsCreate}/>}
      <ToastContainer />
    </div>
  )
}

export default ManageTable