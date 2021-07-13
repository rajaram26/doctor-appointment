import axios from 'axios';
import React, { Component } from 'react'
import Nav from './Nav';
import SideBar from './SideBar';

export default class UpdateProfile extends Component {
    constructor(props){
        super(props);
        this.state={
            user:[],
            mobile:'',
            password:''
        }
    }

    componentDidMount(){
        this.setState({
        user : JSON.parse(localStorage.getItem('user-info')),
        mobile : JSON.parse(localStorage.getItem('user-info')).mobile,
        password : JSON.parse(localStorage.getItem('user-info')).password

    });
        // console.log(this.state.mobile, this.state.password);
    }

    onChangeMobile = (e) => {
        this.setState({ mobile : e.target.value});
    }

    onChangePassword = (e) => {
        this.setState({ password : e.target.value});
    }

    update = () => {
        axios.post('http://localhost:8080/addUser',{
            id:this.state.user.id,
            role:this.state.user.role,
            name: this.state.user.name,
            email:this.state.user.email,
            mobile:this.state.mobile,
            password:this.state.password
        }).then(res => {
            alert('Profile is updated successfully !!!');
        })
    }

    render() {
        return (
            <div>
                <Nav/>
                <SideBar/>
                <div style={{marginLeft:'260px'}}>
                    <div className="card box"  style={{width:'80%',height:'420px',margin:'auto',border:'solid #004 1px',borderRadius:'5px',marginTop:'2rem'}}>
                        <div>
                            <h1>Edit Profile</h1>
                        </div>
                        <div>
                            <label>Name: {this.state.user.name}</label>
                        </div>
                        <div>
                            <label>Email: {this.state.user.email}</label>
                        </div>
                        <div>
                            <label>Mobile:</label>
                            <input type="text" value={this.state.mobile} onChange={this.onChangeMobile}/>
                        </div>
                        <div>
                            <label>Password:</label>
                            <input type="text" value={this.state.password} onChange={this.onChangePassword}></input>
                        </div>
                        <div style={{margin:'auto'}}>
                            <button onClick={() => {this.update()}}>Update</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
