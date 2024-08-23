import AdminPlans from '@/components/admin/investment/AdminPlans'
import BreadCrumb from '@/components/navbar/admin-breadcumb'
import React from 'react'

const page = () => {
  return (
    <div>
          <BreadCrumb/>
          <AdminPlans/>
    </div>
  )
}

export default page