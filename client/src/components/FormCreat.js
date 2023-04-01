import React ,{useState} from 'react'
import { Form, Button, Checkbox, DatePicker, Input, Select, Space } from "antd";
import { useSelector } from 'react-redux';
import { apiRegister } from '../services';

function FormCreat({ isCreate,setIsCreate}) {
  const {dataEdit} = useSelector(state => state.auth)
    const [invalidFields, setInvalidFields] = useState([]);
    const [payload, setPayload] =useState(() => {
      const initData = {
         id: dataEdit?.id || 1,
         name: dataEdit?.name || '',
         dia_chi: dataEdit?.dia_chi?.image || '',
         password: dataEdit?.password || '',
         phone: dataEdit?.phone || '',
         email: dataEdit?.email || '',
         gender: dataEdit?.gender || true,
      }
     
      return initData
  })
  console.log(payload)
  console.log(dataEdit)
  return (
    <div className="App items-center flex flex-col w-full">
      {/* <header className="App-header"> */}
      <h3 className='items-center p-20 text-3xl'>Create New User</h3>
        <Form
           style={{ width: "100%" }}
          autoComplete="off"
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 14 }}
          onFinish={async (values) => {
            let finalPayload = {
              id: values?.id ,
              name: values?.name ,
              dia_chi: values?.dia_chi ,
              password: values?.password ,
              phone: values?.phone ,
              email: values?.email ,
              gender: values.gender === 'Male'? true:false ,
            }
            const respone = await apiRegister(finalPayload)
            setIsCreate(false)
            console.log({ respone });
            console.log({ finalPayload });
            console.log({ values });
          }}
          onFinishFailed={(error) => {
            console.log({ error });
          }}
        >
          <Form.Item
            name="name"
            label="Name"
            value= {payload?.name}
            rules={[
              {
                required: true,
                message: "Please enter your name",
              },
             
              { whitespace: true },
              { min: 3 },
            ]}
            hasFeedback
          >
            <Input placeholder="Type your name" value={payload?.name} />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            value= {payload?.email}
            rules={[
              {
                required: true,
                message: "Please enter your email",
              },
              { type: "email", message: "Please enter a valid email" },
            ]}
            hasFeedback
          >
            <Input placeholder="Type your email" />
          </Form.Item>
            <Form.Item
            name="phone"
            label="Phone"
            rules={[
              {
                required: true,
              },
              { min: 10 },
              // {
              //   validator: (_, value) =>
              //     value && value.includes("A")
              //       ? Promise.resolve()
              //       : Promise.reject("Password does not match criteria."),
              // },
            ]}
            hasFeedback
          >
            <Input placeholder="Type your phone" />
          </Form.Item>
          <Form.Item
            name="dia_chi"
            label="Address"
            value= {payload?.dia_chi}
            rules={[
              {
                required: true,
                message: "Please enter your address",
              },
              { whitespace: true },
              // { min: 3 },
            ]}
            hasFeedback
          >
            <Input placeholder="Type your address" />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
              },
              
              { min: 6 },
              // {
              //   validator: (_, value) =>
              //     value && value.includes("A")
              //       ? Promise.resolve()
              //       : Promise.reject("Password does not match criteria."),
              // },
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

          <Form.Item name="gender" label="Gender" requiredMark="optional">
            <Select placeholder="Select your gender">
              <Select.Option value="male">Male</Select.Option>
              <Select.Option value="female">Female</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="dob"
            label="Date of Birth"
            rules={[
              {
                required: true,
                message: "Please provide your date of birth",
              },
            ]}
            hasFeedback
          >
            <DatePicker
              style={{ width: "100%" }}
              picker="date"
              placeholder="Chose date of birth"
            />
          </Form.Item>

          {/* <Form.Item
            name="website"
            label="Website"
            rules={[{ type: "url", message: "Please enter a valid url" }]}
            hasFeedback
          >
            <Input placeholder="Add your website url" />
          </Form.Item> */}

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
            onClick={()=> setIsCreate(false)}>
                Hủy
            </Button>
            <Button  type="primary" htmlType="submit" className='bg-blue-300 ' 
            // onClick={()=> setIsCreate(false)}
            >
                Tạo user mới
            </Button>
          </Form.Item>
        </Form>
      {/* </header> */}
    </div>
  );
}


export default FormCreat