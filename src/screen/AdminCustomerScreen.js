import React from 'react'
import Acustomer from '../components/AdminCustomer/Acustomer'
import Aheader from '../components/AdminHeader/Aheader'
import Footer from '../components/footer/Footer'
function AdminCustomerScreen() {
    return (
        <div>
          <Aheader/>
          <Acustomer/> 
          <Footer/>
        </div>
    )
}

export default AdminCustomerScreen
