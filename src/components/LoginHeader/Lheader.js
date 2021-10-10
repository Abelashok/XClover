import React from 'react';
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar } from 'react-bootstrap'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import './Lheader.css';


function Lheader() {


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
    
          
       
      </Row>

       </div>

    
  );
}

export default Lheader;
