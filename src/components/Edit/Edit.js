// import { WhereToVote } from '@material-ui/icons';
import React,{useState,useEffect} from 'react'
import {Form} from 'react-bootstrap'
import { Firebase } from '../../Firebase'
import './Edit.css'

function Edit() {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [phone,setPhone]=useState('');
    const [birth,setBirth]=useState('');
    const [profession,setProfession]=useState('');
    const [experience,setExperience]=useState('');
    const [user,setUser] = useState('')
    const [userid,setUserid] = useState('')
    var data = JSON.parse(localStorage.getItem('userData'))
    

    useEffect(()=>{
        Firebase.firestore().collection('users').where("id","==",data.uid).get().then((snapshot)=>{
         snapshot.forEach(function(doc) {
             console.log(doc.data())
           setUser(doc.data())
         })
     })
     setName(user.name)
     setEmail(user.email)
     setBirth(user.birthdate)
     setProfession(user.profession)
     setPhone(user.phoneNumber)
     setUserid(user.userid)
     setExperience(user.experience)
         // }).then(()=>{
         //     Firebase.firestore().collection('users').doc("data.uid").collection('feedback').onSnapshot((snapshot)=>{
         //         setReviews(snapshot.docs.map((doc)=> doc.data()))  
         //     })    
         // })
       },[data,user])
    

    return (
        <div class="registration-form">
            {console.log(user)}
        <form>
        <div className="LOGO1">
           <h1 className='LOGO'>Edit</h1>
            </div>
            <div className='FFFF'>
            <div class="form-group">
                <input type="text" class="form-control item" id="name" placeholder="Name" value={name}
                onChange={(e) => setName(e.target.value)}  style={{zIndex:'100'}}/>
            </div>
            <Form.Group controlId='name'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='name'
                placeholder='Enter name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <div class="form-group">
                <input type="text" class="form-control item" id="email" placeholder="Email" value={email}
                 onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div class="form-group">
                <input type="password" class="form-control item" id="password" placeholder="Password" />
            </div>
            <div class="form-group">
                <input type="text" class="form-control item" id="phone-number" placeholder="Phone Number" value={phone}
                 onChange={(e) => setPhone(e.target.value)}/>
            </div>
            <div class="form-group">
                <input type="text" class="form-control item" id="birth-date" placeholder="Birth Date" value={birth}
                 onChange={(e) => setBirth(e.target.value)}/>
            </div>
            <div class="form-group">
                <input type="text" class="form-control item" id="profession" placeholder="Profession" value={profession}
                 onChange={(e) => setProfession(e.target.value)}/>
            </div>
            <div class="form-group">
                <input type="text" class="form-control item" id="UID" placeholder="User Id" value={userid}
                 onChange={(e) => setUserid(e.target.value)}/>
            </div>
            <div class="form-group">
                <input type="text" class="form-control item" id="experience" placeholder="Experience" value={experience}
                 onChange={(e) => setExperience(e.target.value)}/>
            </div>
            <div class="form-groups">
              <center>  <button type="button" class="btn4 btn-block create-account">Edit</button></center>
            </div>
            </div>
        </form>
       
    </div>
    )
}

export default Edit
