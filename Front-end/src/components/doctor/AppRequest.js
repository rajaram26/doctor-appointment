import React, { Component } from 'react'
import Nav from '../Nav'
import SideBar from './DocSideBar'
import axois from 'axios'

export default class AppRequest extends Component {
    constructor(props){
        super(props);
        this.state ={
            app:[],
            selected_user:[]  
        }
    }
    componentDidMount(){
        var id = JSON.parse(localStorage.getItem('user-info')).id;
        axois.get(`http://localhost:8080/getAllAppRequest/${id}`)
        .then(res => { this.setState({app: res.data}) });
    }

    reset(){
        var id = JSON.parse(localStorage.getItem('user-info')).id;
        axois.get(`http://localhost:8080/getAllAppRequest/${id}`)
        .then(res => { this.setState({app: res.data}) });
    }

    accept = (id) => {
        axois.get(`http://localhost:8080/getAppById/${id}`)
        .then(res => {
            this.setState({selected_user: res.data});
                axois.post('http://localhost:8080/addRequest', {
                    id: id,
                    patient_id: this.state.selected_user.patient_id,
                    doctor_id: this.state.selected_user.doctor_id,
                    doctor_name: this.state.selected_user.doctor_name,
                    patient_name: this.state.selected_user.patient_name,
                    date: this.state.selected_user.date,
                    slot: this.state.selected_user.slot,
                    status:"confirmed"
                }).then( res => {
                    alert("Appointment has been confirmed !!!");
                    this.reset();
                });
        });

    }

    decline = (id) => {
        axois.get(`http://localhost:8080/getAppById/${id}`)
        .then(res => {
            this.setState({selected_user: res.data});

                axois.post('http://localhost:8080/addRequest', {
                    id: id,
                    patient_id: this.state.selected_user.patient_id,
                    doctor_id: this.state.selected_user.doctor_id,
                    doctor_name: this.state.selected_user.doctor_name,
                    patient_name: this.state.selected_user.patient_name,
                    date: this.state.selected_user.date,
                    slot: this.state.selected_user.slot,
                    status:"declined"
                }).then( res => {
                    alert("Appointment has been declined !!!");
                    this.reset();
                });
        });

        
    } 

    render() {
        return (
            <div>
                <Nav/>
                <SideBar/>
                <div style={{marginLeft:'260px'}}>
                    <div className="card" style={{margin:'2rem',backgroundColor:'white'}}>
                        <div style={{}}>
                            <h1 style={{paddingLeft:'1rem',fontWeight:'normal'}}>Appointment Request's</h1>
                        </div>
                        <div>
                            <table>
                                <tr>
                                    <th>Appointment Date</th>
                                    <th>Time slot</th>
                                    <th>Patient's Name</th>
                                    <th>Request</th>
                                </tr>
                                {
                                    this.state.app.map( i => {
                                        return(
                                        <tr key={i.id}>
                                            <td>{i.date}</td>
                                            <td>{i.slot}</td>
                                            <td>Mr / Mrs {i.patient_name.toUpperCase()}</td>
                                            <td>
                                                <div style={{display:'flex'}}>
                                                    <div>
                                                        <button onClick={() => this.accept(i.id)} style={{height:'30px'}}>Accept</button>
                                                    </div>
                                                    <div>
                                                        <button onClick={() => this.decline(i.id)} style={{height:'30px'}}>Decline</button>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
    
                                        )
                                    })
                                }
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
