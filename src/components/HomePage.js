import React from 'react';

import LeftHalf from '../images/leftSide.svg';
import RightHalf from '../images/rightSide.svg';
import WelcomeImage from '../images/fullHomePage.svg';

const HomePage = () => {
    return(
        <div className="home-page">
            <div>
                <img className="welcome-image" src={WelcomeImage} alt="basketball court with myCourts logo"/>
            </div>
        </div>
    )
}

export default HomePage;