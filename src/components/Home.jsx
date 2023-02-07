import React from "react";
import {NavLink} from "react-router-dom";
// import Home_Image from '../../public/images/home.webp'


const Home = () => {
    return (<>
        <div className="container-fluid home">
                <div className="container">
            <div className="row content justify-content-center align-content-center">
                <div className="col-md-12 d-flex justify-content-end ">
                    <div className="d-flex  card  align-items-center justify-content-end">
                        <div className="banner_text">
                            <h1 className>Grow your business with</h1>
                            <h2>Signum Concepts</h2>
                            <p>We are team of talanted developer making website</p>
                            <NavLink to="/">Get Started</NavLink>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </div>
    </>);
}
export default Home