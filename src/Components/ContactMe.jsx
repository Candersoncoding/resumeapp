import React, { useState } from "react";
import {Router, Link } from '@reach/router';
import GitImg from '../Images/github.svg';


const ContactMe = (props) => {

    const onClickHandler = () => {
        window.open("https://github.com/Candersoncoding");
        }
    
    return(
        <div>
            <button className="btn btn-outline-light ">Contact Info</button>
            <div className="jumbotronContainer">
                <div className="jumbotron bg-primary text-light">
                    <h5 className="display-6 mb-3">E-mail: dev.cory.anderson@gmail.com</h5>
                    <h5 className="display-6 mb-3">LinkedIn: <Link to=".///www.linkedin.com/in/cory-anderson-773148218/" className="display-6 m-2 text-dark">Connect with me</Link></h5>
                    <hr className="my-2"></hr>
                    <div className="jumbotronFooter">
                    <button className="btn btn-outline-light gitButton" onClick={onClickHandler}>Visit my <img className="gitPic" src={GitImg}/></button>
                        <h5>Phone: 972-415-5336</h5>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default ContactMe;