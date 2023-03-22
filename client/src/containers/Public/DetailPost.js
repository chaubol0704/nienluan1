import React, {useEffect} from 'react';
import { useParams, useSearchParams} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux';
import { getPosts,getPostsLimit } from '../../store/actions/post';
import Detailpage from '../../components/Detailpage';
import { Sidebar } from '../../components';


const DetailPost = () => {

    const {postId} = useParams()
    const dispatch = useDispatch()
    const {posts} = useSelector((state) => state.post)
    useEffect(() =>{
       dispatch(getPosts())
        // let offset = page ? +page - 1 : 0
        // postId && dispatch(getPostsLimit({id: postId}))
    },[postId])
    let detail = {}
    {posts?.length>0 && posts.map(item => {
        if(item.id == postId)  detail = item
    })}
    console.log(detail)
    return (
        <div className='flex justify-between p-10'>
            <div className='w-4/5'>
            <Detailpage
                image= {detail?.images?.image}
                title= {detail?.title}
                content= {detail?.content}
                // timme= {detail?.images?.iamge}
            />
            </div>
            <div className='w-2/5'>
                <Sidebar/>
            </div>
        </div>
        
    );
}

export default DetailPost;
