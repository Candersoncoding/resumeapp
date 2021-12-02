import React, { useState } from "react";
import {Router, Link } from '@reach/router';
import GitImg from '../Images/github.svg';
import LinkedInImage from '../Images/linkedin.svg';


const ContactMe = (props) => {

    const onClickGitHub = () => {
        window.open("https://github.com/Candersoncoding");
        }
    
    const onClickLinkedIn = () => {
        window.open("https://www.linkedin.com/in/cory-anderson-773148218/");
    }
    
    return(
        <div>
            <div className="jumbotronContainer">
                <div className="jumbotron bg-primary text-light">
                    <h5 className="display-6 mb-3">E-mail: dev.cory.anderson@gmail.com</h5>
                    <hr className="my-2"></hr>
                    <div className="jumbotronFooter">
                        <h5>Phone: 972-415-5336</h5>
                        <button className="btn btn-outline-light gitButton" onClick={onClickGitHub}>My <img className="gitImage" src={GitImg}/></button>
                        <button className="btn btn-outline-light gitButton" onClick={onClickLinkedIn}>Connect <img className="gitImage" src={LinkedInImage}/></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactMe;