import React,{useState,useEffect} from 'react'
import Avatar from '@material-ui/core/Avatar'
//import './Notification.css'
// import { Link } from 'react-router-dom'
//import {useHistory } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar } from 'react-bootstrap'
import { Firebase } from '../../Firebase';
import { Link } from 'react-router-dom'


function Notification() {
  //const history = useHistory();
    //const [users,setUser] = useState('')
    const [contact,setContact] = useState([])
    var data = JSON.parse(localStorage.getItem('userData'))

    useEffect(()=>{
      Firebase.firestore().collection('users').where("email","==",data.email).get().then((snapshot)=>{
       snapshot.forEach(function(doc) {
          Firebase.firestore().collection('users').doc(doc.id).collection('contact').onSnapshot((snapshot)=>{
            setContact(snapshot.docs.map(doc1=>({ 
             post:doc1.data()})
             ))  
        })
        // setUser(doc.id)
       })
   })
  //   Firebase.firestore().collection('users').where("email","==",data.email).collection("contact").onSnapshot((snapshot)=>{
  //     setContact(snapshot.docs.map((doc)=>{ 
        
  //       console.log(doc.data());
  //       doc.data()}))  
  // })
  // })
  })

 // const reply = () => history.push('/reply');
    return (
        
            <div className="d-flex justify-content-center mt-5">
              {
         contact.map((doc) => (
              
    <div className="cardddd p-3 cookie">

    <LinkContainer to='/profile'>
            <Navbar.Brand className="navvv">
            <Avatar className="post__avata" alt="Abel" src="https://yt3.ggpht.com/a/AGF-l7_jnLRWgQFYpTE95J6DDA9xvUGdYRJwo8IgyA=s900-mo-c-c0xffffffff-rj-k-no" />
            <h3 className="post__name">{doc.post.name}</h3>
            </Navbar.Brand>
          </LinkContainer><br/>
        <span>{doc.post.event}
        <br/></span>
        <div className="mt-4 text-right"><span className="mr-3 decline"></span>
        <button className="btnnnn" style={{backgroundColor:'black',color:'white'}} > <Link  to={{pathname:"/reply", state: {user:`${doc.post.name}`} }}  className="my-card-btn">Reply</Link></button>
        </div>
    </div>
     ))
    }
</div>

    )
}

export default Notification
