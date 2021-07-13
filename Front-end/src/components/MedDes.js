import React, { Component } from 'react'
import Nav from './Nav'
import SideBar from './SideBar'
import axios from 'axios';

export default class MedDes extends Component {
    constructor(props){
        super(props);
        this.state= {
            list:[],
            des:''
        }
    }

    componentDidMount(){
        var id = JSON.parse(localStorage.getItem('user-info')).id;
        axios.get(`http://localhost:8080/getPatientByDesc/${id}`)
        .then(res => { this.setState({list:res.data})});
    }

    view = (text) => {
        document.querySelector('.viewer').style.display='block';
        this.setState({des : text});
        // console.log(text);
    }
    close = () => {
        document.querySelector('.viewer').style.display='none';
        
    }

    render() {
        return (
            <div>
                <Nav/>
                <SideBar/>
                <div style={{marginLeft:'260px'}}>
                    <div>
                        <div className="viewer" style={{width:'300px',height:'280px',margin:'0rem 1rem 0rem 0rem',backgroundColor:'rgba(155, 141, 235, 0.205)',float:'right',border: '1px solid black',borderRadius:'5px',display:'none'}}>
                            <div>
                                <h3 onClick={this.close} style={{float:'right',cursor:'pointer',margin:'0rem',padding:'.5rem'}}>X</h3>
                            </div>
                            <div>
                                <p style={{padding:'1rem'}}>{this.state.des}</p>
                            </div>
                        </div>
                        <div>
                            <h1 style={{fontWeight:'normal',margin:'2rem'}}>Medical Description</h1>
                        </div>
                        <div>
                            <div className="card" style={{backgroundColor:'white'}}>
                                <div>
                                    {
                                        this.state.list.map(i => {
                                            if(i.description!=null){
                                                return(
                                                    <div className="opener" key={i.id}>
                                                        <ul>
                                                            <li><p>Date: {i.date}</p></li>
                                                            <li><p>Doctor name: Dr.{i.doctor_name.toUpperCase()}</p></li>
                                                            <li><p>Slot: {i.slot}</p></li>
                                                            <li><button onClick={() => {this.view(i.description)}} style={{height:'30px'}}>View</button></li>
                                                        </ul>
                                                    </div>
                                                )
                                            }
                                            return(
                                                <div key={i.id}>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
