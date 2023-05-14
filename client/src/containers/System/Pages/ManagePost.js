import React, {useState,useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { CreateNew, Update } from '../../../components'
import { useSearchParams} from 'react-router-dom';
import { Pagination } from '../../Public'
import * as actions from '../../../store/actions'
import { apiDeletePost } from '../../../services';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ManagePost = () => {
  const dispatch = useDispatch()
  const [searchParams] = useSearchParams()
  const {posts} = useSelector((state) => state.post)
  let page = searchParams.get('page')
  let po = true
  const [isEditing, setIsEditing] = useState(false);
  const [isCreate, setIsCreate] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  // hứng data từ component
  const [dataEdit, setDataEdit] = useState({});
  useEffect(() =>{
        // dispatch(getMenu())
        let offset = page? +page : 1
        dispatch(actions.getPostsLimit({offset }))
    },[page,isEditing,isCreate,isDelete])
  // useEffect(() => {
  //   dispatch(actions.getPosts())
    
  // }, [isEditing,isCreate]);
  // console.log(posts)
  const handleDelete= async(item) => {
    // console.log(item.id)
    setIsDelete(true)
    const respone = await apiDeletePost({id:item.id})
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
        <h1 className='text-3xl font-medium'>Quản lý tin đăng</h1>
        <button className='text-green-600 hover:text-red-700 text-xl'
            onClick={() => {  
              setIsCreate(true)
            }}
        >
            Tạo mới bài đăng
          </button>
      </div>
      <table className='w-full table-fixed'>

          <thead>
            <tr className='h-'>
              <th className='border-2 border-black md:border-4 p-2 justify-center item-center'>Mã tin</th>
              <th className='border-2 border-black md:border-4 p-2 justify-center item-center'>Tiêu đề</th>
              {/* <th className='border-2 border-black md:border-4 p-2 justify-center item-center'>Nội dung</th> */}
              <th className='border-2 border-black md:border-4 p-2 justify-center item-center'>Hình ảnh</th>
              <th className='border-2 border-black md:border-4 p-2 justify-center item-center'>Ngày đăng</th>
              <th className='border-2 border-black md:border-4 p-2 justify-center item-center'>Tùy chọn</th>
            </tr>
          </thead>
          <tbody className=''>
              {posts ?
                
                posts?.map(item =>{
                  
                  return (
                    
                    <tr key={item.id}  >
                      <td className='border-2 border-black md:border-4 pl-20  justify-center item-center'>{item?.id}</td>
                      <td className='border-2 border-black md:border-4 p-2 '>{item?.title}</td>
                      {/* <td className='border-2 border-black md:border-4 p-2'>{item?.content}</td> */}
                      <td className='border-2 border-black md:border-4 p-2 '>
                        <img src={item?.images?.image} 
                          alt=""
                          className='w-20 h-20 object-cover rounded-md'
                          />
                      </td>
                      <td className='border-2 border-black md:border-4 p-2  '>
                          {item?.createdAt.replace('T', '   ')}
                        
                        </td>
                        <td className='border-2 border-black  p-12  flex justify-center items-center gap-5 '>
                          <button className='text-red-300 hover:text-red-600'
                            onClick={() => {
                              dispatch(actions.editPost(item)) // đẩy dữ liệu lên redux
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
                  <td>Không có bài đăng</td>
                </tr>

            }
          </tbody>
       </table>

      <Pagination  category='posts'/> 
      {isEditing && <Update po  setIsEditing={setIsEditing}/>}
      {isCreate && <CreateNew po setIsCreate={setIsCreate}/>}
      <ToastContainer />
    </div>
  )
}

export default ManagePost