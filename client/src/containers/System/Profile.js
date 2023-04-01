import React, {useState, useEffect} from 'react';
import { FormCreat ,Button} from '../../components'
import {useDispatch, useSelector} from 'react-redux'
import { apiUpdateUser } from '../../services';

import ModalUser from './ModalUser'
import icons from '../../ultils/icons'
import { Input } from 'antd';
import { render } from 'react-dom';

const { BsCameraFill, ImBin } = icons
const Profile = () => {
    const {currentData} = useSelector(state => state.user)
    console.log(currentData)
    const [payload, setPayload] =useState(() => {
      const initData = {
         name: currentData?.name ,
         email: currentData?.email||'' ,
         dia_chi: currentData?.dia_chi|| '' ,
         gender: currentData?.gender ,
         phone: currentData?.phone  ,
        id: currentData?.id || '',
      }
     
      return initData
  })
  const handleSubmit = async() =>{
        let finalPayload = {
            name: payload?.name ,
            email: payload?.email ,
            dia_chi: payload?.dia_chi ,
            gender: payload?.gender ,
            phone: payload?.phone ,
            id: payload?.id ,
        }
        apiUpdateUser(finalPayload)
        
  }
  return (
    <div className='w-full bg-white top-10 '>
        <div  className='pt-20 pl-10  flex flex-col'>
          <h2 className='flex justify-start text-3xl items-center'>Hồ Sơ Của Tôi</h2>
          <span className='pt-5'>Quản lý thông tin hồ sơ để bảo mật tài khoản</span>
        </div>

        <div >

          <form className='flex flex-col gap-10 p-10'>           
              <div className='flex justify-center gap-10 items-center'>
                  <label htmlFor="title" className='w-1/5'>Họ và tên</label>
                  <div className=' '>
                      <input
                          type="text"
                          id="name"
                          className='rounded-md w-[500px] outline-none border flex-auto border-gray-300 p-2'
                          value={payload.name}
                          onChange={(e) => setPayload(prev => ({ ...prev, name: e.target.value }))}
                      />
                      
                  </div>
              </div>  
              <div className='flex justify-center gap-10 items-center'>
                  <label htmlFor="title" className='w-1/5'>Email</label>
                  <div className=' '>
                      <input
                          type="text"
                          id=" email"
                          className='rounded-md w-[500px] outline-none border flex-auto border-gray-300 p-2'
                          value={payload.email}
                          onChange={(e) => setPayload(prev => ({ ...prev, email: e.target.value }))}
                      />
                      
                  </div>
              </div> 
              <div className='flex justify-center gap-10 items-center'>
                  <label htmlFor="title" className='w-1/5'>Số điện thoại</label>
                  <div className=' '>
                      <input
                          type="text"
                          id=" phone"
                          className='rounded-md w-[500px] outline-none border flex-auto border-gray-300 p-2'
                          value={payload.phone}
                          onChange={(e) => setPayload(prev => ({ ...prev, phone: e.target.value }))}
                      />
                      
                  </div>
              </div> 
              
              <div className='flex justify-center gap-10 items-center'>
                  <label htmlFor="title" className='w-1/5'>Ngày sinh </label>
                  <div className=' '>
                      <input
                          type="date"
                          id=" date"
                          className='rounded-md w-[500px] outline-none border flex-auto border-gray-300 p-2'
                          value={payload.mo_ta}
                          // onChange={(e) => setPayload(prev => ({ ...prev, mo_ta: e.target.value }))}
                      />
                      
                  </div>
              </div> 

              
          </form>
                <div className='flex justify-center gap-10 items-center'>
                  {/* <Button text='Thay đổi mật khẩu'
                    //   onClick={() => }
                      bgColor='bg-green-600' textColor='text-white' 
                      
                      /> */}
                    <div>
                        <ModalUser/>
                    </div>
                  <div className="bg-green-600 text-white active:bg-green-600 font-bold  px-6 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"> 
                    <Button 
                        onClick={handleSubmit} 
                        text= 'Lưu'
                        bgColor='bg-green-600' textColor='text-white' />
                  </div>
                  
              </div>
          
        </div>


        {/* <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-6xl">
             
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
               
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Đổi mật khẩu
                  </h3>
                  
                </div>
               
                <div className="relative p-6 flex-auto">
                    <Form
                        style={{ width: "100%" }}
                        autoComplete="off"
                        labelCol={{ span: 10 }}
                        wrapperCol={{ span: 14 }}
                        onFinish={async (values) => {
                            let finalPayload = {
                            id: values?.id ,
                            name: values?.name ,
                            dia_chi: values?.dia_chi?.image ,
                            password: values?.password ,
                            phone: values?.phone ,
                            email: values?.email ,
                            
                            }
                            const respone = await apiUpdateUser(finalPayload)
                            
                        }}
                        onFinishFailed={(error) => {
                            console.log({ error });
                        }}
                        >
                                                                                               
                        <Form.Item
                            name="password"
                            label="Password"
                            rules={[
                            {
                                required: true,
                            },
                            { min: 6 },
                           
                            ]}
                            hasFeedback
                        >
                            <Input.Password placeholder="Type your password" />
                        </Form.Item>

                        <Form.Item
                            name="confirmPassword"
                            label="Confirm Password"
                            dependencies={["password"]}
                            rules={[
                            {
                                required: true,
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                if (!value || getFieldValue("password") === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(
                                    "The two passwords that you entered does not match."
                                );
                                },
                            }),
                            ]}
                            hasFeedback
                        >
                            <Input.Password placeholder="Confirm your password" />
                        </Form.Item>

                        <Form.Item
                        className='flex justify-center'
                            name="agreement"
                            wrapperCol={{ span: 24 }}
                            valuePropName="checked"
                            rules={[
                            {
                                validator: (_, value) =>
                                value
                                    ? Promise.resolve()
                                    : Promise.reject(
                                        "To proceed, you need to agree with our terms and conditions"
                                    ),
                            },
                            ]}
                        >
                            <Checkbox>
                            {" "}
                            Agree to our <a href="#">Terms and Conditions</a>
                            </Checkbox>
                        </Form.Item>

                        <Form.Item wrapperCol={{ span: 24 }} className='flex justify-center '>
                            <Button className=' bg-blue-300 mr-10' 
                            onClick={()=> setShowModal(false)}>
                                Đóng
                            </Button>
                            <Button  type="primary" htmlType="submit" className='bg-blue-300 ' 
                            // onClick={()=> setIsCreate(false)}
                            >
                                Xác nhận
                            </Button>
                        </Form.Item>
                    </Form>
                      
                </div>
                
              </div>
            </div>
        </div> */}

    </div>
  )
}

export default Profile