import ApplicationSettings from '@/components/admin/application/ApplicationSets'
import BreadCrumb from '@/components/navbar/admin-breadcumb'
import DarkModetoggle from '@/components/settings/dark-mode-toggle'
import React from 'react'

const page = () => {
  return (
    <div>
          <BreadCrumb/>

          <DarkModetoggle />
       
    </div>
  )
}

export default page