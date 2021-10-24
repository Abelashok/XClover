import React,{useState,useEffect} from 'react'
import { Firebase } from '../../Firebase'
import {useHistory ,useLocation} from 'react-router-dom';


function Aworks() {
    const history = useHistory();
    let data = useLocation();
    const [User,setUser] = useState([])
    const handle = () => history.push('/workdetails');
   

    useEffect(()=>{
        Firebase.firestore().collection('posts').where("name","==",data.state.name).onSnapshot((snapshot)=>{
            setUser(snapshot.docs.map(doc => ({
              id: doc.id,
              post : doc.data()})
              ))
             // console.log(User)
            })
        },[User,data.state.name])

    return (
        <div>
            <h1>Photographer Works</h1>
              <div class="container mt-5">
    <div class="row" style={{width:'1500px'}}>
        <div class="col-md-8 mx-auto">
            <table class="table bg-white rounded border">
                <thead>
                    <tr  aria-colspan="6"  >
                        <th/>
                        <th/>
                        <th/>
                        <th >User Name:{data.state.name}</th>
                        <th/>
                        <th/>
                    </tr>
                    <tr>
                        <th scope="col">Caption</th>
                        <th scope="col">Description</th>
                        <th scope="col">image</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                {
                User.map((doc) => (
                    <tr>
                        <td>{doc.post.caption}</td>
                        <td>{doc.post.description}</td>
                        <td ><img style={{width:'50px', height:'50px'}} alt='abel' src={doc.post.imageURL}/></td>
                        <td><button onClick={handle}>View</button></td>
                        <td><button onClick={()=>{
                           Firebase.firestore().collection('users').where("email","==",doc.post.email).get().then((snapshot)=>{
                            snapshot.forEach(function(doc) {
                               doc.ref.delete();
                             
                            })  
                        })
                        
                        }}>Delete Post</button></td>
                    </tr>
                ))}
                
                </tbody>
            </table>
        </div>
    </div>
</div> 
        </div>
    )
}

export default Aworks