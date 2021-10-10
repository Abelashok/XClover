import React from 'react'
import './Contact.css'

function Contact() {
    return (
        <center>
            <div className='Contact'>
            <img className="LOGO11" src="https://firebasestorage.googleapis.com/v0/b/photogram-d89a8.appspot.com/o/Project%20-%20Drawing%2018446153577890198630.png?alt=media&token=d8228122-e43d-4304-8c8a-d7abff52f3d7" alt="logo"/>
            <form className="Contact_form">
            <label for="event" style={{marginRight:'450px'}}><h4>Event</h4></label>
             <textarea className="form-control" id="event" rows="3" style={{border:'3px solid'}} placeholder='Detailed description of event'></textarea>
             <label for="event_date" style={{marginRight:'400px'}}><h4>Event date</h4></label>
             <input type="date" className="form-control" id="event" style={{border:'3px solid'}} ></input>
             <button type="button" className="btn3 btn-block btn-success contact-photo">Sent</button>
            </form>
            </div>
        </center>
    )
}

export default Contact
