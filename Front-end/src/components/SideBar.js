import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class SideBar extends Component {
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
                                    <Link to="/home">
                                        <a href="/">Home</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/bookapp">
                                        <a href="/">Book Appointment</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/bookings">
                                        <a href="/">Your Bookings</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/description">
                                        <a href="/">Medical prescription</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/updateProfile">
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
