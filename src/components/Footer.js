import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

export const Footer = () => (
    <div style={{marginTop:'1em', width:'100%', textAlign:'center'}}>
        <p>Developed By <span style={{color:'#fb7840'}}>Hassan Uddin Sheikh</span><br/>All Rights Reserved <FontAwesomeIcon icon={faCopyright}/> 2020</p>
    </div>
)