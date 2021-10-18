import React,{useState} from 'react'
import { Firebase } from '../../Firebase';
import { useLocation,useHistory } from 'react-router';

const Reply = () => {
    const [event,setEvent] = useState('');
    const history = useHistory();
    let data = useLocation();
    var data1 = JSON.parse(localStorage.getItem('userData'))
    const submit=()=>{
        Firebase.firestore().collection('users').where("name","==",data.state.user).get().then((snapshot)=>{
            snapshot.forEach(function(doc) {
                console.log(doc.data())
                Firebase.firestore().collection('users').doc(doc.id).collection('contact').add({
                    id:doc.id,
                    name:data1.displayName,
                    event
                }).then(()=>{
                    history.push('/notification')
                })
            })
        })
    }

    return (
        <center>
        <div className='Contact'>
        <img className="LOGO11" src="https://firebasestorage.googleapis.com/v0/b/photogram-d89a8.appspot.com/o/Project%20-%20Drawing%2018446153577890198630.png?alt=media&token=d8228122-e43d-4304-8c8a-d7abff52f3d7" alt="logo"/>
        <form className="Contact_form">
        <label  style={{marginRight:'450px'}}><h4>Reply</h4></label>
        <textarea className="form-control" id="event" rows="3" style={{border:'3px solid'}} placeholder='Detailed description of event'
             value={event} onChange={(e) => setEvent(e.target.value)}></textarea>
         <button type="button" className="btn3 btn-block btn-success contact-photo"  onClick={submit} >Reply</button>
        </form>
        </div>
    </center>
    )
}

export default Reply
