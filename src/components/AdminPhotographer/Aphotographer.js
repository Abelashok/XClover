import React,{useState,useEffect} from 'react'
//import {useHistory } from 'react-router-dom';
import { Firebase } from '../../Firebase'
import { Link } from 'react-router-dom'

function Acustomer() {
    const [post ,setPost] = useState([])

  useEffect(()=>{
      Firebase.firestore().collection('users').where("role","==","Photographer").onSnapshot((snapshot)=>{
        setPost(snapshot.docs.map(doc => ({
          id: doc.id,
          post : doc.data()})
          ))
       })
    },[])
    // const deleteUser = (doc) => {
    //     Firebase.firestore.collection('Users').doc(doc).onSnapshot((snapshot)=>{
    //        snapshot.docs.map((doc)=> console.log(doc.data())) 
    //     })    
    // }
    // const history = useHistory();
    // const handle = () => history.push('/profile');
    // const handle1 = () => history.push('/works');
    return (
        <div>
            <h1>Photographer</h1>
              <div class="container mt-5">
    <div class="row" style={{width:'1500px'}}>
        <div class="col-md-8 mx-auto">
            <table class="table bg-white rounded border">
                <thead>
                    <tr>
                        
                        <th scope="col">Name</th>
                        <th scope="col">User id</th>
                        <th scope="col">Email</th>
                       
                        <th scope="col"></th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                {
                post.map((doc) => (
                  
                    <tr>
                        
                        <td>{doc.post.name}</td>
                        <td>{doc.post.userid}</td>
                        <td>{doc.post.email}</td>
                        {console.log(doc.id)}
                        <td><button > <Link  to={{pathname:"/profile2", state: {id:`${doc.id}`} }}  className="my-card-btn" style={{color:'black'}}>Details</Link></button></td>
                        <td> <button> <Link  to={{pathname:"/works", state: {name:`${doc.post.name}`} }}  style={{color:'black'}}>Works</Link></button></td>
                        <td><button onClick={()=>{
                            
                            Firebase.firestore().collection('users').where("email","==",doc.post.email).get().then((snapshot)=>{
                                snapshot.forEach(function(doc) {
                                   doc.ref.delete();
                                 
                                })  
                            })
                            
                            //     alert("Deleted")
                            // })
                        }}>Delete User</button></td>
                    </tr>
                ))  
                }
                </tbody>
            </table>
        </div>
    </div>
</div> 
        </div>
    )
}

export default Acustomer
