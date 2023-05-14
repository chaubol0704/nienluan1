import React, {useState, useEffect} from 'react';
import { InputForm, Button } from '../../components';
// import { apiRegister } from '../../services/auth';
import { useLocation,  useNavigate } from 'react-router-dom';
import * as actions from '../../store/actions'
import {useDispatch, useSelector} from 'react-redux'
const Login = () => {
    const location = useLocation()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const { isLoggedIn } = useSelector(state => state.auth)
    const [isRegister, setIsRegister] = useState(location.state?.flag)
    const [showForm, setShowForm] = useState(location.state?.showform)
    console.log(showForm)
    const [invalidFields, setInvalidFields] = useState([]);
    const [payload, setPayload]= useState({
        phone: '',
        password:'',
        name: '',
        phan_quyen: 'khachhang',
        avatar: 'https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png'
    })
    useEffect(()=> {
        setIsRegister(location.state?.flag)
        setShowForm(location.state?.showform)
    },[location.state?.flag, showForm])
    useEffect(() => {
        isLoggedIn && navigate('/')
    }, [isLoggedIn])
    const handleSubmit = async () => {
        let finalPayload = isRegister ? payload : {
            phone: payload.phone,
            password: payload.password
        }
        let invalids = validate(finalPayload)
        if (invalids === 0) isRegister ? dispatch(actions.register(payload)) : dispatch(actions.login(payload))
        // setIsRegister(false)
        if (invalids === 0) setShowForm(false)
    }
    const validate = (payload) => {
        let invalids = 0
        let fields = Object.entries(payload)
        fields.forEach(item => {
            if (item[1] === '') {
                setInvalidFields(prev => [...prev, {
                    name: item[0],
                    message: 'Bạn không được bỏ trống trường này.'
                }])
                invalids++
            }
        })
        fields.forEach(item => {
            switch (item[0]) {
                case 'password':
                    if (item[1].length < 6) {
                        setInvalidFields(prev => [...prev, {
                            name: item[0],
                            message: 'Mật khẩu phải có tối thiểu 6 kí tự.'
                        }])
                        invalids++
                    }
                    break;
                case 'phone':
                    if (!+item[1]) {
                        setInvalidFields(prev => [...prev, {
                            name: item[0],
                            message: 'Số điện thoại không hợp lệ.'
                        }])
                        invalids++
                    }
                    break

                default:
                    break;
            }
        })
        return invalids
    }
    return (
        <div> 
        {showForm &&
            <div className='w-full flex items-center justify-center relative '>
                <div className='absolute top-0 z-50 bg-white w-[600px] p-[30px] pb-[100px] rounded-md shadow-sm mt-8 '>
                    <h3 className='font-semibold text-2xl mb-3'>{isRegister? 'Đăng ký tài khoản': 'Đăng nhập'}</h3>

                    <div className='w-full flex flex-col gap-3 mb-7 '>
                        {isRegister && <InputForm setInvalidFields={setInvalidFields} invalidFields={invalidFields} label={'Họ và tên'} value={payload.name} setvalue={setPayload} keyPayload={'name'}/>}
                        <InputForm setInvalidFields={setInvalidFields} invalidFields={invalidFields} label={'Số điện thoại'} value={payload.phone} setvalue={setPayload} keyPayload={'phone'}/>
                        <InputForm setInvalidFields={setInvalidFields} invalidFields={invalidFields} label={'Mật khẩu'} value={payload.password} setvalue={setPayload} keyPayload={'password'} type='password'/>
                    </div>

                    <Button
                        text={isRegister ? 'Đăng ký' : 'Đăng nhập'}
                            bgColor='bg-secondary1'
                            textColor='text-white'
                            fullWidth
                            onClick={handleSubmit}
                    />

                    <div className='mt-7  flex items-center justify-between'>
                        {isRegister ? 
                                <small>Bạn đã có tài khoản ? 
                                    <span  className='text-blue-500 hover:underline cursor-pointer'
                                    onClick={() => 
                                    {setIsRegister(false)
                                        setPayload({
                                        phone: '',
                                        password: '',
                                        name: '',
                                        phan_quyen: 'khachhang',
                                    })
                                    
                                    }}>Đăng nhập ngay</span></small>
                                :
                            <>
                                <small className='text-[blue] hover:text-[red] cursor-pointer'>Bạn đã quên mật khẩu</small>
                                <small 
                                    onClick={()=>
                                        {setIsRegister(true)
                                        setPayload({
                                                phone: '',
                                                password: '',
                                                name: '',
                                                phan_quyen: 'khachhang',
                                            })
                                                
                                        }} 
                                className='text-[blue] hover:text-[red] cursor-pointer'> Tạo tài khoản mới</small>
                            </>                
                        }
                    
                    </div>
                </div>
                
            {/* <div className="opacity-25 fixed inset-0 z-40 bg-black"></div> */}
            </div>
        }
        </div>
    );
}

export default Login;
