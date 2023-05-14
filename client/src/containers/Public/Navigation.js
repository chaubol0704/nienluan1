import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'

const Navigation = () => {
  const {currentData} = useSelector(state => state.user)
  const { isLoggedIn } = useSelector(state => state.auth)
  console.log(currentData)
    return (
        // <div className='w-screen justify-center flex h-[40px] bg-secondary1 text-white'>
            
   <nav className="rounded dark:bg-gray-900 flex justify-between  items-center  ">
        <div className="container flex flex-wrap items-center justify-center">
        
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 text-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link to={'/'}>
                  <span  className="block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white" aria-current="page">Trang chủ</span>
              </Link>
            </li>
            {/* <li>
              <Link to={''}>
                <span  className="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                Giới thiệu</span>
              </Link>
              
            </li> */}
            <li>
              <Link to={'/home-page'}>
                <span  className="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                Tin Tức</span>
              </Link>
            </li>
            <li>
                <Link to={'/menu'}>
                  <span  className="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  Thực đơn</span>
              </Link>
             </li>
            <li>
                <Link to={'/booking'}>
                <span  className="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                Đặt bàn</span>
              </Link>
            </li>
            <li>
                <Link to={'/page'}>
                  <span  className="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  Liên hệ</span>
              </Link>

              </li>
            {isLoggedIn && currentData.phan_quyen == 'admin' &&
              <li>
                <Link to={'/admin/manage-statistics'}>
                  <span  className="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    Admin </span>
              </Link>
              
              </li>
            }
          </ul>
        </div>

      </div>
</nav>



        // </div>
    );
}

export default Navigation;
