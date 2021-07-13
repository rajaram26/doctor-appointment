import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class AdminSideBar extends Component {
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
                                    <Link to="/admin/home">
                                        <a href="/">Home</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/admin/addDoctor">
                                        <a href="/">Add Doctor</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/admin/editDoctor">
                                        <a href="/">Manage Doctor's</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/admin/updateProfile">
                                        <a href="/">Update profile</a>
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
