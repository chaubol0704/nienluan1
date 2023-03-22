import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import logo from '../../assets/img/bct.png';
import {TinTuc, Pagination,} from './index'
import { useSearchParams} from 'react-router-dom';
import { Sidebar } from '../../components';
import { Outlet } from 'react-router-dom';
const Homepage = () => {
    return (
        <div className='flex flex-col gap-3  bg-white w-full h-full  '>
        
            {/* <Header/>           */}
            {/* <div className='w-full flex flex-col items-center justify-between '>
             
                <Outlet />  
                
            </div> */}
           <div className='w-full flex gap-4'>
                <div className='w-[65%]'>
                    
                    <TinTuc />
                    
                    <Pagination type='/home-page' category='posts'/>
                </div>

                <div className='w-[35%] ' >
                    <Sidebar/>
                    
                </div>
           </div>
         
           {/* <Footer/> */}
        </div>
    );
}

export default Homepage;
