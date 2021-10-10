import React,{useEffect,useContext}  from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomeScreen from './screen/HomeScreen';
import LoginScreen from './screen/LoginScreen';
import SearchScreen from './screen/SearchScreen';
import SignupScreen from './screen/SignupScreen';
import CreatePostScreen from './screen/CreatePostScreen';
import NotificationScreen from './screen/NotificationScreen';
import ProfileScreen from './screen/ProfileScreen';
import Profile1Screen from './screen/Profile1Screen';
import ContactScreen from './screen/ContactScreen'
import EditScreen from './screen/EditScreen';
import AdminScreen from './screen/AdminScreen';
import AdminPhotographerList from './screen/AdminPhotographerScreen';
import AdminCustomerScreen from './screen/AdminCustomerScreen';
import AdminPhotographerWorksScreen from './screen/AdminPhotographerWorksScreen';
import AdminViewWorks from './screen/AdminViewWorks';
import {AuthContext} from './Context'
import {Firebase} from './Firebase'

function App() {
  const {setUser} = useContext(AuthContext)
  useEffect(()=>{
   Firebase.auth().onAuthStateChanged((user)=>{
    localStorage.setItem('userData', JSON.stringify(user));

     setUser(user)
   })
  })
  return (
    <Router>
      <Route path='/' component={HomeScreen} exact/>
      <Route path='/login' component={LoginScreen}/>
      <Route path='/signup' component={SignupScreen} />
      <Route path='/search' component={SearchScreen}/>
      <Route path='/create' component={CreatePostScreen}/>
      <Route path='/notification' component={NotificationScreen}/>
      <Route path='/profile' component={ProfileScreen}/>
      <Route path='/profile1' component={Profile1Screen}/>
      <Route path='/contact' component={ContactScreen}/>
      <Route path='/edit' component={EditScreen} />
      <Route path='/admin' component={AdminScreen}/>
      <Route path='/photographer' component={AdminPhotographerList}/>
      <Route path='/customer' component={AdminCustomerScreen}/>
      <Route path='/works' component={AdminPhotographerWorksScreen}/>
      <Route path='/workdetails' component={AdminViewWorks}/>
    </Router>
  );
}

export default App;
