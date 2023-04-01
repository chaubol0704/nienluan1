import React, { useCallback, useEffect, useRef, useState } from 'react'
import logo from '../../assets/logo.png';
import { path } from '../../ultils/constant'
import { Button, User } from '../../components';
import {Link, useNavigate,useSearchParams} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../../store/actions'
import Navigation from './Navigation';
import menuManage from '../../ultils/menuManage';
import icons from '../../ultils/icons';

const {AiOutlineLogout , BsChevronDown} = icons

const Header = () => {
    const { isLoggedIn } = useSelector(state => state.auth)
    
    // console.log(currentData)
    const [isShowMenu, setIsShowMenu] = useState(false);
   
    const dispatch = useDispatch();
    const navigate = useNavigate();
     const [searchParams] = useSearchParams()
    const headerRef = useRef()
    const goLogin = useCallback((flag)=> {
        navigate(path.LOGIN , {state:{flag} })  
    },[])
    // tro ve dau trang khi bam vao so phan trang
    useEffect(() => {
        headerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, [searchParams.get('page')])
    return (
        <div ref={headerRef}  className='w-full relative flex items-center justify-center bg-black gap-7 z-50 '>
            <Link to={'/'} >
                <img
                            src={logo}
                            alt="logo"
                            className='w-[300px] h-[120px] object-contain ml-16 '
                />  
            </Link>
           <Navigation />
           
            <div className='flex flex-wrap items-center justify-end mx-auto '>
                {!isLoggedIn && <div className='flex items-center gap-1 '>
                        <Button
                            text={'Đăng nhập'}
                            textColor='text-white'
                            bgColor='bg-[#3961fb]'
                            onClick={() => goLogin(false)}
                        />
                        <Button
                            text={'Đăng ký'}
                            textColor='text-white'
                            bgColor='bg-[#3961fb]'
                            onClick={() => goLogin(true)}
                        />
                    </div>}
                 {isLoggedIn && 
                    <div className='flex items-center  relative gap-1 z-50'>
                        <User />
                        
                        <Button
                            text={'Quản lý tài khoản'}
                            textColor='text-white'
                            bgColor='bg-blue-700'
                            px='px-4'
                            IcAfter={BsChevronDown}
                            onClick={()=> setIsShowMenu(prev => !prev)}
                            onClickOutSide ={()=> setIsShowMenu(false)}
                           
                        />
                        {isShowMenu &&
                            <div className='absolute flex flex-col gap-2 min-w-200 top-full right-0 bg-white p-4 shadow-md rounded-md  '>
                            {menuManage.map(item => {
                                return (
                                    <Link key={item.id}
                                            to={item?.path}
                                           className='hover:text-red-600 flex items-center gap-2'
                                    >
                                        {item?.icon}
                                        {item?.text}
                                        
                                    </Link>
                                )
                            })}
                            <span 
                                onClick={()=> {
                                    setIsShowMenu(false)
                                    dispatch(actions.logout())
                                }} 
                                className='cursor-pointer hover:text-red-600 flex items-center gap-2'>
                                    <AiOutlineLogout/>
                                    Đăng xuất</span>
                             </div>
                        }
                       
                    </div>
                 }
            </div>
            
        </div>
    );
}

export default Header;
