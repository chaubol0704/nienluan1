import React, { useEffect , useState } from 'react';
import {PageNumber} from '../../components'
import {useSelector} from 'react-redux'
import icons from '../../ultils/icons'
import { GrLinkPrevious } from 'react-icons/gr';
import { useSearchParams} from 'react-router-dom';


const { GrLinkNext } = icons

const Pagination = ({type, category}) => {
    const [searchParams] = useSearchParams()
    let page = searchParams.get('page')
    // console.log(page)

    const {count, posts} = useSelector( state => state.post)
    const {count_menu, menu} = useSelector( state => state.menu)
    const [arrPage , setArrPage] = useState([])
    const [currentPage, setCurrentPage] = useState(+page || 1)
    
    const [isHideEnd, setIsHideEnd] = useState(false);
    const [isHideStart, setIsHideStart] = useState(false);

    let maxPage = 0
    category == 'menu' ? maxPage= Math.ceil(count_menu/ menu.length): maxPage =  Math.ceil(count/ posts.length)
    useEffect(() => {
        
        
        let end = (currentPage + 2) > maxPage ? maxPage : (currentPage + 2)
        let start = (currentPage - 2) <= 1 ? 1 : (currentPage - 2)
        let temp = []
        for( let i=start;i <=end;i++) temp.push(i)
        setArrPage(temp)

    
        currentPage <= 2 ? setIsHideStart(true): setIsHideStart(false)
        currentPage >= (maxPage - 1)? setIsHideEnd(true): setIsHideEnd(false)
    },[page])
   
    return (
        <div className='flex  items-center justify-center gap-2 py-5'>
            
            { !isHideStart && <PageNumber icon={<GrLinkPrevious/>}   setCurrentPage={setCurrentPage} text={1}/>}
            {!isHideStart  &&  <PageNumber text={'...'}/>}
            {arrPage.length > 0 && arrPage.map(item =>{
                return(
                    <PageNumber
                        key={item} 
                        text={item}                   
                        setCurrentPage = {setCurrentPage}
                        currentPage={currentPage}
                        type= {type}
                    />
                    
                )    
                
            })}
            {!isHideEnd &&  <PageNumber text={'...'}/>}
            { !isHideEnd && <PageNumber icon={<GrLinkNext/>} currentPage={currentPage} setCurrentPage={setCurrentPage} text={maxPage}/>}
        </div>
    );
}

export default Pagination;
