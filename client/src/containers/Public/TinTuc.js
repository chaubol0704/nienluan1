import React, {useEffect, memo}from 'react';
import { Item } from '../../components';
import { getPosts,getPostsLimit } from '../../store/actions/post';
import {useDispatch, useSelector} from 'react-redux'
import { useSearchParams} from 'react-router-dom';


const TinTuc = () => {
    const dispatch = useDispatch()
    const [searchParams] = useSearchParams()
    const {posts} = useSelector((state) => state.post)
    let page = searchParams.get('page')
    // console.log(page)
    useEffect(() =>{
        
        // dispatch(getPosts())
        let offset = page ? +page : 1
        dispatch(getPostsLimit(offset))
    },[page])
    // console.log(posts)
    return (
        <div className='w-full border '>
            <div className='items'>
               
                {posts?.length>0 && posts.map(item => {
                  
                    return(
                        
                        <Item
                        
                            key={item?.id}
                            image = {item?.images?.image}
                            title = {item?.title}
                            id= {item?.id}
                         />
                    )
                })}
            </div>
            
        </div>
    );
}

export default memo(TinTuc);
