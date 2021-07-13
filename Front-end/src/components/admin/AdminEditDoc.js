import axios from 'axios';
import React, { Component } from 'react'
import Nav from '../Nav'
import AdminSideBar from './AdminSideBar'

export default class AdminEditDoc extends Component {

    constructor(props){
        super(props);
        this.state = {
            list:[]
        }
    }

    componentDidMount(){
        axios.get('http://localhost:8080/getDoctors')
        .then(res => {this.setState({list : res.data})});
    }

    delete = (e) => {
        axios.delete(`http://localhost:8080/deleteDoctor/${e}`)
        .then(res => {
            alert(res.data);
            this.componentDidMount();
        })
    }

    render() {
        return (
            <div>
                <Nav/>
                <AdminSideBar/>
                <div style={{marginLeft:'260px'}}>
                    <div className="card" style={{margin:'2rem',backgroundColor:'white'}}>
                        <div style={{}}>
                            <h1 style={{paddingLeft:'1rem',fontWeight:'normal'}}>Manage Doctor Profile</h1>
                        </div>
                        <div>
                            <table>
                                <tr>
                                    <th>Doctor Name</th>
                                    <th>Doctor Email</th>
                                    <th>Mobile</th>
                                    <th>Password</th>
                                    <th>Manage</th>
                                </tr>
                                {
                                    this.state.list.map( i => {
                                        return(
                                            <tr key={i.id}>
                                                <td>DR. {i.name.toUpperCase()}</td>
                                                <td>{i.email}</td>
                                                <td>{i.mobile}</td>
                                                <td>{i.password}</td>
                                                <td>
                                                        <div>
                                                            <button onClick={()=> {this.delete(i.id)}} style={{height:'30px'}}>Delete</button>
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
