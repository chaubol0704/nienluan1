import React, {useState, useEffect} from 'react';
import { InputForm, Button, Loading } from './index';
import { useLocation,  useNavigate } from 'react-router-dom';
import * as actions from '../store/actions'
import {useDispatch, useSelector} from 'react-redux'
import { apiCreatePost, apiUpdatePost, apiUploadImages } from '../services';
import icons from '../ultils/icons'

const { BsCameraFill, ImBin } = icons

const FormPost = ({isEditing,setIsEditing, isCreate,setIsCreate}) => {
    const {dataEdit} = useSelector(state => state.post)
    const [invalidFields, setInvalidFields] = useState([]);
    const [payload, setPayload] =useState(() => {
      const initData = {
         id: dataEdit?.id || 1,
         title: dataEdit?.title || '',
         images: dataEdit?.images?.image || '',
         content: dataEdit?.content || '',
      }
     
      return initData
  })
  const validate  = (payload) =>{
       return 0
  }
  const handleSubmit = async() =>{
        let finalPayload = {
            title: payload.title,
            images: payload?.images?.image,
            content: payload?.content,
            id: payload?.id
        }
        
        console.log(isEditing)
        console.log(isEditing)
        let invalids = validate(finalPayload)
        isEditing ? await apiUpdatePost(finalPayload) : await apiCreatePost(finalPayload)
        isEditing ? setIsEditing(false): setIsCreate(false)
        console.log(finalPayload)
  }
  const [imagesPreview, setImagesPreview] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const handleDeleteImage = (image) => {
        setImagesPreview(prev => prev?.filter(item => item !== image))
        setPayload(prev => ({
            ...prev,
            images: prev.images?.filter(item => item !== image)
        }))
    }
  const handleFiles = async (e) => {
        console.log(e)
        e.stopPropagation()
        setIsLoading(true)
        let images = []
        let files = e.target.files
        let formData = new FormData()
        for (let i of files) {
            formData.append('file', i)
            formData.append('upload_preset', process.env.REACT_APP_UPLOAD_ASSETS_NAME)
            let response = await apiUploadImages(formData)
            console.log(images)
            if (response.status === 200) images = [...images, response.data?.secure_url]
        }
        setIsLoading(false)
        setImagesPreview(prev => [...prev, ...images])
        setPayload(prev => ({ ...prev, images: [...prev.images, ...images] }))
    }
  return (
    <div className='p-20 '>
        <form className='gap-5'>           
             <div className='flex justify-center gap-5 items-center'>
                <label htmlFor="title" className='w-1/5'>Tiêu đề</label>
                <div className='flex items-center'>
                    <input
                        type="text"
                        id=" title"
                        className='rounded-md outline-none border flex-auto border-gray-300 p-2  w-[600px]'
                        value={payload.title}
                        onChange={(e) => setPayload(prev => ({ ...prev, title: e.target.value }))}
                    />
                    
                </div>
            </div>  
            <div className='w-full mb-6'>
                        <h2 className='font-semibold text-xl py-4'>Hình ảnh</h2>
                        <small>Cập nhật hình ảnh tại đây</small>
                        <div className='w-full'>
                            <label className='w-full border-2 h-[200px] my-4 gap-4 flex flex-col items-center justify-center border-gray-400 border-dashed rounded-md' htmlFor="file">
                                {isLoading
                                    ? <Loading />
                                    : <div className='flex flex-col items-center justify-center'>
                                        <BsCameraFill color='blue' size={50} />
                                        Thêm ảnh
                                    </div>}
                                    
                            </label>
                            <input onChange={handleFiles}  type="file" id='file' multiple />
                            <div className='w-full'>
                                <h3 className='font-medium py-4'>Ảnh đã chọn</h3>
                                <div className='flex gap-4 items-center'>
                                    {imagesPreview?.map(item => {
                                        return (
                                            <div key={item} className='relative w-1/3 h-1/3 '>
                                                <img src={item} alt="preview" className='w-full h-full object-cover rounded-md' />
                                                <span
                                                    title='Xóa'
                                                    onClick={() => handleDeleteImage(item)}
                                                    className='absolute top-0 right-0 p-2 cursor-pointer bg-gray-300 hover:bg-gray-400 rounded-full'
                                                >
                                                    <ImBin />
                                                </span>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>      
            <div className='flex flex-col gap-2'>
                    <label htmlFor="desc">Nội dung mô tả</label>
                    <textarea
                        id="desc"
                        cols="30" rows="10"
                        className='w-full rounded-md outline-none border border-gray-300 p-2'
                        value={payload.content}
                        onChange={(e) => setPayload(prev => ({ ...prev, content: e.target.value }))}
                    ></textarea>
            </div>

            <div className='flex justify-between'>
                <Button text='Hủy'
                    onClick={()=> isCreate ? setIsCreate(false): setIsEditing(false)}
                    bgColor='bg-green-600' textColor='text-white'/>
                <Button onClick={handleSubmit} 
                 text= {isEditing ?'Cập nhật' :'Tạo mới' }
                bgColor='bg-green-600' textColor='text-white' />
            </div>
        </form>
    </div>
  )
}

export default FormPost