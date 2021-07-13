import axios from 'axios';
import React, { Component } from 'react'
import Nav  from '../Nav' 
import DocSideBar  from './DocSideBar' 
export default class YourAppointments extends Component {
    constructor(props){
        super(props);
        this.state={
            list:[]
        }
    }

    componentDidMount(){
        var id = JSON.parse(localStorage.getItem('user-info')).id;
        axios.get(`http://localhost:8080/getConfrimedAppById/${id}`)
        .then(res => { this.setState({list:res.data})});
        // console.log(this.state.list);
    }

    render() {
        return (
            <div>
                <Nav/>
                <DocSideBar/>
                <div style={{marginLeft:'260px'}}>
                    <div className="card" style={{margin:'2rem',backgroundColor:'white'}}>
                        <div style={{}}>
                            <h1 style={{paddingLeft:'1rem',fontWeight:'normal'}}>Your Appointment's</h1>
                        </div>
                        <div>
                            <table>
                                <tr>
                                    <th>Appointment Date</th>
                                    <th>Time slot</th>
                                    <th>Paitent's Name</th>
                                    <th>Appointment status</th>
                                </tr>
                                {
                                    this.state.list.map(i => {
                                        return(
                                            <tr key={i.id}>
                                                <td>{i.date}</td>
                                                <td>{i.slot}</td>
                                                <td>Mr/Mrs {i.patient_name.toUpperCase()}</td>
                                                <td>{i.status}</td>
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
