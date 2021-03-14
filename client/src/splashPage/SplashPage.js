import React from 'react';
import SplashCover from './splashimages/SplashCover.jpg'
import BWBC from './splashimages/BWBC.png'
import tag_line from './splashimages/tag_line.png'
export function SplashPage() {
    return (
        // <div style={{ 
        //     backgroundImage: `url("./splashimages/SplashCover.jpg")` 
        //   }}>
    <div><img className="backgroundImg" src={SplashCover} 
    alt="Beyond Words Book Club"></img> 
    <div className="loginsignup">Login/Signup</div>
        <div className="images-splash">
            <img className="logo" src={BWBC} alt="BWBC LOGO"></img>
            <img className="logotagline" src={tag_line}
            alt= "Join, Read, Discuss"></img>
    </div>
    </div>
    )}