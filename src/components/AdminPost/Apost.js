
import './Apost.css'

import React from 'react'
// import Avatar from '@material-ui/core/Avatar'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar } from 'react-bootstrap'




function Apost({postId,name,caption,description,imageURL,location}) {


    return (
        <div className="post12">
                    
                    <div className="post__header12">
                     <LinkContainer to='/profile'>
                        <Navbar.Brand >
                        {/* <Avatar className="post__avatar12" alt="Abel" src=""/> */}
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
                    {/* {username and caption} */}
                    {/* <div className="comm"> */}
                    
                    {/* <div className="post__comments">
                       {
                           
                           comments.map((comment)=>{
                            console.log(comment)
                               return<p>
                                   <strong>{comment.name}</strong>{comment.text}
                               </p>    
                           }
                           )
                       }
                     </div>   */}
                         
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
