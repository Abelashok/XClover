import React,{useState,useEffect} from 'react'
import { useLocation } from "react-router-dom";
import { Firebase } from '../Firebase'
import Footer from '../components/footer/Footer'
// import Header from '../components/header/Header.js'
import News from '../components/news/News.js'
import Post from '../components/post/Post.js'
import {useHistory} from 'react-router-dom'
import './HomeScreen.css'

import Header from '../components/header/Header'

function WorkScreen() {
    const history = useHistory()
    let data = useLocation();
    console.log(data,"helo")
  
    const [post ,setPost] = useState([])



    useEffect(()=>{
        Firebase.firestore().collection('posts').where("name","==",data.state.name).orderBy('timestamp','desc').onSnapshot((snapshot)=>{
          setPost(snapshot.docs.map(doc => ({
            id: doc.id,
            post : doc.data()})
            ))
         })
      },[data.state.name])

    
    // var data = JSON.parse(localStorage.getItem('userData'))

    // const handleChange=(e)=>{
    //    if(e.target.files[0]){
    //        setImage(e.target.files[0])
    //    }
    // }
    // const handleUpload=(e)=>{
    //     e.preventDefault()
    //      const uploadTask = Firebase.storage().ref(`images/${image.name}`).put(image)
    //      uploadTask.on(
    //          'state_changed',
    //          (snapshot) => {
    //              const progress = Math.round(
    //                  (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    //              )
    //              setProgress(progress)
    //          },
    //          (error) => {
    //              console.log(error);
    //              alert(error.message)
    //          },
    //          () => {
    //              Firebase.storage().ref("images").child(image.name).getDownloadURL().then(
    //                  url => {
    //                      Firebase.firestore().collection("posts").add({
    //                          timestamp:Date.now(),
    //                          caption : caption,
    //                          imageURL:url,location,description
    //                      })

    //                      setImage(null);
    //                      setProgress(0);
    //                      setCaption('')
    //                      setDescription('')
    //                      setLocation('')
    
    //                  }
    //              )
    //          }
    //      )
    // }
    return (
        <div>
             {data?
             <>
             <Header/>
           <News/>
    
         
    
           {
       
       post.map(({id,post}) => (
         <Post key={id} postId={id} name={post.name} location={post.location} description={post.description} caption={post.caption} imageURL={post.imageURL}  image={post.image}/>
         
       ))
     }
             <Footer/>
             </>
             :history.push('/login')
             }
        </div>
    )
}

export default WorkScreen
