import React,{useState,useEffect} from 'react'
import { Firebase } from '../../Firebase';
import { Link } from 'react-router-dom';
import './News.css'


function News() {
    let s1;
    const [userid,setUserid] = useState([])
   const [user,setUser] = useState('')
    useEffect(()=>{
        Firebase.firestore().collection('users').where("role","==","Photographer").onSnapshot((snapshot)=>{
        snapshot.docs.map((doc)=>{
            // setUser(doc.id)
            Firebase.firestore().collection('users').doc(doc.id).collection('feedback').onSnapshot((snapshot)=>{
                let c=0,r=0;
               snapshot.docs.map((doc)=> {
                   console.log(doc.data(),'hello')
                    r=r+doc.data().current;
                    c=c+1;
               })
               console.log(c,'c')
                s1=r/c;
               
               console.log(s1,'abel')
               if(s1 === 5) {
                   console.log(doc.id)
                 setUser(doc.id)
                   Firebase.firestore().collection('users').doc(doc.id).get().then((doc)=>{
                    setUserid(doc.data())
                   })
               }
            })
        })
        })
           
         
       
       },[])
     
    return (
        <div className="News">
            
            {/* {userid.map((doc)=>( */}
                <>
        <div className="news">
        {/* <img className="logos" src="https://firebasestorage.googleapis.com/v0/b/photogram-d89a8.appspot.com/o/Project%20-%20Drawing%2018446153577890198630.png?alt=media&token=d8228122-e43d-4304-8c8a-d7abff52f3d7" alt="logo"/> */}
        </div>
        <div class="cardd" >
        <center><p class="w3-xxlarge font-effect-shadow-multiple">Trending</p></center>
        <img class="card-img-top"  src={userid.imageURL} alt="userImage"/>
        <div class="card-body">
            <h5 class="card-title">{userid.name}</h5>
            <p class="card-text">{userid.about}</p>
           <center> <button className='detail'><Link style={{color:'white'}}to={{pathname:"/profile1", state: {id:`${user}`} }}  className="my-card-btn">Details</Link></button></center>
        </div>
        </div>
         </>
            {/* ))} */}
           
        </div>
    )
}

export default News
