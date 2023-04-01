import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { Form,  Input, Select, Space ,Button,Checkbox} from "antd";
import bcrypt from 'bcryptjs'
import { apiUpdateUser } from '../../services';

export default function ModalUser() {
  const {currentData} = useSelector(state => state.user)
  const [payload, setPayload] =useState(() => {
      const initData = {
         name: currentData?.name ,
         email: currentData?.email ,
         dia_chi: currentData?.dia_chi ,
         gender: currentData?.gender ,
         phone: currentData?.phone  ,
         password: currentData?.password,
        id: currentData?.id || '',
      }
     
      return initData
  })
  const checkpassword = (value) => {
    let isCorrectPassword = bcrypt.compareSync(value, currentData.password)
      console.log(value)
      // console.log(password)
      console.log(isCorrectPassword)
      return isCorrectPassword
  }
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <button
        className="bg-green-600 text-white active:bg-green-600 font-bold  px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Thay đổi mật khẩu
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-6xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Đổi mật khẩu
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <Form
                        style={{ width: "100%" }}
                        autoComplete="off"
                        labelCol={{ span: 10 }}
                        wrapperCol={{ span: 14 }}
                        onFinish={async (values) => {
                          let finalPayload = {
                            name: currentData?.name ,
                            email: currentData?.email ,
                            dia_chi: currentData?.dia_chi ,
                            gender: currentData?.gender ,
                            phone: currentData?.phone ,
                            password: values?.password ,
                            id: currentData?.id ,
                          }
                          console.log(finalPayload)
                          const respone = await apiUpdateUser(finalPayload)
                          console.log({ respone });
                        }}
                        // onFinishFailed={(error) => {
                        //   console.log({ error });
                        // }}
                      >
                              <Form.Item
                                  name="passwordold"
                                  label="Mật khẩu cũ"
                                  rules={[
                                    {
                                      required: true,
                                    },
                                    //{ value: currentData?.password },
                                    {
                                      validator: (_, value) =>
                                      value &&  checkpassword(value)  
                                          ? Promise.resolve()
                                          : Promise.reject("Password does not true."),
                                    },
                                  ]}
                                  hasFeedback
                                >
                                  {/* {setTimeout(() => {
                                    
                                  }, 5000)} */}
                                  <Input.Password placeholder="Type your password" />
                                
                            </Form.Item>

                            <Form.Item
                                  name="password"
                                  label="Mật khẩu mới"
                                  rules={[
                                    {
                                      required: true,
                                    },
                                    { min: 6 },
                                   
                                  ]}
                                  hasFeedback
                                  
                                >
                                <Input.Password placeholder="Type your password" 
                                  />
                            </Form.Item>

                            <Form.Item
                              name="confirmPassword"
                              label="Xác nhận mật khẩu"
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
                              
                              <Form.Item wrapperCol={{ span: 24 }} className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <Button  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    onClick={()=>setShowModal(false)}>
                                        Đóng
                                    </Button>
                                    <Button  type="primary" htmlType="submit" 
                                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                      onClick={()=> setShowModal(false)}
                                    >
                                        Xác nhận
                                    </Button>
                             </Form.Item>

                  </Form>
                      
                </div>
                
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )
    : null}
    </div>
  )
}