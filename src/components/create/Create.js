import React from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Avatar from '@material-ui/core/Avatar'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar } from 'react-bootstrap'
import {useHistory } from 'react-router-dom';
import './Create.css'

function Create() {
    const history = useHistory();
    const handleSubmit = () => history.push('/');
    return (
        <div class="container px-4 py-5 mx-auto">
         <div class="row d-flex justify-content-center">
        <div class="card">
            <Row>
                <Col  >
                <LinkContainer to='/profile'>
                    <Navbar.Brand>
                    <Avatar className="post__avatars" alt="Abel" src="https://www2.shutterstock.com/blog/wp-content/uploads/sites/5/2017/05/SLN_6201.jpg" />
                    <h3 className="post__namee">Cristy</h3>
                    </Navbar.Brand>
                </LinkContainer>
                </Col>
            </Row>
            <Row>
                <Col>
                <div class="item-wrapper one">
                <div class="item">
                    <form data-validation="true" action="#" method="post" enctype="multipart/form-data">
                        <div class="item-inner">
                            <div class="item-content">
                                <div class="image-upload"> <label style={{cursor:' pointer'}} for="file_upload"> <img src="" alt="" class="uploaded-image"/>
                                        <div class="h-100">
                                            <div class="dplay-tbl">
                                                <div class="dplay-tbl-cell"> <i class="fa fa-cloud-upload"></i>
                                                    <h5><b>Choose Your Image to Upload</b></h5>
                                                    <h6 class="mt-10 mb-70">Or Drop Your Image Here</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <input data-required="image" type="file" name="image_name" id="file_upload" class="image-input" data-traget-resolution="image_resolution" value=""/>
                                    </label> </div>
                            </div>
                        
                        </div>
                        
                    </form>
                </div>
                
            </div>
                </Col>
            </Row>
            <Row>
                <Col>
                <input type="text" class="form-control" placeholder="Caption" aria-label="Username" aria-describedby="basic-addon1"/><br/>
                <input type="text" class="form-control" placeholder="Description(max:30 words)" aria-label="Username" aria-describedby="basic-addon1"/><br/>
                <input type="text" class="form-control" placeholder="location(optional)" aria-label="Username" aria-describedby="basic-addon1"/><br/>
                </Col>
            </Row>
            <Row>
                <Col>
                <center><button type="button" onClick={handleSubmit} class="btnn btn-dark">POST</button></center>
                </Col>
            </Row>
        </div>
    </div>
</div>
    )
}

export default Create

