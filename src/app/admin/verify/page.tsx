import KYCVerificationCenter from '@/components/admin/kyc/KycVerification'
import BreadCrumb from '@/components/navbar/admin-breadcumb'
import React from 'react'

const page = () => {
  return (
    <div>
        <BreadCrumb/>
        <KYCVerificationCenter/>
    </div>
  )
}

export default page