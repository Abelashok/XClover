import React,{useEffect,useContext}  from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomeScreen from './screen/HomeScreen';
import CustomerHomeScreen from './screen/CustomerHomeScreen';
import WorkScreen from './screen/WorkScreen';
import LoginScreen from './screen/LoginScreen';
import SearchScreen from './screen/SearchScreen';
import SignupScreen from './screen/SignupScreen';
import CreatePostScreen from './screen/CreatePostScreen';
import NotificationScreen from './screen/NotificationScreen';
import ProfileScreen from './screen/ProfileScreen';
import Profile1Screen from './screen/Profile1Screen';
import Profile2Screen from './screen/Profile2Screen';
import Profile3Screen from './screen/Profile3Screen';
import Profile4Screen from './screen/Profile4Screen';
import ContactScreen from './screen/ContactScreen'
import EditScreen from './screen/EditScreen';
import AdminScreen from './screen/AdminScreen';
import AdminPhotographerList from './screen/AdminPhotographerScreen';
import AdminCustomerScreen from './screen/AdminCustomerScreen';
import AdminPhotographerWorksScreen from './screen/AdminPhotographerWorksScreen';
import AdminSearchScreen from './screen/AdminSearchScreen'
import AdminViewWorks from './screen/AdminViewWorks';
import {AuthContext} from './Context'
import {Firebase} from './Firebase'
import ReplyScreen from './screen/ReplyScreen';

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
      <Route path='/customer' component={CustomerHomeScreen} exact/>
      <Route path='/work' component={WorkScreen} exact/>
      <Route path='/login' component={LoginScreen}/>
      <Route path='/reply' component={ReplyScreen}/>
      <Route path='/signup' component={SignupScreen} />
      <Route path='/search' component={SearchScreen}/>
      <Route path='/search1' component={AdminSearchScreen}/>
      <Route path='/create' component={CreatePostScreen}/>
      <Route path='/notification' component={NotificationScreen}/>
      <Route path='/profile' component={ProfileScreen}/>
      <Route path='/profile1' component={Profile1Screen}/>
      <Route path='/profile2' component={Profile2Screen}/>
      <Route path='/profile3' component={Profile3Screen}/>
      <Route path='/profile4' component={Profile4Screen}/>
      <Route path='/contact' component={ContactScreen}/>
      <Route path='/edit' component={EditScreen} />
      <Route path='/admin' component={AdminScreen}/>
      <Route path='/photographer' component={AdminPhotographerList}/>
      <Route path='/customer1' component={AdminCustomerScreen}/>
      <Route path='/works' component={AdminPhotographerWorksScreen}/>
      <Route path='/workdetails' component={AdminViewWorks}/>
    </Router>
  );
}

export default App;
