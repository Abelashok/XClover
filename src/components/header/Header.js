import React from 'react';
 import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button';
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar } from 'react-bootstrap'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {useHistory } from 'react-router-dom';
import './Header.css';
// import { AuthContext } from '../../Context';
import { Firebase } from '../../Firebase'


function Header() {
  const history = useHistory();
  // const {user} = useContext(AuthContext)
  // const [User,setUser] = useState('')
  const handleClick = () => history.push('/search');
  const hand = () => history.push('/profile');
  const handleNotification = () => history.push('/notification');
  var data = JSON.parse(localStorage.getItem('userData'))
  var img = JSON.parse(localStorage.getItem('userImage'))
  console.log(data,'data')
//   if(user){

//   Firebase.firestore().collection('users').where("email","==",user.email).get().then((snapshot)=>{
//    snapshot.forEach(function(doc) {
//      setUser(doc.data()) 
  
//  })
// })
//  }
//  if(data){
  
//       Firebase.firestore().collection('users').where("email","==",data.email).get().then((snapshot)=>{
//         snapshot.forEach(function(doc) {
//           setUser(doc.data())
         
     
//        })
//     })
//  }

  return (
    <div className='Header'>
      <Row>
        <Col style={{
          height: '80px',
          width: '20%'
        }}>
         <LinkContainer to='/'>
            <Navbar.Brand>
            <img className="logo" src="https://firebasestorage.googleapis.com/v0/b/photogram-d89a8.appspot.com/o/Project%20-%20Drawing%2015670697147956972453.png?alt=media&token=78c66baf-872c-452b-8570-3e9fbf724618" alt="logo"/>
            </Navbar.Brand>
          </LinkContainer>
        </Col>
        <Col style={{
          height: '80px',
          width: '45%'
        }}>
          
        </Col>
        <Col className = 'SA' style={{
          height: '80px',
          width: '10%',
          marginTop:'12px',
         }}>
          <Button className="btnleft" variant="contained"  style={{backgroundColor:' #404042'}} onClick={handleClick} ><img className="Himage" src='https://cdn4.iconfinder.com/data/icons/basic-ui-line-3/24/UI-search-512.png' alt='search'/></Button>
        <Button className="btnleft" id="btnright" variant="contained"  style={{backgroundColor:' #404042'}} onClick={handleNotification}><img className="HCimage" src='https://www.pinclipart.com/picdir/big/369-3699390_notification-png-notification-icon-png-free-clipart.png' alt='addPost'/></Button>  
        </Col>
        <Col style={{
          height: '80px',
          width: '5%',
          marginTop:'-25px'
        }}>
      
           <button className="header__profile" onClick={hand}>
          <center>
          
             <Avatar className="post__avatars" alt="Abel" src={img} /> 
             <h3 className="post__na">{data.displayName}</h3>
            
          </center>
          </button>
          <button  className="header__logout" onClick={()=>{
         Firebase.auth().signOut();
         localStorage.removeItem('userData');
         localStorage.removeItem('userImage');
         history.push('/login')
       }}>Logout</button>
        </Col>
      </Row>

       </div>

  );
}

export default Header;
