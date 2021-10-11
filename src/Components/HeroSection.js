import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import Type from './Type'


function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/video-2.mp4" autoPlay loop muted />
            <Type style = {{width:"100%"}}/>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <Button className='btns' 
                buttonStyle='btn--primary'
                buttonSize='btn--large'
                >
                    CONTACT <i className='far fa-envelope-open' />
                </Button>

            </div>
        </div>
    )
}

export default HeroSection
