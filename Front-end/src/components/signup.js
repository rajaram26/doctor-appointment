import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

export default class signup extends Component {
    constructor(props){
        super(props);
        this.state={
            name:'',
            email:'',
            mobile:'',
            password:''
        }
    }
    onchangeName = (e) => {
        this.setState({name:e.target.value});
    }
    onchangeEmail = (e) => {
        this.setState({email:e.target.value});
    }
    onchangeMobile = (e) => {
        this.setState({mobile:e.target.value});
    }
    onchangePassword = (e) => {
        this.setState({password:e.target.value});
    }
    submit = () => {
        var time = new Date().getHours() + new Date().getMinutes()+ new Date().getMilliseconds();
        axios.post("http://localhost:8080/addUser",{
            id:this.state.name+time,
            role: "USER",
            name: this.state.name,
            email:this.state.email,
            mobile:this.state.mobile,
            password:this.state.password
        }).then(res => {
            alert(res.data)
            this.props.history.push("/login");
        });
    }
    render() {
        return (
            <div>
                <div>
                    <div className="form-card" style={{height:'460px'}}>
                        <div>
                            <h1>SIGN UP</h1>
                        </div>
                        <div>
                            <label>Name: </label>
                            <input type="name" autoComplete="off" onChange={this.onchangeName}></input>
                        </div>
                        <div>
                            <label>Email: </label>
                            <input type="email" autoComplete="off" onChange={this.onchangeEmail}></input>
                        </div>
                        <div>
                            <label>Mobile: </label>
                            <input type="text" autoComplete="off" onChange={this.onchangeMobile}></input>
                        </div>
                        <div>
                            <label>Password: </label>
                            <input type="password" autoComplete="off" onChange={this.onchangePassword}></input>
                        </div>
                        <div>
                            <button onClick={this.submit}>SIGN UP</button>
                        </div>
                        <div>
                            <Link to="/login">
                                <p style={{padding:'0rem'}}>Back</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
