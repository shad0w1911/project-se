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
            <Row style={{marginBottom:"150px",}}>
                <Col md lg>
                    <p style={{fontSize:"30px", fontWeight:"500"}}><span style={{color:"#fb7840"}}>Sharing</span> the experience</p>
                    <div>
                        <p style={{fontSize:"20px", fontWeight:"200"}}>
                            We think it's important to take a step back at the end of every project and show others what we've built and what we've learned.
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
                    <MDBBtn style={{backgroundColor:"#fb7840", color:"#fff"}}><MDBIcon icon="clone left" /> View project</MDBBtn>
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
                    <MDBBtn style={{backgroundColor:"#fb7840", color:"#fff"}}><MDBIcon icon="clone left" /> View project</MDBBtn>
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
                    <MDBBtn style={{backgroundColor:"#fb7840", color:"#fff"}}><MDBIcon icon="clone left" /> View project</MDBBtn>
                  </div>
                </div>
              </MDBCard>
            </section>
          </MDBCol>

        </MDBRow>

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
                    <MDBBtn style={{backgroundColor:"#fb7840", color:"#fff"}}><MDBIcon icon="clone left" /> View project</MDBBtn>
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
                    <MDBBtn style={{backgroundColor:"#fb7840", color:"#fff"}}><MDBIcon icon="clone left" /> View project</MDBBtn>
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
                    <MDBBtn style={{backgroundColor:"#fb7840", color:"#fff"}}><MDBIcon icon="clone left" /> View project</MDBBtn>
                  </div>
                </div>
              </MDBCard>
            </section>
          </MDBCol>

        </MDBRow>

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
                    <MDBBtn style={{backgroundColor:"#fb7840", color:"#fff"}}><MDBIcon icon="clone left" /> View project</MDBBtn>
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
                    <MDBBtn style={{backgroundColor:"#fb7840", color:"#fff"}}><MDBIcon icon="clone left" /> View project</MDBBtn>
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
                    <MDBBtn style={{backgroundColor:"#fb7840", color:"#fff"}}><MDBIcon icon="clone left" /> View project</MDBBtn>
                  </div>
                </div>
              </MDBCard>
            </section>
          </MDBCol>

        </MDBRow>
    </div>
)