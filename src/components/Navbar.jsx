import React from "react";
import {NavLink} from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'




const Navbar = () => {
    return (<>
        <div className="container-fluid">
            <div className="row header">
                <div className="col col-md-6">
                    <div className="logo">
                       <h1>React App</h1>
                    </div>
                </div>
                <div className="col  col-md-6">
                    <div classNam="menu">
                        <NavLink   className="active_class" to="/">Home </NavLink>
                        <NavLink   className="active_class" to="/about">About </NavLink>
                        <NavLink   className="active_class" to="/services">Services </NavLink>
                        <NavLink   className="active_class" to="/contact">Contact </NavLink>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default Navbar;