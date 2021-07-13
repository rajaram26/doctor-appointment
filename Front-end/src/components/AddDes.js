import React, { Component } from 'react'
import Nav from './Nav';
import SideBar from './SideBar';

export default class AddDes extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <SideBar/>
                <div style={{marginLeft:'260px'}}>
                    <div className="card" style={{width:'80%',height:'220px',margin:'auto',border:'solid #004 1px',borderRadius:'5px',marginTop:'2rem'}}>
                        <div style={{fontWeight:'normal'}}>
                            <h2 style={{padding:'.5rem 0 .5rem 2rem',fontWeight:'normal'}}>Add Medical description</h2>
                        </div>
                        <div className="book-search">
                            <div>
                                <label>Appointment date:</label>
                                <input type="date"></input>
                            </div>
                            <div>
                                <label>Doctor name:</label>
                                <select>
                                    <option>Dr.Raja</option>
                                    <option>Dr.Raja</option>
                                    <option>Dr.Raja</option>
                                    <option>Dr.Raja</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <div>
                                <button style={{marginLeft:'2.5rem',marginTop:'1rem'}}>Book</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
