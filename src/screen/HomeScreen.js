import React,{useState,useEffect,useContext} from 'react'
import { Firebase } from '../Firebase'
import { Button } from '@material-ui/core'
import Footer from '../components/footer/Footer'
// import Header from '../components/header/Header.js'
import News from '../components/news/News.js'
import Post from '../components/post/Post.js'
import {useHistory} from 'react-router-dom'
import './HomeScreen.css'
import { AuthContext } from '../Context';
import Header from '../components/header/Header'

function HomeScreen() {
    const history = useHistory()
    const {user} = useContext(AuthContext)
    const [caption,setCaption] = useState('')
    const [description,setDescription] = useState('')
    const [location,setLocation] = useState('')
    const [image,setImage] = useState(null)
    const [post ,setPost] = useState([])
    const [progress,setProgress] = useState(0)


    useEffect(()=>{
        Firebase.firestore().collection('posts').orderBy('timestamp','desc').onSnapshot((snapshot)=>{
          setPost(snapshot.docs.map(doc => ({
            id: doc.id,
            post : doc.data()})
            ))
         })
      },[])

    
    var data = JSON.parse(localStorage.getItem('userData'))

    const handleChange=(e)=>{
       if(e.target.files[0]){
           setImage(e.target.files[0])
       }
    }
    const handleUpload=(e)=>{
        e.preventDefault()
         const uploadTask = Firebase.storage().ref(`images/${image.name}`).put(image)
         uploadTask.on(
             'state_changed',
             (snapshot) => {
                 const progress = Math.round(
                     (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                 )
                 setProgress(progress)
             },
             (error) => {
                 console.log(error);
                 alert(error.message)
             },
             () => {
                 Firebase.storage().ref("images").child(image.name).getDownloadURL().then(
                     url => {
                         Firebase.firestore().collection("posts").add({
                             timestamp:Date.now(),
                             caption : caption,
                             imageURL:url,location,description,name:user.displayName
                         })

                         setImage(null);
                         setProgress(0);
                         setCaption('')
                         setDescription('')
                         setLocation('')
    
                     }
                 )
             }
         )
    }
    return (
        <div>
             {data?
             <>
             <Header/>
           <News/>
    
           <div className='imageupload'>
            <progress className='imageupload__progress' value={progress}  max="100"/>
           <input type="text" className="image__upload" placeholder='Enter a caption' onChange={(e)=> setCaption(e.target.value)} value={caption}/>
           <input type="text" className="image__upload" placeholder='Enter description' onChange={(e)=> setDescription(e.target.value)} value={description}/>
           <input type="text" className="image__upload" placeholder='Enter location' onChange={(e)=> setLocation(e.target.value)} value={location}/>
           <input type="file"  className="image__upload" onChange={handleChange}/>
           <Button className="imageupload__button" onClick={handleUpload}>Upload</Button>
           </div>
    
           {
       
       post.map(({id,post}) => (
         <Post key={id} postId={id} name={post.name} location={post.location} description={post.description} caption={post.caption} imageURL={post.imageURL} />
         
       ))
     }
             <Footer/>
             </>
             :history.push('/login')
             }
        </div>
    )
}

export default HomeScreen
