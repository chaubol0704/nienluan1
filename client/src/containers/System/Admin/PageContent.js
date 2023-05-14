import React from 'react'
import {Customers,Admin,ManagePost, ManageMenu, System, Profile,Order, ManageBooking, ManageTable} from "../index";
import {path} from '../../../ultils/constant'
import { Routes, Route } from "react-router-dom";
import ManageStatistics from '../Pages/ManageStatistics';

const PageContent = () => {
  return (
    <div className='items-center pl-20 w-full'>
      <Routes path={path.ADMIN} element={<Admin />}>
      {/* <Route path="/" element={<Dashboard />}></Route>
      <Route path="/inventory" element={<Inventory />}></Route>
      <Route path="/orders" element={<Orders />}></Route> */}
        <Route path={path.MANAGE_STATISTICS} element={<ManageStatistics />}></Route>
        <Route path={path.MANAGE_BOOKING} element={<ManageBooking />}></Route>
        <Route path={path.MANAGE_MENU} element={<ManageMenu />}></Route>
        <Route path={path.MANAGE_POST} element={<ManagePost />}></Route>
        <Route path={path.MANAGE_TABLE} element={<ManageTable />}></Route>
        <Route path={path.CUSTOMERS} element={<Customers />}></Route>
      </Routes>

    <Routes path={path.ACCOUNT} element={<System />}>
      
      <Route path={path.PROFILE} element={<Profile />}></Route>
      <Route path={path.ORDER} element={<Order />}></Route>

    </Routes>
    </div>
    
    
  )
}

export default PageContent