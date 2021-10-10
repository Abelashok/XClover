import React from 'react'
import Edit from '../components/Edit/Edit'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
function EditScreen() {
    return (
        <div>
           <Header/>
           <Edit/> 
           <Footer/>
        </div>
    )
}

export default EditScreen


// setName(doc.data().name)
//                 setEmail(doc.data().email)
//                 setPhone(doc.data().phoneNumber)
//                 setBirth(doc.data().birthdate)
//                 setProfession(doc.data().profession)
//                 setExperience(doc.data().experience)
//                 setUserid(doc.data().userid)