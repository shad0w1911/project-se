import React from 'react';

export const NoMatch = () => (
    <div style={{backgroundColor:'#fff', justifyContent:'center', alignItems:'center', height: '100vh', textAlign:'center'}}>
        <p>
            <span style={{color:'#fb7840', fontSize:'150px', fontWeight:'20px'}}>404</span><br/>
            <span style={{fontSize:'30px', color:'#000'}}>OOPS! NOTHING WAS FOUND</span><br/>
            <span style={{fontSize:'15px', color:'#000'}}>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</span>
        </p>
    </div>
)