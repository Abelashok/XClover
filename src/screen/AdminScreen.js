import Aheader from '../components/AdminHeader/Aheader'
import Apost from '../components/AdminPost/Apost'
import Footer from '../components/footer/Footer'
import Anews from '../components/AdminNews/Anews'
import React from 'react'

function AdminScreen() {
    return (
        <div>
           <Aheader/>
           <Anews/>
           <Apost />
           <Apost/>
           <Apost/>
           <Apost/> 
           <Footer/>
        </div>
    )
}

export default AdminScreen
