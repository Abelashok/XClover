import React,{useEffect,useState} from 'react'
import {useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import Button from '@material-ui/core/Button';

import { Firebase } from '../Firebase'


function Profile() {


    const [reviews,setReviews] =useState([]);
    const history = useHistory();
  
    var data = JSON.parse(localStorage.getItem('userData'))
    const [User,setUser] = useState('');
    

    useEffect(()=>{
       Firebase.firestore().collection('users').where("email","==",data.email).get().then((snapshot)=>{
        snapshot.forEach(function(doc) {
            console.log(doc.data())
          setUser(doc.data())
        })
    })
        // }).then(()=>{
        //     Firebase.firestore().collection('users').doc("data.uid").collection('feedback').onSnapshot((snapshot)=>{
        //         setReviews(snapshot.docs.map((doc)=> doc.data()))  
        //     })    
        // })
      },[data])
    //   useEffect(()=>{
    //       console.log(data)
    //     Firebase.firestore().collection('users').doc('data.uid').collection('feedback').onSnapshot((snapshot)=>{
    //       setReviews(snapshot.docs.map((doc)=> doc.data()))      
    //     })
    // },[]) 

    // const handleSubmits = () => history.push('/contact');
    // const handleSubmitss = () => history.push('/edit');
    return (
   <center>
<div className="container11 emp-profile11 con1">
    <div >
            <form method="post" >
                <div className="row" style={{padding:'20px'}}>
                    <div className="col-md-4">
                        <div className="profile-img">
                            <img src={User.imageURL} alt=""/>
                            
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="profile-head">
                                    <h2>
                                       {User.name}
                                    </h2>
                                    <h6>
                                        {/* {User.profession} */}
                                    </h6>
                                    <p className="proile-rating"> <span></span></p>
                                    {/* <Button classname='btn-primary' style={{backgroundColor:'blue',color:'white'}}>Follow</Button> */}
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true" style={{marginLeft:'300px'}}>About</a>
                                </li>
                               
                            </ul>
                        </div>
                    </div>
                    {/* <div className="col-md-2">
                        <input type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit Profile" onClick={handleSubmitss}/>
                    </div> */}
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-work">
                        {/* <button  ><Link  to={{pathname:"/work", state: {name:`${User.name}`} }}>Works</Link></button><br/><br/> */}
                            {/* <button  ><Link to={{pathname:"/contact" , state:{id:`${User.id}`}}}> Contact</Link></button> */}
                           
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="tab-content profile-tab" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab" style={{marginTop:'-100px',marginRight:'200px'}}>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>User Id</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{User.userid}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Name</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{User.name}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{User.email}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Profession</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{User.profession}</p>
                                            </div>
                                        </div>
                            </div>
                            
                            
                        </div>
                    </div>
                </div>
            </form> 
            </div>          
        </div>
        </center>     
    )



}

export default Profile
