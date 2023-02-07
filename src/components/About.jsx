import React from "react";
import {NavLink} from "react-router-dom";



const About = () => {
    return (<>
            <div className="container-fluid about   ">
                <div className="container">
                    <div className="row content justify-content-center align-content-center">
                        <div className="col-md-6 d-flex">
                            <div className="d-flex align-items-center">
                                <div className="banner_text">
                                    <h1 className>Welcom to About Page</h1>
                                    <h2>Signum Concepts</h2>
                                    <p>We are team of talanted developer making website</p>
                                    <NavLink to="/contact">Contact Here</NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src="/images/about.webp" width="100%"/>
                        </div>

                    </div>
                </div>

            </div>
    </>);
}
export default About