import React, {useState, useEffect} from 'react';
import { InputForm, Button, Loading } from './index';
import { useLocation,  useNavigate } from 'react-router-dom';
import * as actions from '../store/actions'
import {useDispatch, useSelector} from 'react-redux'
import { apiRegister, apiUpdateUser, apiUploadImages } from '../services';
import icons from '../ultils/icons'

const { BsCameraFill, ImBin } = icons

const FormUser = ({isEditing,setIsEditing, isCreate,setIsCreate}) => {
    const {dataEdit} = useSelector(state => state.auth)
    console.log(dataEdit)
    const [invalidFields, setInvalidFields] = useState([]);
    const [payload, setPayload] =useState(() => {
      const initData = {
         id: isEditing &&  dataEdit?.id ,
         name: isEditing?  dataEdit?.name : '',
         dia_chi: isEditing?  dataEdit?.dia_chi: '',
         password: isEditing?  dataEdit?.password : '',
         phone: isEditing?  dataEdit?.phone : '',
         email: isEditing?  dataEdit?.email : '',
         avatar: isEditing?  dataEdit?.avatar : '',
         gender: isEditing?  dataEdit?.gender : 1,
         phan_quyen: isEditing?  dataEdit?.phan_quyen : 'khachhang',
      }
     
      return initData
  })
//   const validate  = (payload) =>{
//        return 0
//   }
  const handleSubmit = async() =>{
        console.log(payload.avatar)
        let finalPayload = {
            id: payload?.id ,
            name: payload?.name ,
            email: payload?.email ,
            dia_chi: payload?.dia_chi ,
            avatar:isEditing? payload?.avatar[payload?.avatar.length-1]: payload?.avatar[0] ,
            phone: payload?.phone ,
            password: payload?.password ,
            gender: payload?.gender ,
            phan_quyen: payload?.phan_quyen ,
            // date: payload?.date ,
        }
        
        console.log(isEditing)
        // console.log(fi)
        // let invalids = validate(finalPayload)
        isEditing? await apiUpdateUser(finalPayload) :await apiRegister(finalPayload)
        isEditing ? setIsEditing(false): setIsCreate(false)
        console.log(finalPayload)
  }
  const [imagesPreview, setImagesPreview] = useState([payload.avatar])
  const [isLoading, setIsLoading] = useState(false)
  const handleDeleteImage = (image) => {
        setImagesPreview(prev => prev?.filter(item => item !== image))
        setPayload(prev => ({
            ...prev,
            images: prev.images?.filter(item => item !== image)
        }))
    }
  const handleFiles = async (e) => {
        // console.log(e)
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
        setPayload(prev => ({ ...prev, avatar: [...prev.avatar, ...images] }))
    }
  return (
    <div className='p-20 z-50 top-10'>

        <form className='gap-5'>           
             <div className='flex justify-center gap-10 items-center'>
                <label htmlFor="title" className='w-1/5'>Họ tên</label>
                <div className='flex items-center'>
                    <input
                        type="text"
                        id=" title"
                        className='rounded-md outline-none border flex-auto border-gray-300 p-2'
                        value={payload.name}
                        onChange={(e) => setPayload(prev => ({ ...prev, name: e.target.value }))}
                    />
                    
                </div>
            </div>  
            <div className='flex justify-center gap-10 items-center'>
                <label htmlFor="title" className='w-1/5'>Email</label>
                <div className='flex items-center'>
                    <input
                        type="text"
                        id=" title"
                        className='rounded-md outline-none border flex-auto border-gray-300 p-2'
                        value={payload.email}
                        onChange={(e) => setPayload(prev => ({ ...prev, email: e.target.value }))}
                    />
                    
                </div>
            </div> 
            <div className='flex justify-center gap-10 items-center'>
                <label htmlFor="title" className='w-1/5'>Số điện thoại</label>
                <div className='flex items-center'>
                    <input
                        type="text"
                        id=" title"
                        className='rounded-md outline-none border flex-auto border-gray-300 p-2'
                        value={payload.phone}
                        onChange={(e) => setPayload(prev => ({ ...prev, phone: e.target.value }))}
                    />
                    
                </div>
            </div> 
            <div className='flex justify-center gap-10 items-center'>
                <label htmlFor="title" className='w-1/5'>Địa chỉ</label>
                <div className='flex items-center'>
                    <input
                        type="text"
                        id=" title"
                        className='rounded-md outline-none border flex-auto border-gray-300 p-2'
                        value={payload.dia_chi}
                        onChange={(e) => setPayload(prev => ({ ...prev, dia_chi: e.target.value }))}
                    />
                    
                </div>
            </div> 
            <div className='flex justify-center gap-10 items-center'>
                <label htmlFor="title" className='w-1/5'>Mật khẩu</label>
                <div className='flex items-center'>
                    <input
                        type="text"
                        id=" title"
                        className='rounded-md outline-none border flex-auto border-gray-300 p-2'
                        value={payload.password}
                        onChange={(e) => setPayload(prev => ({ ...prev, password: e.target.value }))}
                    />
                    
                </div>
            </div> 
            <div className="flex justify-center gap-10 items-center">
                    <label htmlFor="title" className='w-1/5'>
                            Giới tính
                    </label>
                    <div className="flex items-center space-x-6">
                        <div className="flex items-center">
                            <input
                            type="radio"
                            name="radio1"
                            id="radioButton1"
                            className="h-5 w-5"
                            onChange={(e) => setPayload(prev => ({ ...prev, gender: 0 }))}
                            />
                            <label
                            htmlFor="radioButton1"
                            className="pl-3 text-base font-medium text-[#07074D]"
                            >
                                Male
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input
                            type="radio"
                            name="radio1"
                            id="radioButton2"
                            className="h-5 w-5"
                            onChange={(e) => setPayload(prev => ({ ...prev, gender: 1 }))}
                            />
                            <label
                            htmlFor="radioButton2"
                            className="pl-3 text-base font-medium text-[#07074D]"
                            >
                                Female
                            </label>
                        </div>
                    </div>
            </div>
            <div className='w-full mb-6'>
                        <h2 className='font-semibold text-xl py-4'>Hình ảnh</h2>
                        <small>Cập nhật avatar tại đây</small>
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
                                <div className='flex gap-4  items-center'>
                                    {imagesPreview?.map(item => {
                                        return (
                                            <div key={item} className='relative '>
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

            <div className='flex justify-center gap-10 items-center'>
                <Button text='Hủy'
                    onClick={()=> 
                       isCreate ? setIsCreate(false): setIsEditing(false)}
                    bgColor='bg-green-600' textColor='text-white'/>
                <Button onClick={handleSubmit} 
                 text= {isEditing ?'Cập nhật' :'Tạo mới' }
                bgColor='bg-green-600' textColor='text-white' />
            </div>
        </form>
    </div>
  )
}

export default FormUser