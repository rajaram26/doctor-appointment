import axios from 'axios';
import React, { Component } from 'react'
import Nav  from '../Nav' 
import DocSideBar  from './DocSideBar'

export default class AddDescription extends Component {
    constructor(props){
        super(props);
        this.state={
            list:[],
            selected_list:[],
            des:''
        }
    }

    componentDidMount(){
        var id = JSON.parse(localStorage.getItem('user-info')).id;
        axios.get(`http://localhost:8080/getConfrimedAppById/${id}`)
        .then(res => { this.setState({list:res.data})});
        // console.log(this.state.list);
    }

    onChangeText = (e) => {
        this.setState({ des : e.target.value});
    }
    
    reset = () => {
        this.setState({ 
            des : '',
            selected_list : ''
        });
    }
    
    close = () => {
        document.querySelector('.wrapper-1').style.display='none';
        this.reset();
    }
    open = (e) => {
        document.querySelector('.wrapper-1').style.display='block';
        axios.get(`http://localhost:8080/getAppById/${e}`)
        .then(res => { 
            this.setState({selected_list : res.data})
            // console.log(this.state.selected_list);
        });
    }

    add = () => {
        document.querySelector('.wrapper-1').style.display='none';
        axios.post('http://localhost:8080/addRequest',{
                id:this.state.selected_list.id,
                patient_id:this.state.selected_list.patient_id,
                doctor_id:this.state.selected_list.doctor_id,
                doctor_name:this.state.selected_list.doctor_name,
                patient_name:this.state.selected_list.patient_name,
                date:this.state.selected_list.date,
                slot:this.state.selected_list.slot,
                status:this.state.selected_list.status,
                description: this.state.des
        }).then( res => {
            alert("Description has been added !!!")
            this.componentDidMount();
            this.reset();
        });
    }

    render() {
        return (
            <div>
                <Nav/>
                <DocSideBar/>
                <div style={{marginLeft:'260px'}}>
                    <div className="card" style={{margin:'2rem',backgroundColor:'white'}}>
                        <div style={{}}>
                            <h1 style={{paddingLeft:'1rem',fontWeight:'normal'}}>Add Description</h1>
                        </div>
                        <div>
                            <table>
                                <tr>
                                    <th>Appointment Date</th>
                                    <th>Time slot</th>
                                    <th>Paitent's Name</th>
                                    <th>Appointment status</th>
                                    <th>Add description</th>
                                </tr>
                                {
                                    this.state.list.map(i => {
                                        if(i.description==null){
                                            return(
                                                <tr key={i.id}>
                                                    <td>{i.date}</td>
                                                    <td>{i.slot}</td>
                                                    <td>Mr/Mrs {i.patient_name.toUpperCase()}</td>
                                                    <td>{i.status}</td>
                                                    <td>
                                                        <button style={{height:'2rem'}} onClick={() => { this.open(i.id) } }>Add</button>
                                                    </td>
                                                </tr>
                                            )
                                        }
                                        return(
                                            <div>

                                            </div>
                                        )
                                    })
                                }
                            </table>
                        </div>
                    </div>
                </div>
                <div class="wrapper-1">
                        <div class="card-1">
                            <div>
                                <div style={{margin:'0rem',padding:'0rem',paddingLeft:'1.4rem'}}>
                                    <h3>Add Description</h3>
                                </div>
                                <div>
                                    <label>Name: Mr/Mrs</label>
                                    {this.state.selected_list.patient_name}
                                </div>
                                <div>
                                    <label>Slot:</label>
                                    {this.state.selected_list.slot}
                                </div>
                                <div>
                                    <label>Date:</label>
                                    {this.state.selected_list.date}
                                </div>
                                <div>
                                    <label>Status:</label>
                                    {this.state.selected_list.status}
                                </div>
                                <div>
                                    <label>Description:</label>
                                    <textarea onChange={this.onChangeText} value={this.state.des}>
                                
                                    </textarea>
                                </div>
                                <div style={{textAlign:'center',margin:'auto',marginTop:'0rem',display:'flex'}}>
                                    <button class="btn" onClick={this.add} style={{height:'2rem'}}>Add</button>
                                    <button class="btn" onClick={this.close} style={{height:'2rem'}}>Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}
