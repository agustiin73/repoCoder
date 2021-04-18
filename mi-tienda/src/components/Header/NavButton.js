import React from 'react';
import './NavButton.css'
const navButton = (props)=>{

    return(
        <div className='buttonStyle'>
            {props.text}
        </div>
    )
};

export default navButton;