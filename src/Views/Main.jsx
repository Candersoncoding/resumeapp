import React, {useEffect, useState} from 'react';
import ContactMe from '../Components/ContactMe';
import Education from '../Components/Education';

const Main = () => {



    return(
        <div>
            <navbar className="navBarContainer">
                <button className="navBarButtons">Contact Info</button>
                <button className="navBarButtons">Education</button>
            </navbar>

            <ContactMe />
            <Education />
        </div>
    )
}

export default Main;