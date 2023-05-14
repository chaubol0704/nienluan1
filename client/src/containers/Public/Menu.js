import React, {useEffect, memo, useState}from 'react';
import { getMenu ,getMenuLimit} from '../../store/actions/menu';
import {useDispatch, useSelector} from 'react-redux'
import { Link, useSearchParams} from 'react-router-dom';
import { ItemMenu,Search,ModalItem } from '../../components';
import { Pagination } from '.';

import * as  actions from '../../store/actions';


const Menu = () => {
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch()
    const [searchParams] = useSearchParams()
    const {menu} = useSelector((state) => state.menu)
    let page = searchParams.get('page')
    const [loai, setLoai] = useState(null);
    const [keyword, setKeyword] = useState("");
  
    const handleFilter = (id_loai) => {
        setLoai(id_loai)
        setKeyword("")
    }
     const changeHandleSearch = (q) => {
           
            setKeyword(q);
            setLoai(null)
           
    };
    useEffect(() =>{
        // dispatch(getMenu())
        let offset = page? +page : 1
        dispatch(getMenuLimit({offset , id_loai: loai,ten_mon: keyword}))
    },[page,loai, keyword])
    // console.log(menu)
    return (
        <div className='w-full grid grid-cols-6 p-10'
             
        >
            <div className=' p-10 flex flex-col gap-4'>
                 <button 
                    className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-200 hover:text-red-400 text-xl  "
                    onClick={() => handleFilter(0)}
                    >
                     Thực Đơn
                </button>
              
                 <button 
                    className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-200 hover:text-red-400   "
                        onClick={() => handleFilter(1)}
                    >
                     Mỳ
                </button>
                
                <button onClick={() => handleFilter(2)} className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-200 hover:text-red-400   ">
                     Cơm và Bánh
                </button>
                <button onClick={() => handleFilter(3)} className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-200 hover:text-red-400   ">
                     Lẩu
                </button>
                <button onClick={() => handleFilter(4)} className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-200 hover:text-red-400   ">
                     Thịt Heo
                </button>
                <button onClick={() => handleFilter(5)} className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-200 hover:text-red-400   ">
                     Thịt Bò
                </button>
                <button onClick={() => handleFilter(6)} className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-200 hover:text-red-400   ">
                     Đồ uống
                </button>
                               
            </div>
            <div className='items  col-span-4'
                
            >
                {/* <Search onSubmit={handlerFiltersChange} /> */}
                <Search keyword={keyword} changeHandleSearch={changeHandleSearch} />
               <div className='grid grid-cols-3 gap-5'
               
               >
                   
                     {menu?.length>0 && menu.map(item => {
                  
                    return(
                        <div className='pt-10 flex justify-center items-center '
                            onClick = {()=> {
                                dispatch(actions.editMenu(item))
                                setShowModal(true)
                            
                            }}
                        >
                            <ItemMenu
                            
                            key={item?.id}
                            image = {item?.anh_mon}
                            title = {item?.ten_mon}
                            gia = {item?.gia}
                            id= {item?.id}
                         />
                        </div>
                        
                    )
                })}
                {showModal && <ModalItem showModal setShowModal={setShowModal}/> }    
               </div>
               

                <Pagination  type='/menu' category='menu' />
                
            </div>
            
        </div>
    );
}

export default memo(Menu);
