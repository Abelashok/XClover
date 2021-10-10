import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar } from 'react-bootstrap'
import './Apost.css'


function Apost() {
    return (
        <div class="container" style={{marginRight:'500px'}}>
            <div className="con">
            <div className="post__header">
            <LinkContainer to='/profile'>
            <Navbar.Brand className="navvv">
            <Avatar className="post__avata" alt="Abel" src="https://yt3.ggpht.com/a/AGF-l7_jnLRWgQFYpTE95J6DDA9xvUGdYRJwo8IgyA=s900-mo-c-c0xffffffff-rj-k-no" />
            <h3 className="post__name">Abz</h3>
            </Navbar.Brand>
          </LinkContainer>
            
            <h6 className="post__location">ktm</h6>
            </div>
        <div class="cardcontainer">
            <div class="photo"> <img src="https://images.pexels.com/photos/2346006/pexels-photo-2346006.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500" alt="abel"/>
                
            </div>
            <div class="content">
                <div className="like">
                <FormControlLabel 
                    control={<Checkbox icon={<FavoriteBorder fontSize="large" />} 
                            checkedIcon={<Favorite fontSize="large" />}
                    name="checkedH" />}
                    label="56"
                />
                </div>
                <p class="txt4">City Lights In Newyork</p>
                <p class="txt5">A city that never sleeps</p>
                
            </div>
            <div class="footer">
                <p class="txt3"><i class="far fa-clock"></i>10 Minutes Ago <span class="comments">
                    <i class="fas fa-comments"></i>45 Comments</span></p>
                    <input type="text" className="comment" placeholder="comments"></input>
                    <button style={{backgroundColor:'blue',color:'white'}} id="bt11">POST</button>
            </div>
        </div>
        </div>
    </div>
            
    )
}

export default Apost
