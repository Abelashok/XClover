import React,{useState} from 'react'
import { useLocation,useHistory } from 'react-router';
import { Firebase } from '../../Firebase';
import './Contact.css'

function Contact() {
    const history = useHistory();
    let data = useLocation();
    var data1 = JSON.parse(localStorage.getItem('userData'))
    console.log(data.state.id)
    const [event,setEvent] = useState('');
    const [date,setDate] = useState('')
    const submit=()=>{
        Firebase.firestore().collection('users').doc(data.state.id).collection("contact").add({
            id:data.state.id,
            name:data1.displayName,
            event,date
        }).then(()=>{
            history.push('/')
        })
    }
    return (
        <center>
            <div className='Contact'>
            <img className="LOGO11" src="https://firebasestorage.googleapis.com/v0/b/photogram-d89a8.appspot.com/o/Project%20-%20Drawing%2018446153577890198630.png?alt=media&token=d8228122-e43d-4304-8c8a-d7abff52f3d7" alt="logo"/>
            <form className="Contact_form">
            <label for="event" style={{marginRight:'450px'}}><h4>Event</h4></label>
             <textarea className="form-control" id="event" rows="3" style={{border:'3px solid'}} placeholder='Detailed description of event'
             value={event} onChange={(e) => setEvent(e.target.value)}></textarea>
             <label for="event_date" style={{marginRight:'400px'}}><h4>Event date</h4></label>
             <input type="date" className="form-control" id="event" style={{border:'3px solid'}}
              value={date} onChange={(e) => setDate(e.target.value)} ></input>
             <button type="button" className="btn3 btn-block btn-success contact-photo" onClick={submit} >Sent</button>
            </form>
            </div>
        </center>
    )
}

export default Contact
