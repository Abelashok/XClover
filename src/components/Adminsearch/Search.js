import React,{useState,useEffect} from 'react';

import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import './Search.css';
import { Firebase } from '../../Firebase'
import Header from '../header/Header';



function Search() {
  const [post ,setPost] = useState([])

  useEffect(()=>{
      Firebase.firestore().collection('users').where("role","!=","Admin").onSnapshot((snapshot)=>{
        setPost(snapshot.docs.map(doc => ({
          id: doc.id,
          post : doc.data()})
          ))
       })
    },[])
  return (
    <div>
    
    <div className="userCard">
    <Row >
      {
         post.map((doc) => (
          <Col style={{marginLeft:'10px', maxWidth:'30%'}}>
           {console.log(doc.id)}
        <div className="container " style={{width:'300px'}}>
    <div >
        <div className="my-card1"> <img className="my-card-img" src={doc.post.imageURL}  alt='card'/>
            <div className="my-card-body trainer-card-body">
                <h5>{doc.post.name}</h5>
                <p>{doc.post.profession} </p>
                 <div className="star">
                 <span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span> <span class="fa fa-star"></span> <span class="fa fa-star"></span>
                 </div>
                 <Link  to={{pathname:"/profile2", state: {id:`${doc.id}`} }}  className="my-card-btn">Details</Link>
            </div>                                 
        </div>
    </div>
</div>
      </Col>
          
        ))
      }
        
        
      </Row>
    </div>
    </div>
  );
}

export default Search;
