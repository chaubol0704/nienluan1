import React, {useState,useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { CreateNew, Update } from '../../../components'
import { useSearchParams} from 'react-router-dom';
import { Pagination } from '../../Public'
import * as actions from '../../../store/actions'


const ManagePost = () => {
  const dispatch = useDispatch()
  const [searchParams] = useSearchParams()
  const {posts} = useSelector((state) => state.post)
  let page = searchParams.get('page')
  let po = true
  const [isEditing, setIsEditing] = useState(false);
  const [isCreate, setIsCreate] = useState(false);
  // hứng data từ component
  const [dataEdit, setDataEdit] = useState({});
  useEffect(() =>{
        // dispatch(getMenu())
        let offset = page? +page : 1
        dispatch(actions.getPostsLimit({offset }))
    },[page,isEditing,isCreate])
  // useEffect(() => {
  //   dispatch(actions.getPosts())
    
  // }, [isEditing,isCreate]);
  // console.log(posts)
  return (
    <div>
      <div className='py-4 m-10 border-b border-gray-200 flex items-center justify-between'>
        <h1 className='text-3xl font-medium'>Quản lý tin đăng</h1>
        <button className='bg-red-300'
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
              <th className='border p-2'>Mã tin</th>
              <th className='border p-2'>Tiêu đề</th>
              {/* <th className='border p-2'>Nội dung</th> */}
              <th className='border p-2'>Hình ảnh</th>
              <th className='border p-2'>Ngày đăng</th>
              <th className='border p-2'>Tùy chọn</th>
            </tr>
          </thead>
          <tbody className=''>
              {posts ?
                
                posts?.map(item =>{
                  
                  return (
                    
                    <tr key={item.id}  >
                      <td className='border pl-20  justify-center item-center'>{item?.id}</td>
                      <td className='border p-2 '>{item?.title}</td>
                      {/* <td className='border p-2'>{item?.content}</td> */}
                      <td className='border p-2 '>
                        <img src={item?.images?.image} 
                          alt=""
                          className='w-20 h-20 object-cover rounded-md'
                          />
                      </td>
                      <td className='border p-2  '>
                          {item?.createdAt.replace('T', '   ')}
                        
                        </td>
                        <td className='border p-8 pt-10 flex justify-center items-center gap-5 '>
                          <button className='bg-red-300'
                            onClick={() => {
                              dispatch(actions.editPost(item)) // đẩy dữ liệu lên redux
                              setIsEditing(true)
                            
                            }}
                          >
                              Sửa
                          </button>
                          <button className='bg-red-300'>
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
    </div>
  )
}

export default ManagePost