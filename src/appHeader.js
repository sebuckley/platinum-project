import React from 'react';
import './appHeader.css';
import Logo from  './images/cropped-qpj_emblem.png';

export default function AppHeader() {

    setTimeout(() => {

        const header = document.getElementById('header');
        header.style.display = "none";

    }, 10000);

    return(

        <header id="header" className="App-header">
       
            <img src={Logo} className='Logo' alt='Platinum Jubilee Logo'/>
            <div>
                <h3 className='title'>
                PLATINUM PROJECT
                </h3>
                <p className='strapline'>DWP South Yorkshire District</p>
            </div>
       
        </header>

    )

}