import React, { useState } from "react";
import certificateOfAchievement from '../Images/certificateOfAchievement.jpg';

const Education = () => {

    const [showCertificate, setShowCertificate] = useState(false);
    const [certificate, setCertificate] = useState(certificateOfAchievement)
    
    const onClickCerticateButton = () => {
        setShowCertificate(true)
    }

    return(
        <div>
            <div className="jumbotronContainer">
                <div className="jumbotron bg-primary text-light">
                    <h5 className="display-6 mb-3">Coding Dojo</h5>
                    <hr className="my-2"></hr>
                    <div className="educationFooter">
                        <div className="columnizeEducationFooter">
                            <h4>Program: Full-Stack Developer</h4>
                            <h4>Attended: March/2021 - July/2021</h4>
                            <h4>Field of Study: Computer Science</h4>
                        </div>
                        <div className="columnizeEducationFooter">
                            <h4>Core Studies:</h4>
                            <ul>
                                <li>Web Fundementals (HTML5, CSS3, jQuery)</li>
                                <li>Python 3 (Django, SQLite3)</li>
                                <li>MEAN (MongoDB, Express.js, Angular, Node.js)</li>
                                <li>Ruby on Rails (PostgreSQL, SQLite)</li>
                            </ul>
                        </div>                      
                    </div>
                    
                    <hr></hr>
                    
                {showCertificate? <img src={certificate} className="certificateImage" /> : <button className="btn btn-outline-light" onClick={onClickCerticateButton}>Certificate of Achievement</button>}
                <hr></hr>
                        <h5 className="display-6 mb-3">Codecademy</h5>
                        <hr className="my-2"></hr>
                        <div className="educationFooter">
                            <div className="columnizeEducationFooter">
                                    <ul>
                                        <li><h4>jQuery</h4></li>
                                        <li><h4>Asynchronous JavaScript</h4></li>
                                        <li><h4>Statistics with NumPy</h4></li>
                                    </ul>
                            </div>                      
                        </div>
                        <hr></hr>
                    <nav className="codecademyButtonContainer">    
                    {showCertificate? <img src={certificate} className="certificateImage" /> : <button className="btn btn-outline-light" onClick={onClickCerticateButton}>Certificate of jQuery</button>}
                    {showCertificate? <img src={certificate} className="certificateImage" /> : <button className="btn btn-outline-light" onClick={onClickCerticateButton}>Certificate of Asynchronous JS</button>}
                    {showCertificate? <img src={certificate} className="certificateImage" /> : <button className="btn btn-outline-light" onClick={onClickCerticateButton}>Certificate of Stats with NumPy</button>}
                    </nav>
                </div>
                </div>
                <div className="jumbotronContainer">
                
            </div>
        </div>
    )
}

export default Education;