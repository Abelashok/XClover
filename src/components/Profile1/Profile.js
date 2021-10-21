import React,{useEffect,useState} from 'react'
import {useLocation } from 'react-router-dom';
// import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import './Profile.css'
import { Firebase } from '../../Firebase'
import { FaStar } from 'react-icons/fa';

const colors = {
    orange: "#FFA500",
    grey: "#a9a9a9"
}
const styles = {
    container:{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    }
}

function Profile() {
    let r=0,c=0,s;
   // const history = useHistory();
    let data = useLocation();
    console.log(data.state.id);
    const stars = Array(5).fill(0);
    const [User,setUser] = useState('')
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [text,setText] = useState('')
    const [current,setCurrent] = useState(0);
    const [hover,setHover] = useState(undefined);
    const [reviews,setReviews] =useState([]);

     const handleClick = value =>{
         setCurrent(value)
     };
     const handleMouseOver = value =>{
         setHover(value)
     }
     const handleMouseLeave = () => {
         setHover(undefined)
     }

    useEffect(()=>{
       Firebase.firestore().collection('users').doc(data.state.id).get().then((doc)=>{
          console.log(doc.data(),'hello')
          setUser(doc.data())
     
        }).then(()=>{
            Firebase.firestore().collection('users').doc(data.state.id).collection('feedback').onSnapshot((snapshot)=>{
                setReviews(snapshot.docs.map((doc)=> doc.data()))  
            })    
        })
      },[data])

    // useEffect(()=>{
    //     Firebase.firestore().collection('users').doc(data.state.id).collection('feedback').onSnapshot((snapshot)=>{
    //       setReviews(snapshot.docs.map((doc)=> doc.data()))      
    //     })
    // },[])  

    // const handleSubmit = () => history.push({pathname: '/work' ,  state:{ name: `${User.name}` } });
    // const handleSubmits = () => history.push('/contact');    

   const sent=(e)=>{
       e.preventDefault();
      Firebase.firestore().collection('users').doc(data.state.id).collection('feedback').add({
          name,email,text,current,date:Date.now()
      })
     setName('');
     setEmail('');
     setText('');
     setCurrent(0);
   }

    return (
   <center>
<div className="container11 emp-profile11 con1">
    <div >
        <div className="rr">
    {reviews.map((review)=>(
        <>
        {r=r+review.current}{c=c+1}{s=r/c}
        </>
      ))}  
      </div> 
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
                                    <p className="proile-rating">RATING : <span>{s}/5</span></p>
                                    
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Timeline</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="review-tab" data-toggle="tab" href="#review" role="tab" aria-controls="profile" aria-selected="false">Reviews</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="feedback-tab" data-toggle="tab" href="#feedback" role="tab" aria-controls="profile" aria-selected="false">Feed Back</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                 
                </div>
                <div className="row" style={{maxWidth:'60%'}}>
                    <div className="col-md-4">
                        <div className="profile-work">
                        <button  style={{marginLeft:'-350px'}}><Link  to={{pathname:"/work", state: {name:`${User.name}`} }}>Works</Link></button><br/><br/>
                        {/* onClick={handleSubmit} */}
                            {/* <button onClick={handleSubmits}  style={{marginLeft:'-350px'}}>Contact</button> */}
                            <button style={{marginLeft:'-350px'}} ><Link to={{pathname:"/contact" , state:{id:`${data.state.id}`}}}> Contact</Link></button>
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
                            <div className="tab-pane fade " id="feedback" role="tabpanel" aria-labelledby="feedback-tab">
                            <form className="Contact_form">
                            <label for="name" /> <input type="text" className="form-control item" id="name" placeholder="Name" style={{border:'3px solid',width:'60%'}}
                            value={name} onChange={(e) => setName(e.target.value)}  />
                            <label for="name" /> <input type="text" className="form-control item" id="name" placeholder="Email" style={{border:'3px solid',width:'60%'}} 
                            value={email} onChange={(e) => setEmail(e.target.value)}/>
                            <textarea className="form-control" id="event" rows="3" style={{border:'3px solid' , marginTop:'30px'}} placeholder='Please write your feedback here'
                             value={text} onChange={(e) => setText(e.target.value)}></textarea>
                            <div style={styles.container}>
                              <div style={styles.stars}>
                                 {stars.map((_,index)=>{
                                     return (
                                         <FaStar
                                          key={index}
                                          size={24}
                                          style={{
                                              marginRight: 10,
                                              cursor: "pointer"
                                          }}
                                          color={(hover || current) > index ? colors.orange : colors.grey}
                                          onClick={()=> handleClick(index + 1)}
                                          onMouseOver = {()=> handleMouseOver(index +1)}
                                          onMouseLeave= {() => handleMouseLeave}
                                         />

                                     )
                                 })}
                               </div>
                             </div>
                             <button type="button" className="btn3 btn-block btn-success contact-photo"  onClick={sent}>Sent</button>
                            </form>
                            </div>
                            
                            <div className="tab-pane fade " id="review" role="tabpanel" style={{marginTop:'-100px'}} aria-labelledby="review-tab">
                            {reviews.map((review)=>(
                               <div className="review_display">
                               <h5>{review.name}</h5>
                                <p>{review.text}</p>
                                <p>Rating : {review.current}/5</p>
                               
                                </div>))}   
                            
                           
                            
                           
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

export default Profile;
