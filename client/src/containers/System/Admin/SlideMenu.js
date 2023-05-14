import {
  AppstoreOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  TableOutlined,
  OrderedListOutlined,
  PayCircleOutlined
} from "@ant-design/icons";
import { Menu } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { User } from "../../../components";

function SideMenu() {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/admin");

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);

  const navigate = useNavigate();
  return (
    <div className="py-5 flex flex-col ">
      {/* <User/> */}
      <Menu
        className="SideMenuVertical"
        mode="vertical"
        onClick={(item) => {
          //item.key
          navigate(item.key);
        }}
        selectedKeys={[selectedKeys]}
        items={[
          {
            label: "Manage Statistics",
            icon: <AppstoreOutlined />,
            key: "/admin/manage-statistics",
          },
          {
            label: "Manage Booking",
            icon: <AppstoreOutlined />,
            key: "/admin/manage-booking",
          },
          {
            label: "Manage Menu",
            key: "/admin/manage-menu",
            icon: <ShopOutlined />,
          },
          {
            label: "Manage Post",
            key: "/admin/manage-post",
            icon: <ShoppingCartOutlined />,
          },
          {
            label: "Manage Customers",
            key: "/admin/customers",
            icon: <UserOutlined />,
          },
          {
            label: "Manage Tablle",
            key: "/admin/manage-table",
            icon: <PayCircleOutlined />,
          },
        ]}
      ></Menu>
    </div>
  );
}
export default SideMenu;