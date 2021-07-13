import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { UserService } from './service/UserService';
export default class login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username:'',
            password:'',
            user:[]
        }
        this.userService = new UserService();

    }
    ChangeOnName = (e) => {
        this.setState({username: e.target.value});
    }
    ChangeOnPassword = (e) => {
        this.setState({password: e.target.value});
    }
    reset = () => {
        this.setState({username:'',password:''});
    }

    check = () => {
        axios.post(`http://localhost:8080/loginCheck?email=${this.state.username}&password=${this.state.password}`)
        .then(res => {
            this.setState({user: res.data});
            if(this.state.user.id==null){
                alert("Invalid Email/Password");
                this.reset();
            }else{
                var role=this.state.user.role;
                localStorage.setItem('user-info',JSON.stringify(this.state.user));
                if(role==="USER"){
                    this.props.history.push("/home");
                }else if(role==="DOCTOR"){
                    this.props.history.push("/doctor/home");
                }else if(role==="ADMIN"){
                    this.props.history.push("/admin/home");
                }
            }
        });
    }
    render() {
        return (
            <div>
                <div>
                    <div className="form-card" style={{height:'350px'}}>
                        <div>
                            <h1>Login</h1>
                        </div>
                        <div>
                            <label>Email: </label>
                            <input type="email" autoComplete="off" value={this.state.username} onChange={this.ChangeOnName}></input>
                        </div>
                        <div>
                            <label>Password: </label>
                            <input type="password" autoComplete="off" value={this.state.password} onChange={this.ChangeOnPassword}></input>
                        </div>
                        <div>
                            <button onClick={this.check}>LOGIN</button>
                        </div>
                        <div>
                            <Link to="/signup">
                             <p style={{padding:'0rem'}}>If you don't have an account click here</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
