import React,{useEffect,useState} from 'react'
import {useHistory } from 'react-router-dom';
// import Button from '@material-ui/core/Button';
import './Profile.css'
import { Firebase } from '../../Firebase'


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
    const handleSubmit = () => history.push('/');
    const handleSubmits = () => history.push('/contact');
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
                                    <h5>
                                       {User.name}
                                    </h5>
                                    <h6>
                                        {User.profession}
                                    </h6>
                                    <p className="proile-rating">RATING : <span>8/10</span></p>
                                    {/* <Button classname='btn-primary' style={{backgroundColor:'blue',color:'white'}}>Follow</Button> */}
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Timeline</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="review1-tab" data-toggle="tab" href="#review1" role="tab" aria-controls="profile" aria-selected="false">Reviews</a>
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
                        <button  onClick={handleSubmit}>Works</button><br/><br/>
                            {/* <a href="">Website Link</a><br/>
                            <a href="">Bootsnipp Profile</a><br/>
                            <a href="">Bootply Profile</a> */}
                            <button  onClick={handleSubmits}>Contact</button>
                            {/* <a href="">Web Designer</a><br/>
                            <a href="">Web Developer</a><br/>
                            <a href="">WordPress</a><br/>
                            <a href="">WooCommerce</a><br/>
                            <a href="">PHP, .Net</a><br/> */}
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="tab-content profile-tab" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
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
                            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Experience</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{User.experience}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Hourly Rate</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>10$/hr</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Total Works</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>23</p>
                                            </div>
                                        </div>
                                        
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Availability</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Yes</p>
                                            </div>
                                        </div>
                            </div>
                            <div className="tab-pane fade " id="review1" role="tabpanel" aria-labelledby="review1-tab">
                            {/* {reviews.map((review)=>(
                               <div className="review_display">
                               <h5>{review.name}</h5>
                                <p>{review.text}</p>
                                <p>Rating : {review.current}/5</p>
                                </div>))}    */}
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
