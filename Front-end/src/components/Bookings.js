import axios from 'axios';
import React, { Component } from 'react'
import Nav  from './Nav' 
import SideBar  from './SideBar' 
export default class Bookings extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            list:[],
            id:''
        }
    }
    componentDidMount(){
        var id = JSON.parse(localStorage.getItem('user-info')).id;
        // console.log(id);
        axios.get(`http://localhost:8080/getListByPatientId/${id}`)
        .then(res => {
            this.setState({list: res.data})
            // console.log(this.state.list);
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
                            <h1 style={{paddingLeft:'1rem',fontWeight:'normal'}}>Your Bookings</h1>
                        </div>
                        <div>
                            <table>
                                <tr>
                                    <th>Appointment Date</th>
                                    <th>Time slot</th>
                                    <th>Doctor's Name</th>
                                    <th>Appointment status</th>
                                </tr>
                                {
                                    this.state.list.map(l => {
                                        return(
                                            <tr key={l.id}>
                                                <td>{l.date}</td>
                                                <td>{l.slot}</td>
                                                <td>Dr.{l.doctor_name.toUpperCase()}</td>
                                                <td>{l.status}</td>
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
