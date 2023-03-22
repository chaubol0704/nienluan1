import React from 'react'
import {Customers,Admin,ManagePost, ManageMenu} from "../index";
import {path} from '../../../ultils/constant'
import { Routes, Route } from "react-router-dom";

const PageContent = () => {
  return (
    <div className='items-center pl-20 w-full'>
        <Routes path={path.ADMIN} element={<Admin />}>
      {/* <Route path="/" element={<Dashboard />}></Route>
      <Route path="/inventory" element={<Inventory />}></Route>
      <Route path="/orders" element={<Orders />}></Route> */}
      <Route path={path.MANAGE_MENU} element={<ManageMenu />}></Route>
      <Route path={path.MANAGE_POST} element={<ManagePost />}></Route>
      <Route path={path.CUSTOMERS} element={<Customers />}></Route>
    </Routes>
    </div>
    
    
  )
}

export default PageContent