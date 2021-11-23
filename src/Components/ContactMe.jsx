import React, { useState } from "react";
import {Router, Link } from '@reach/router';
import GitImg from '../Images/github.svg'

const ContactMe = (props) => {


    
    return(
        <div>
            <button className="btn btn-outline-secondary text-dark">Contact Info</button>

            <div className="jumbotron">
                <h5 className="display-6">E-mail: dev.cory.anderson@gmail.com</h5>
                <h5 className="display-6">LinkedIn: <Link to=".///www.linkedin.com/in/cory-anderson-773148218/" className="display-6 m-2">Connect with me</Link></h5>
                <Link to=".///github.com/Candersoncoding" className="btn btn-outline-secondary gitBtn"><img src={GitImg}/></Link>
                <h5 className="display-6">Phone: 972-415-5336</h5>
                <hr className="my-2"></hr>
                <p>It uses utility classes for typography and
                    spacing to space content out within the larger container.</p>
            </div>
        </div>
    )
}

export default ContactMe;