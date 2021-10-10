import React from 'react'
import {useHistory } from 'react-router-dom';

function Acustomer() {
    const history = useHistory();
    const handle = () => history.push('/profile');
    const handle1 = () => history.push('/works');
    return (
        <div>
            <h1>Photographer</h1>
              <div class="container mt-5">
    <div class="row" style={{width:'1500px'}}>
        <div class="col-md-8 mx-auto">
            <table class="table bg-white rounded border">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">User id</th>
                        <th scope="col">Email</th>
                        <th scope="col">Gender</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>_MAR_</td>
                        <td>mark@gmail.com</td>
                        <td>Male</td>
                        <td><button onClick={handle} >View Profile</button></td>
                        <td> <button onClick={handle1}>Works</button></td>
                        <td><button>Delete User</button></td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Mark</td>
                        <td>_MAR_</td>
                        <td>mark@gmail.com</td>
                        <td>Male</td>
                        <td><button onClick={handle}>View Profile</button></td>
                        <td> <button onClick={handle1}>Works</button></td>
                        <td><button>Delete User</button></td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Mark</td>
                        <td>_MAR_</td>
                        <td>mark@gmail.com</td>
                        <td>Male</td>
                        <td><button onClick={handle}>View Profile</button></td>
                        <td> <button onClick={handle1}>Works</button></td>
                        <td><button>Delete User</button></td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>_MAR_</td>
                        <td>mark@gmail.com</td>
                        <td>Male</td>
                        <td><button onClick={handle}>View Profile</button></td>
                        <td> <button onClick={handle1}>Works</button></td>
                        <td><button>Delete User</button></td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Mark</td>
                        <td>_MAR_</td>
                        <td>mark@gmail.com</td>
                        <td>Male</td>
                        <td><button onClick={handle}>View Profile</button></td>
                        <td> <button onClick={handle1}>Works</button></td>
                        <td><button>Delete User</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div> 
        </div>
    )
}

export default Acustomer
