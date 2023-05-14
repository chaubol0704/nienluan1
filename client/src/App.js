import { Routes, Route } from "react-router-dom";
import React, {useState,useEffect} from 'react'
import { SliderComponent } from "./components";
import {Home, Homepage, Login, DetailPost, Header,Footer, Menu, BookingTable} from './containers/Public'
import {path} from './ultils/constant'
import { System , CreatePost ,Admin, Customers} from './containers/System'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useDispatch, useSelector} from 'react-redux'
import moment from 'moment'
import { apiUpdateTable } from "./services";
import { apiCreateTable, apiSetTable, apiUploadImages , apiGetAll} from '../src/services';
import * as actions from '../src/store/actions'

function App() {
    const formatDate = (time_book) => {
        return moment(time_book).format("DD/MM/YYYY");
    }
    const {all} = useSelector((state) => state.book)
    // const all = await apiGetAll()
    let currentDate = new Date()
    // console.log(formatDate(currentDate))
    console.log(all)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(actions.getAll())
        console.log(all)
        const interval = setInterval(() => {
            all.map(async(item) => {
              console.log(item)
                console.log(formatDate(currentDate) > formatDate(item.time_book))
                if(formatDate(currentDate) > formatDate(item.time_book)){
                    let re = await apiSetTable({id:item?.bookban?.id_ban})
                    console.log('so')
                }
              })
        }, 86400000);

      return () => clearInterval(interval);
    },[]);
  
  return (
    
    <div className="bg-primary w-full relative">
      <Header />
      
      <Routes>
         <Route path={path.HOME} element={<Home/>}>
          < Route path={path.LOGIN} element={<Login/>} />  
       </Route>
          
          <Route path={path.HOME_PAGE} element={<Homepage/>}/> 
          <Route path={path.DETAIL_POST} element={<DetailPost/>}/>
          < Route path={path.MENU} element={<Menu/>} />
          < Route path={path.BOOKING} element={<BookingTable/>} />
          {/* < Route path={path.DETAIL} element={<DetailPost/>} /> */}
        <Route path={path.ACCOUNT} element={<System/>}>
          {/* <Route path={path.CREATE_POST} element={<CreatePost/>}/> */}
           
        </Route>
        <Route path={path.ADMIN} element={<Admin/>}>
            {/* <Route path="/customers" element={<Customers />}></Route>  */}
        </Route>
         
      </Routes>
      <Footer className='pb-0'/>
    </div>
  );
}

export default App;
