import Aheader from '../components/AdminHeader/Aheader'
import Apost from '../components/AdminPost/Apost'
import Footer from '../components/footer/Footer'
import Anews from '../components/AdminNews/Anews'
import { Firebase } from '../Firebase'
import React,{useState,useEffect} from 'react'

function AdminScreen() {
    const [post ,setPost] = useState([])
    useEffect(()=>{
        Firebase.firestore().collection('posts').orderBy('timestamp','desc').onSnapshot((snapshot)=>{
          setPost(snapshot.docs.map(doc => ({
            id: doc.id,
            post : doc.data()})
            ))
         })
      },[])
    return (
        <div>
           <Aheader/>
           <Anews/>
           
           {
       
       post.map(({id,post}) => (
         <Apost key={id} postId={id} name={post.name} location={post.location} description={post.description} caption={post.caption} imageURL={post.imageURL} />
         
       ))
     }
         
           <Footer/>
        </div>
    )
}

export default AdminScreen
