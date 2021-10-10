import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import './Notification.css'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar } from 'react-bootstrap'
function Notification() {
    return (
        
            <div class="d-flex justify-content-center mt-5">
             
    <div class="cardddd p-3 cookie">
    <LinkContainer to='/profile'>
            <Navbar.Brand className="navvv">
            <Avatar className="post__avata" alt="Abel" src="https://yt3.ggpht.com/a/AGF-l7_jnLRWgQFYpTE95J6DDA9xvUGdYRJwo8IgyA=s900-mo-c-c0xffffffff-rj-k-no" />
            <h3 className="post__name">Abz</h3>
            </Navbar.Brand>
          </LinkContainer><br/>
        <span>wedding photoshoot<br/></span><Link to="#">more<i class="fa fa-angle-right ml-2"></i></Link>
        <div class="mt-4 text-right"><span class="mr-3 decline">Decline</span>
        <button className="btnnnn" style={{backgroundColor:'black',color:'white'}}>Accept</button>
        </div>
    </div>
</div>

    )
}

export default Notification
