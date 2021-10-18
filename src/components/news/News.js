import React,{useState,useEffect} from 'react'
import { Firebase } from '../../Firebase';
import './News.css'


function News() {


  
    return (
        <div className="News">
        <div className="news">
        {/* <img className="logos" src="https://firebasestorage.googleapis.com/v0/b/photogram-d89a8.appspot.com/o/Project%20-%20Drawing%2018446153577890198630.png?alt=media&token=d8228122-e43d-4304-8c8a-d7abff52f3d7" alt="logo"/> */}
        </div>
        <div class="cardd" >
        <center><p class="w3-xxlarge font-effect-shadow-multiple">Trending</p></center>
        <img class="card-img-top"   src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201812/15326401_1258238067566827_8255529267090242331_n.jpeg?_i9pEVrcwxEhlKElAH6YOq7ajLmlsuP2" alt="userImage"/>
        <div class="card-body">
            <h5 class="card-title">Raghu Rai</h5>
            <p class="card-text">well-known photographer and photojournalist from India</p>
           <center> <button className='detail'>Details</button></center>
        </div>
        </div>
        </div>
    )
}

export default News
