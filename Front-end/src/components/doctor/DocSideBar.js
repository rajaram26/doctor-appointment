import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class DocSideBar extends Component {
    logout = () => {
        localStorage.removeItem('user-info');
    }
    render() {
        return (
            <div>
                <div className="side-nav">
                    <div>
                        <div className="nav-links">
                            <ul>
                                <li>
                                    <Link to="/doctor/home">
                                        <a href="/">Home</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/doctor/appreq">
                                        <a href="/">Appointment Request</a>
                                    </Link>
                                </li>
                
                                <li>
                                    <Link to="/doctor/yourappointments">
                                        <a href="/">Your Appointment's</a>
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/doctor/addDescription">
                                        <a href="/">Add Description</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/doctor/updateProfile">
                                        <a href="/">Update Profile</a>
                                    </Link>
                                </li>
                
                                <li>
                                    <Link to="/login">
                                        <a href="/" onClick={this.logout}>Logout</a>
                                    </Link>
                                </li>
                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
