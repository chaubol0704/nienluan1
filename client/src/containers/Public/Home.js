import React, {useEffect} from 'react';
import Header from './Header'
import { Outlet } from 'react-router-dom';

import Homepage from './Homepage';
import Footer from './Footer';
import SectionThucdon from './Section_thucdon';
import { apiGetCurrent } from '../../services/user';
import { useDispatch, useSelector } from 'react-redux';
import * as action from '../../store/actions'

const Home = () => {

    const dispatch = useDispatch()
    const {isLoggedIn} = useSelector(state => state.auth)
    useEffect(() => {
        setTimeout(() => {
            isLoggedIn && dispatch(action.getCurrent())
        },1000)
    }, [isLoggedIn]);
    // console.log(currentData)
    return (
        <div className='w-full m-out h-full border boder-red-500 z-3 '>          
            {/* <Header/>           */}
            <div className='w-full flex flex-col items-center justify-between '>
             
                <Outlet />  
                
            </div>

            
            <div className='section'>
                <SectionThucdon/>
            </div>
            
            {/* <Footer/> */}
        </div>
    );
}

export default Home;
