import React from 'react';
import { MDBRow, MDBCol, MDBCard, MDBBtn, MDBIcon, MDBCardTitle } from 'mdbreact'; 
import { Row, Col, Container } from "react-bootstrap";

export const Projects = () => (
    <div>
        <Container>
            <Row>
                <Col style={{marginTop:"120px", marginBottom:"120px",}}>
                    <p style={{fontSize:"50px", fontWeight:"900"}}>What we've been <br/>upto lately.</p>
                </Col>
            </Row>
            <Row id="projectRow">
                <Col md lg>
                    <p style={{fontSize:"30px", fontWeight:"500"}}><span style={{color:"#fb7840"}}>Sharing</span> the experience</p>
                    <div>
                        <p style={{fontSize:"20px", fontWeight:"200"}}>
                            We think it's important to take a step back at the end of every project and show others what we've built and what we have learned.
                        </p>
                    </div>
                </Col>
                <Col md lg>
                    <p style={{fontSize:"30px", fontWeight:"500"}}>This is our legacy</p>
                    <div>
                        <p style={{fontSize:"20px", fontWeight:"200"}}>
                            The web is such a fast moving medium that we feel it's crucial to immortalize our projects in the form of case studies.
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>

        {/*Project Viewing style 1*/}

        <div id="wrapperVS1">
        <Container>
            <Row>
                <Col lg md>
                    <div id="projectVS1">
                        <Container>
                            <p style={{fontSize:"25px", fontWeight:"250", color:"#fb7840"}}>06 - Blue Lagoon</p>
                            <p style={{fontSize:"30px", fontWeight:"400"}} id="textVS1">Going Deep with<br/>Blue Lagoon</p>
                            <p style={{fontSize:"20px", fontWeight:"100"}}>The skilful Jón Frímannsson of Jónfrí & Co. was responsible for the stunning pixels that we were tasked with turning into a technical masterpiece—a website for the Blue Lagoon.</p>
                        </Container>
                    </div>
                </Col>
                <Col md lg>
                    <div>
                        <img  id="imgVS1" src="https://images.wallpaperscraft.com/image/office_desks_computers_style_modern_39302_1920x1080.jpg" alt="image"/>
                    </div>
                </Col>
            </Row>
        </Container>
        </div>
        <div id="wrapperVS1">
        <Container>
            <Row>
                <Col md lg>
                    <div>
                        <img  id="imgVS1" src="https://images.wallpaperscraft.com/image/office_desks_computers_style_modern_39302_1920x1080.jpg" alt="image"/>
                    </div>
                </Col>
                <Col lg md>
                    <div id="projectVS1">
                        <Container>
                            <p style={{fontSize:"25px", fontWeight:"250", color:"#fb7840"}}>06 - Blue Lagoon</p>
                            <p style={{fontSize:"30px", fontWeight:"400"}} id="textVS1">Going Deep with<br/>Blue Lagoon</p>
                            <p style={{fontSize:"20px", fontWeight:"100"}}>The skilful Jón Frímannsson of Jónfrí & Co. was responsible for the stunning pixels that we were tasked with turning into a technical masterpiece—a website for the Blue Lagoon.</p>
                        </Container>
                    </div>
                </Col>
            </Row>
        </Container>
        </div>

        {/*Project Viewing style 2*/}

        <MDBRow className="mx-1" style={{marginTop:"20px"}}>
          <MDBCol md="4" className="mb-4 mb-md-0">
            <section>
              <MDBCard style={{ backgroundImage: "url('https://mdbootstrap.com/img/Photos/Horizontal/City/6-col/img%20(47).jpg')" }}>
                <div className="text-white text-center d-flex align-items-center img-gradient-overlay py-5 px-4 transparentBg">
                  <div className="transparentBg">
                    <h5 className="orange-text"><MDBIcon icon="desktop" /> Software</h5>
                    <MDBCardTitle tag="h3" className="pt-2"><strong>This is card title</strong></MDBCardTitle>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
                        optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos.
                    Odit sed qui, dolorum!.</p>
                    <MDBBtn style={{backgroundColor:"#fb7840", color:"#fff"}}><MDBIcon icon="clone left" /> Learn More</MDBBtn>
                  </div>
                </div>
              </MDBCard>
            </section>
          </MDBCol>
          <MDBCol md="4" className="mb-4 mb-md-0">
            <section>
              <MDBCard style={{ backgroundImage: "url('https://mdbootstrap.com/img/Photos/Horizontal/City/6-col/img%20(47).jpg')" }}>
                <div className="text-white text-center d-flex align-items-center img-gradient-overlay py-5 px-4">
                  <div  className="transparentBg">
                    <h5 className="orange-text"><MDBIcon icon="desktop" /> Software</h5>
                    <MDBCardTitle tag="h3" className="pt-2"><strong>This is card title</strong></MDBCardTitle>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
                        optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos.
                    Odit sed qui, dolorum!.</p>
                    <MDBBtn style={{backgroundColor:"#fb7840", color:"#fff"}}><MDBIcon icon="clone left" /> Learn More</MDBBtn>
                  </div>
                </div>
              </MDBCard>
            </section>
          </MDBCol>
          <MDBCol md="4" className="mb-4 mb-md-0">
            <section>
              <MDBCard style={{ backgroundImage: "url('https://mdbootstrap.com/img/Photos/Horizontal/City/6-col/img%20(47).jpg')" }}>
                <div className="text-white text-center d-flex align-items-center img-gradient-overlay py-5 px-4">
                  <div  className="transparentBg">
                    <h5 className="orange-text"><MDBIcon icon="desktop" /> Software</h5>
                    <MDBCardTitle tag="h3" className="pt-2"><strong>This is card title</strong></MDBCardTitle>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
                        optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos.
                    Odit sed qui, dolorum!.</p>
                    <MDBBtn style={{backgroundColor:"#fb7840", color:"#fff"}}><MDBIcon icon="clone left" /> Learn More</MDBBtn>
                  </div>
                </div>
              </MDBCard>
            </section>
          </MDBCol>
        </MDBRow>

    </div>
)