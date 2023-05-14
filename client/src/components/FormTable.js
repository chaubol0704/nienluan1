import React, {useState, useEffect} from 'react';
import { InputForm, Button, Loading } from './index';
import { useLocation,  useNavigate } from 'react-router-dom';
import * as actions from '../store/actions'
import {useDispatch, useSelector} from 'react-redux'
import { apiCreateTable, apiUpdateTable, apiUploadImages } from '../services';
import icons from '../ultils/icons'

const { BsCameraFill, ImBin } = icons

const FormTable = ({isEditing,setIsEditing, isCreate,setIsCreate}) => {
    const {dataTable} = useSelector(state => state.book)
    console.log(dataTable)
    const [invalidFields, setInvalidFields] = useState([]);
    const [payload, setPayload] =useState(() => {
      const initData = {
         id: isEditing? dataTable?.id : 1,
         trang_thai: isEditing? dataTable?.trang_thai : '',
         so_ghe: isEditing? dataTable?.so_ghe : 0,
      }
     
      return initData
  })
//   const validate  = (payload) =>{
//        return 0
//   }
  const handleSubmit = async() =>{
        let finalPayload = {
            id: payload?.id ,
            trang_thai: payload?.trang_thai ,
            so_ghe: payload?.so_ghe ,
        }
        
        console.log(isEditing)
        console.log(isEditing)
        // let invalids = validate(finalPayload)
        isEditing? await apiUpdateTable(finalPayload) :await apiCreateTable(finalPayload)
        isEditing ? setIsEditing(false): setIsCreate(false)
        console.log(finalPayload)
  }
//   const [imagesPreview, setImagesPreview] = useState([payload.anh_mon])
//   const [isLoading, setIsLoading] = useState(false)
//   const handleDeleteImage = (image) => {
//         setImagesPreview(prev => prev?.filter(item => item !== image))
//         setPayload(prev => ({
//             ...prev,
//             images: prev.images?.filter(item => item !== image)
//         }))
//     }
//   const handleFiles = async (e) => {
//         // console.log(e)
//         e.stopPropagation()
//         setIsLoading(true)
//         let images = []
//         let files = e.target.files
//         let formData = new FormData()
//         for (let i of files) {
//             formData.append('file', i)
//             formData.append('upload_preset', process.env.REACT_APP_UPLOAD_ASSETS_NAME)
//             let response = await apiUploadImages(formData)
//             console.log(images)
//             if (response.status === 200) images = [...images, response.data?.secure_url]
//         }
//         setIsLoading(false)
//         setImagesPreview(prev => [...prev, ...images])
//         setPayload(prev => ({ ...prev, anh_mon: [...prev.anh_mon, ...images] }))
//     }
  return (
    <div className='p-20 z-50 h-[2/5]'>

        <form className='flex flex-col gap-20'>   
            <div className='flex justify-center gap-10'>
                 <div className='flex justify-center gap-10 items-center'>
                <label htmlFor="title" className='w-1/5'>Trạng thái bàn</label>
                <div className='flex items-center'>
                    <input
                        type="text"
                        id=" title"
                        className='rounded-md outline-none border flex-auto border-gray-300 p-2'
                        value={payload.trang_thai}
                        onChange={(e) => setPayload(prev => ({ ...prev, trang_thai: e.target.value }))}
                    />
                    
                </div>
            </div>  
            <div className='flex justify-center gap-10 items-center'>
                <label htmlFor="title" className='w-1/5'>Số ghế</label>
                <div className='flex items-center'>
                    <input
                        type="text"
                        id=" title"
                        className='rounded-md outline-none border flex-auto border-gray-300 p-2'
                        value={payload.so_ghe}
                        onChange={(e) => setPayload(prev => ({ ...prev, so_ghe: e.target.value }))}
                    />
                    
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

export default FormTable