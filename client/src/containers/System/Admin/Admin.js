import React from 'react'
import {SlideMenu,PageContent} from '../index'
import {Space} from 'antd'

const Admin = () => {
  return (
    <div className='flex '>
      <div className='w-64 h-screen px-5 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700'>
          <SlideMenu/>
      </div>
        
        <PageContent />
    </div>
  )
}

export default Admin