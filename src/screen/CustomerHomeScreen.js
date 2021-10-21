import React,{useState,useEffect} from 'react'
import { Firebase } from '../Firebase'
// import { Button } from '@material-ui/core'
import Footer from '../components/footer/Footer'
// import Header from '../components/header/Header.js'
import News from '../components/news/News.js'
import Post from '../components/post/Post.js'
import {useHistory} from 'react-router-dom'
import './HomeScreen.css'
// import { AuthContext } from '../Context';
import Header from '../components/Header2/Header'

function CustomerHomeScreen() {
    const history = useHistory()
  //  const {user} = useContext(AuthContext)

    const [post ,setPost] = useState([])



    useEffect(()=>{
        Firebase.firestore().collection('posts').orderBy('timestamp','desc').onSnapshot((snapshot)=>{
          setPost(snapshot.docs.map(doc => ({
            id: doc.id,
            post : doc.data()})
            ))
         })
      },[])

    
    var data = JSON.parse(localStorage.getItem('userData'))

  
    return (
        <div>
             {data?
             <>
             <Header/>
           <News/>
    
    
           {
       
       post.map(({id,post}) => (
         <Post key={id} postId={id} name={post.name} location={post.location} description={post.description} caption={post.caption} imageURL={post.imageURL} image={post.image}/>
         
       ))
     }
             <Footer/>
             </>
             :history.push('/login')
             }
        </div>
    )
}

export default CustomerHomeScreen