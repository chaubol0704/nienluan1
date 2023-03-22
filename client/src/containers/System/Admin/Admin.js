import React from 'react'
import {SlideMenu,PageContent} from '../index'
import {Space} from 'antd'

const Admin = () => {
  return (
    <div className='flex '>
        <SlideMenu/>
        <PageContent />
    </div>
  )
}

export default Admin