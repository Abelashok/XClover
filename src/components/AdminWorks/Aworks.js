import React from 'react'
import {useHistory } from 'react-router-dom';

function Aworks() {
    const history = useHistory();
    const handle = () => history.push('/workdetails');
   
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
                        <th >User Name:Mark</th>
                        <th/>
                        <th/>
                    </tr>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Work id</th>
                        <th scope="col">Caption</th>
                        <th scope="col">Description</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>1234235</td>
                        <td>City Lights</td>
                        <td>City</td>
                        <td><button onClick={handle}>View</button></td>
                        <td><button>Delete Post</button></td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>1234235</td>
                        <td>City Lights</td>
                        <td>City</td>
                        <td><button>View</button></td>
                        <td><button>Delete Post</button></td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>1234235</td>
                        <td>City Lights</td>
                        <td>City</td>
                        <td><button>View</button></td>
                        <td><button>Delete Post</button></td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>1234235</td>
                        <td>City Lights</td>
                        <td>City</td>
                        <td><button>View</button></td>
                        <td><button>Delete Post</button></td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>1234235</td>
                        <td>City Lights</td>
                        <td>City</td>
                        <td><button>View</button></td>
                        <td><button>Delete Post</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div> 
        </div>
    )
}

export default Aworks