import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'
import { Firebase } from '../../Firebase'
import './Login.css'

function Login() {
  const history = useHistory()
  const [email,setEmail]=useState('')
  const [password,setpassword]=useState('')
  const HandleLogin = (e) => {
 e.preventDefault()
 Firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
   alert('Logged In')
   Firebase.auth().onAuthStateChanged((user)=>{
    localStorage.setItem('userData', JSON.stringify(user));
   })
   history.push('/')
 }).catch((err)=>{
   alert(err.message)
 })
  }
    return (
       
<section className="login-block">
    <div className="containerrrrrr">
	<div className="row">
		<div className="col-md-4 login-sec">
		    <h2 className="text-center">Login Now</h2>
		    <form className="login-form" onSubmit={HandleLogin} style={{marginLeft:'20px'}}>
  <div className="form-group">
    <label for="exampleInputEmail1" className="text-uppercase">Email</label>
    <input type="text" className="form-control" placeholder="Email" 
    value={email} onChange={(e)=>setEmail(e.target.value)}/>
    
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1" className="text-uppercase">Password</label>
    <input type="password" className="form-control" placeholder="Password"
     value={password} onChange={(e)=>setpassword(e.target.value)}/>
  </div>
  
  
    <div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" className="form-check-input"/>
      <small>Remember Me</small>
    </label>
    <button type="submit" className="btnn btn-login float-right" style={{marginRight:'100px'}} >Submit</button>
    <br/>
    <br/>
    <div class="text-center pt-3 text-muted">Not a member? <Link to='/signup'>Sign up</Link></div>
  </div>
  
</form>

		</div>
		<div className="col-md-8 banner-sec">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                 <ol className="carousel-indicators">
                    
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                  </ol>
            <div className="carousel-inner" role="listbox">
    

    <div className="carousel-item">
      <img className="d-block img-fluid" src="https://images.pexels.com/photos/872957/pexels-photo-872957.jpeg" alt="First slide"/>
      <div className="carousel-caption d-none d-md-block">
        <div className="banner-text">
            <h2>This is Heaven</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
        </div>	
    </div>
  </div>
            </div>	   
		    
		</div>
	</div>
</div>
</div>
</section>
    )
}

export default Login
         
    
  
         
    