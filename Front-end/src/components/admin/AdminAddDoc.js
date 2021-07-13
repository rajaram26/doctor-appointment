import axios from 'axios'
import React, { Component } from 'react'
import Nav from '../Nav'
import AdminSideBar from './AdminSideBar'

export default class AdminAddDoc extends Component {
    constructor(props){
        super(props)
        this.state ={
            name:'',
            email:'',
            password:'',
            mobile:'',
        }
    }

    onChangeName = (e) => {
        this.setState({name: e.target.value})
    }
    onChangeEmail = (e) => {
        this.setState({email: e.target.value})
    }
    onChangePassword = (e) => {
        this.setState({password: e.target.value})
    }
    onChangeMobile = (e) => {
        this.setState({mobile: e.target.value})
    }
    save = () => {
        var id = this.state.name + new Date().getMilliseconds();
        axios.post('http://localhost:8080/addUser',
        {
            id: id,
            role: "DOCTOR",
            name:this.state.name,
            email:this.state.email,
            password:this.state.password,
            mobile:this.state.mobile

        })
        .then(res => {
            alert(res.data);
        })
                    
    } 

    reset = () => {
        this.setState({
            name:'',
            email:'',
            password:'',
            mobile:''
        })
    }

    render() {
        return (
            <div>
                <Nav/>
                <AdminSideBar/>
                <div style={{marginLeft:'260px'}}>
                    <div className="card" style={{width:'80%',height:'430px',margin:'auto',border:'solid #004 1px',borderRadius:'5px',marginTop:'2rem'}}>
                        <div style={{fontWeight:'normal'}}>
                            <h1 style={{padding:'.5rem 0 .5rem 2rem',fontWeight:'normal'}}>Add Doctor</h1>
                        </div>
                        <div className="book-search">
                            <div>
                                <label>Doctor Name:</label>
                                <input type="text" value={this.state.name} onChange={this.onChangeName}></input>
                            </div>
                            <div>
                                <label>Doctor Email:</label>
                                <input type="email" value={this.state.email} onChange={this.onChangeEmail}></input>
                            </div>
                            <div>
                                <label>Doctor Mobile:</label>
                                <input type="text" value={this.state.mobile} onChange={this.onChangeMobile}></input>
                            </div>
                            <div>
                                <label>Doctor Password:</label>
                                <input type="text" value={this.state.password} onChange={this.onChangePassword}></input>
                            </div>
                        </div>
                        <div>
                            <div>
                                <button style={{marginLeft:'2.5rem',marginTop:'1rem'}} onClick={this.save}>Add</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
