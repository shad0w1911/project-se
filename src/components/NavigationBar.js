import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const styles= styled.div`
    .Navbar-brand, .Navbar-Nav .Nav-Link .Nav-Item {
        color: #fff;
        
        &:hover {
            color:#fb7840;
        }
    }
    .Navbar-Toggle-icon  {
        background-image: url("data:image/svg+xml;");
        color:#fff;
    }
`;
export const NavigationBar = () => (
    <styles>
        <Navbar expand="lg" sticky="top" style={{backgroundColor:'#000', color:'#fff', borderBottom:'1px solid #fb7840'}}>
            <Navbar.Brand href="/" style={{color:'#fff', fontSize:'24px', fontWeight:'10em'}}>SARWAR ENTERPRISES</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="/" style={{color:'#fff'}}>HOME</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/About" style={{color:'#fff'}}>ABOUT</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/Projects" style={{color:'#fff'}}>PROJECTS</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/Partners" style={{color:'#fff'}}>PARTNERS</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/Contact" style={{color:'#fff'}}>CONTACT</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </styles>
)