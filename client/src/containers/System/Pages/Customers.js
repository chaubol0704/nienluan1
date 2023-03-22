import { Avatar, Rate, Space, Table, Typography,Modal, Button,Input } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import React,{ memo , useEffect,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as action from '../../../store/actions'
import { apiDeleteUser, apiUpdateUser } from "../../../services";
import { CreateNew, Update } from '../../../components'
import * as actions from '../../../store/actions'

const Customers = () => {
  let cus = true
    const [isCreate, setIsCreate] = useState(false);

    const [loading, setLoading] = useState(false);
    const [dataSource, setDataSource] = useState([]);
    const [editingUser, setEditingUser] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [update, setUpdate] = useState(false);
   const [createUser, setCreateUser] = useState(false);
    const {user}  = useSelector(state => state.auth)
    const dispatch = useDispatch()
    useEffect(()=>{
        setLoading(true)
        dispatch(action.getUser())
        setDataSource(user)
        setLoading(false)
    },[update])
    // console.log(user)
    const onDeleteUser = (record) => {
        console.log(record.id)
        Modal.confirm({
          title: "Are you sure, you want to delete this User record?",
          okText: "Yes",
          okType: "danger",
          onOk: async() => {
            const respone = await apiDeleteUser({id: record.id})
            
            if(respone.err === 0){
              setUpdate(prev => !prev)
              setLoading(true)
              setDataSource((pre) => {
                return pre.filter((users) => users.id !== record.id);
              });
              setLoading(false)
            }
          },
        });
    };
    const onEditUser = (record) => {
      setIsEditing(true)     
      
      setEditingUser({ ...record });
    };
    const resetEditing = () => {
      setIsEditing(false);
      setEditingUser(null);
    };
  return (
    <Space size={20} direction="vertical" className="w-[1024px] p-10">
        <Typography.Title level={4}>Customers</Typography.Title>
        <Button onClick={() => setIsCreate(true)}>Add a new User</Button>
        <Table
        loading={loading}
        // style={{ width: , marginLeft: 12 }}
        columns = {
          [
                // {
                //   title: "Photo",
                //   dataIndex: "image",
                //   render: (link) => {
                //     return <Avatar src={link} />;
                //   },
                // },
                {
                  title: "id",
                  dataIndex: "id",
                },
                {
                  title: "Tên",
                  dataIndex: "name",
                },
                {
                  title: "Địa chỉ",
                  dataIndex: "dia_chi",
                },
                {
                  title: "Phone",
                  dataIndex: "phone",
                },
                {
                  title: "Email",
                  dataIndex: "email",
                },
                {
                  title: "Gender",
                  dataIndex: "gender",
                },
                {
                    title: "Actions",
                    render: (record) => {
                    
                      return (
                        <>
                          <EditOutlined
                            onClick={() => {
                              console.log(dataSource)
                              dispatch(actions.editPost(dataSource[0]))
                              setIsEditing(true);
                            }}
                          />
                          <DeleteOutlined
                            onClick={() => {
                              onDeleteUser(record);
                            }}
                            
                            style={{ color: "red", marginLeft: 12 }}
                          />
                        </>
                      )}
                },
          ]}
        dataSource={dataSource}
        pagination={{
          pageSize: 5,
        }}
      ></Table>
      {/* <Modal
          className="form"
          title="Edit User"
          visible={isEditing}
          okText="Save"
          onCancel={() => {
            resetEditing();
          }}
          onOk={() => {
            setDataSource((pre) => {
              return pre.map((user) => {
                if (user.id === editingUser.id) {
                  apiUpdateUser(editingUser)
                  return editingUser;
                } else {
                  return user;
                }
              });
             
            });
             console.log(dataSource)
            resetEditing();
          }}
        >
          <Input
            value={editingUser?.name}
            onChange={(e) => {
              setEditingUser((pre) => {
                return { ...pre, name: e.target.value };
              });
            }}
          />
          <Input
            value={editingUser?.dia_chi}
            onChange={(e) => {
              setEditingUser((pre) => {
                return { ...pre, dia_chi: e.target.value };
              });
            }}
          />
      </Modal> */}
      {isEditing && <Update cus setIsEditing={setIsEditing}/>}
      {isCreate && <CreateNew cus  setIsCreate={setIsCreate}/>}
    </Space>
  )
}

export default Customers