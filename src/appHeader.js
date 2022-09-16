import React from 'react';
import './appHeader.css';
import Logo from  './images/cropped-qpj_emblem.png';

export default function AppHeader() {

    return(

        <header className="App-header">
       
            <img src={Logo} class='Logo' alt='Platinum Jubilee Logo'/>
            <div>
                <h3 class='title'>
                PLATINUM PROJECT
                </h3>
                <p class='strapline'>DWP South Yorkshire District</p>
            </div>
       
        </header>

    )

}