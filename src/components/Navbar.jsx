import React from "react";
import {NavLink} from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Navbar = () => {
    return (<>
        <div className="container">
            <div className="row header">
                <div className="col col-md-6">
                    <div className="logo">
                        <NavLink to="/"><h1>React App</h1></NavLink>
                    </div>
                </div>
                <div className="col  col-md-6  d-flex justify-content-end">
                    <div  className="menu">
                        <NavLink   className="active_class"   to="/">Home </NavLink>
                        <NavLink   className="active_class"  to="/about">About </NavLink>
                        <NavLink   className="active_class"  to="/services">Services </NavLink>
                        <NavLink   className="active_class"  to="/contact">Contact </NavLink>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default Navbar;