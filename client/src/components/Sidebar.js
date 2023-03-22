import React,{ memo , useEffect} from 'react'
import Sitem from './Sitem'
import { useDispatch, useSelector } from 'react-redux'
import * as action from '../store/actions'

const Sidebar = () => {
    const {newPosts}  = useSelector(state => state.post)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(action.getNewPosts())
    },[])
  return (
    <div className='w-full rounded-md p-4'>
        {/* <h3>Bài viết mới</h3>    */}
        <h3 className='text-lg font-semibold'>BÀI VIẾT MỚI</h3>
        <div className="is-divider"></div>
                    
                    
        <div className='w-full flex flex-col gap-10'>
            {newPosts?.length>0 && newPosts.map(item => {
               
                    return(
                        
                        <Sitem
                        
                            key={item?.id}
                            title = {item?.title}
                            image = {item?.images?.image}
                            createdAt={item?.createdAt}
                            id= {item?.id}
                         />
                    )
                })}
            
        </div>     
        <div className="is-divider"></div>
         <h3 className='text-lg font-semibold'>Tin Tức</h3>
    </div>
  )
}

export default memo(Sidebar)