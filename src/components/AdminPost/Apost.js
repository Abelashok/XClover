
import './Apost.css'
import { Firebase } from '../../Firebase';
import React,{useState,useEffect} from 'react'
import Avatar from '@material-ui/core/Avatar'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar } from 'react-bootstrap'




function Apost({postId,name,caption,description,imageURL,location,image}) {
    const [comments,setComments] = useState([]);
   // const [comment,setComment] = useState('');
   // const {user} = useContext(AuthContext)
   
   useEffect(()=>{
        //let unsubscribe;
       if(postId) {
           console.log(postId)
       Firebase.firestore().collection("posts").doc(postId).collection("comments").orderBy('timestamp','desc').onSnapshot((snapshot)=>{
        setComments(snapshot.docs.map(doc => ({
          com : doc.data()})
          ))
       })
            // console.log(snapshot.data())
            // setComments(snapshot.docs.map(doc => {
            //     console.log("hello1")
            //     doc.data()}))
            
       }
    //    return () => {
    //      unsubscribe();
    //    };
      
   },[postId]);

    return (
        <div className="post12">
                    
                    <div className="post__header12">
                     <LinkContainer to='/profile'>
                        <Navbar.Brand >
                        <Avatar className="post__avatar12" alt="Abel" src={image}/>
                         <h3 className="post-name12">{name}</h3>
                         <br/>
                         <h5 className="post_location12" >{location}</h5>
                        </Navbar.Brand>
                    </LinkContainer>
                    </div>
                    {/* {header} */}
                     <img className="post__image12" src={imageURL}
                     alt="" />
                    {/* {image} */}
                    <div className="like">
                <FormControlLabel 
                    control={<Checkbox icon={<FavoriteBorder fontSize="large" />} 
                            checkedIcon={<Favorite fontSize="large" />}
                    name="checkedH" />}
                    label="56"
                />
                
                </div>
                <div className="cap">
                <p className="txt4">{caption}</p>
                <p className="txt5">{description}</p>
                </div>
                <div className="post__comments">
                        {
                        comments.map(({com})=>(
                                <p>
                                   <strong>{com.username}</strong>{com.text}
                               </p>    
                        )) 
                       }
                     </div> 
                         
                   {/* <form className="post__commentbox" >
                        <input type="text" className="post__input" 
                         placeholder="Add a comment.."
                        value={comment} onChange={(e)=>setComment(e.target.value)}  />
                          <br/>
                        
                        <button 
                      disabled={!comment}
                        className="post__button"
                        type="submit"
                        onClick={postComment}
                        >Post</button>
                        
                    </form>
                   */}
                    </div>
            
    )
}

export default Apost
