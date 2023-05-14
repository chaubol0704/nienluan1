import React, {useEffect} from 'react';
import Header from './Header'
import { Outlet } from 'react-router-dom';

import Homepage from './Homepage';
import Footer from './Footer';
import SectionThucdon from './Section_thucdon';
import { apiGetCurrent } from '../../services/user';
import { useDispatch, useSelector } from 'react-redux';
import * as action from '../../store/actions'
import { SliderComponent } from '../../components';

import slider1 from '../../assets/img/SLIDER2.jpg'
import slider2 from '../../assets/img/slider01.jpg'
import slider3 from '../../assets/img/fzn_0370_ll12.jpg'
import slider4 from '../../assets/img/menu.jpg'

const arrImages=[slider1,slider2,slider3,slider4]
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
        <div className='w-full  h-full border boder-red-500 z-3 '>          
            {/* <Header/>           */}

            <SliderComponent  arrImages={arrImages} />
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
