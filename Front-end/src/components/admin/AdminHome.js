import React, { Component } from 'react'
import AdminSideBar from './AdminSideBar'
import Nav from '../Nav'
export default class AdminHome extends Component {
    constructor(props){
        super(props);
        this.state={
            name:''
        }
    }
    componentDidMount(){
        this.setState({name: JSON.parse(localStorage.getItem('user-info')).name})
    }
    render() {
        return (
            <div>
                <Nav/>
                <AdminSideBar/>
                <div style={{marginLeft:'260px'}}>
                    <div >
                        <div className="card" style={{width:'80%',height:'300px',margin:'auto',border:'solid #004 1px',borderRadius:'5px',marginTop:'2rem'}}>
                            <div className="welcome">
                                <h2>WELCOME BACK {this.state.name.toUpperCase()}!!!</h2>
                                <p>Welcome to online appointment booking website. Here you can book the appointment with specific doctor
                                  in your convidient time. And also you can we your medical prescription here.
                                </p>
                                <div className="run">
                                    <h4 style={{marginLeft:'1rem'}}>Slot Details:</h4>
                                    <p>Slot 1 - 9:00AM - 9:30AM</p>
                                    <p>Slot 2 - 10:30AM - 11:00AM</p>
                                    <p>Slot 3 - 12:00PM - 12:30PM</p>
                                    <p>Slot 4 - 6:00PM - 6:30PM</p>
                                    <p>Slot 5 - 7:30PM - 7:00PM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
