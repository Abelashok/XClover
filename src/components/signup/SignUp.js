
import React, { useState } from 'react'
import { useHistory } from 'react-router';
import { Firebase } from '../../Firebase';

// import { AuthContext } from '../../Context';
import './SignUp.css'
function SignUp() {

  const history = useHistory();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  const [phoneno, setPhoneno] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [role, setRole] = useState('');
  const [profession, setProfession] = useState('');
  const [userid, setUserid] = useState('');
  const [image, setImage] = useState('');
  const [about, setAbout] = useState('');
  const [experience, setExperience] = useState('');


  const signUp = (e) => {
    e.preventDefault();
    Firebase.storage().ref(`/image1/${image.name}`).put(image).then(({ ref }) => {
      ref.getDownloadURL().then((url) => {
        console.log(url)
        Firebase.auth().createUserWithEmailAndPassword(email, password)
          .then((result) => {
            return result.user.updateProfile({
              displayName: name,
              photoURL: url
            }).then(() => {
              Firebase.firestore().collection('users').add({
                id: result.user.uid,
                name, email,
                imageURL: url,
                phoneNumber: phoneno, birthdate, role, profession, userid, experience,about
              }).then(() => {
                history.push('/login')
              })
            })
          })
      })
    })
      .catch(
        (error) => {
          alert(error.message)
        }
      )

  }

  return (
    <div className="registration-form">
      <form>
        <div className="LOGO1">
          <h2 className='LOGO'>SignUp</h2>
        </div>
        <div className='FFFF'>
          <div className="form-group">
          
           
          <input type="text" className="form-control item" id="name" placeholder="Name"
              value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="form-group">
            <input type="text" className="form-control item" id="email" placeholder="Email"
              value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <input type="password" className="form-control item" id="password" placeholder="Password"
              value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="form-group">
            <input type="password" className="form-control item" id="confirm-password" placeholder="Confirm Password"
              value={confirmpassword} onChange={(e) => setConfirmpassword(e.target.value)} />
          </div>
          <div className="form-group">
            <input type="text" className="form-control item" id="phone-number" placeholder="Phone Number"
              value={phoneno} onChange={(e) => setPhoneno(e.target.value)} />
          </div>
          <div className="form-group" style={{marginLeft:'20px'}}>
            <label>Choose Image</label><br/>

            <input onChange={(e) => { setImage(e.target.files[0]) }} type="file" placeholder="Choose Image"
            />
          </div>
          <div className="form-group">
        
            <input type="text" className="form-control item" id="birth-date" placeholder="Birth Date"
              value={birthdate} onChange={(e) => setBirthdate(e.target.value)} />
          </div>
          
           <input style={{marginLeft:'20px'}} type="radio" id="html" name="fav_language" value="Photographer" onChange={(e) => setRole(e.target.value)}/>
            <label for="html">Photographer</label>
            <input style={{marginLeft:'20px'}} type="radio" id="css" name="fav_language" value="Customer" onChange={(e) => setRole(e.target.value)}/>
            <label for="css">Customer</label>
          <div className="form-group">
            <input type="text" disabled={role === 'Customer'} className="form-control item" id="about" placeholder="About You"
              value={about} onChange={(e) => setAbout(e.target.value)} />
          </div>
          <div className="form-group">
            <input  disabled={role === 'Customer'} type="text" className="form-control item" id="profession" placeholder="Profession"
              value={profession} onChange={(e) => setProfession(e.target.value)} />
          </div>
          
          <div className="form-group">
            <input type="text" disabled={role === 'Customer'} className="form-control item" id="UID" placeholder="User Id"
              value={userid} onChange={(e) => setUserid(e.target.value)} />
          </div>
          <div className="form-group">
            <input type="text" disabled={role === 'Customer'} className="form-control item" id="experience" placeholder="Experience"
              value={experience} onChange={(e) => setExperience(e.target.value)} />
          </div>

          <div className="form-groups">
            <center>  <button type="button" className="btn4 btn-block create-account" onClick={signUp}>Create Account</button></center>
          </div>
        </div>
      </form>

    </div>
  )
}

export default SignUp
