import React from 'react';
import Button from '@material-ui/core/Button';
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar } from 'react-bootstrap'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {useHistory } from 'react-router-dom';

import { Firebase } from '../../Firebase'
import './Aheader.css';


function Aheader() {
  const history = useHistory();
  const handleClick = () => history.push('/search1');
  const handlePost = () => history.push('/photographer');
  const handleNotification = () => history.push('/customer1');
  return (
    <div className='Header'>
      <Row>
        <Col style={{
          height: '80px',
          width: '20%'
        }}>
         <LinkContainer to='/admin'>
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
          width: '20%',
          marginTop:'12px'
         }}>
          <Button className="btnleft" variant="contained"  style={{backgroundColor:' #404042'}} onClick={handleClick} ><img className="Himage" src='https://cdn4.iconfinder.com/data/icons/basic-ui-line-3/24/UI-search-512.png' alt='search'/></Button>
        <Button className="btnleft" id="btnright" variant="contained"  style={{backgroundColor:' #404042'}} onClick={handlePost}><img className="HCimage" src='https://cdn.onlinewebfonts.com/svg/img_211436.png' alt='addPost'/></Button>
        <Button className="btnleft" id="btnright" variant="contained"  style={{backgroundColor:' #404042'}} onClick={handleNotification}><img className="HCimage" src='https://cdn.onlinewebfonts.com/svg/img_162044.png' alt='addPost'/></Button>  
        </Col>
        <Col style={{
          height: '80px',
          width: '15%'
        }}>
          
          <button  className="header__logout" onClick={()=>{
         Firebase.auth().signOut();
         localStorage.removeItem('userData');
         history.push('/login')
       }}>Logout</button>
        </Col>
      </Row>

       </div>

     /* <Link to='/'>  <img className="logo" src="https://firebasestorage.googleapis.com/v0/b/photogram-d89a8.appspot.com/o/Project%20-%20Drawing%2015670697147956972453.png?alt=media&token=78c66baf-872c-452b-8570-3e9fbf724618" alt="logo"/></Link>
     {/* <LinkContainer to='/'>
            <Navbar.Brand>ProShop</Navbar.Brand>
          </LinkContainer> */
      /* <Avatar className="post__avatar" alt="Abel" src="https://www2.shutterstock.com/blog/wp-content/uploads/sites/5/2017/05/SLN_6201.jpg" />
            <h3 className="post__nam">Cristy</h3> */
    
  );
}

export default Aheader;
