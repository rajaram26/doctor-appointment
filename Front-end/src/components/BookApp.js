import axios from 'axios';
import React, { Component } from 'react'
import Nav from './Nav'
import { UserService } from './service/UserService';
import SideBar from './SideBar'
export default class BookApp extends Component {
    constructor(props){
        super(props);
        this.state = {
            doctors:[],
            slots:[],
            doctor_id:'',
            date:'',
            selected_slot:''
        }
        this.service = new UserService();
    }
    componentDidMount(){
        axios.get('http://localhost:8080/getDoctors').then(res =>{
             this.setState({doctors: res.data});
            //  console.log(this.state.doctors);
        });

    }

    onchangeId = (e) => {
        this.setState({doctor_id: e.target.value})
    }

    onchangeDate = (e) => {
        this.setState({date: e.target.value})
    }

    onchangeSlot = (e) => {
        // var val= (e.target.value);
        this.setState({selected_slot: e.target.value});
    }

    click = () => {
      axios.get('http://localhost:8080/findFreeSlot',{
          params : {
              doctor_name: this.state.doctor_id,
              date : this.state.date
          }
      }).then(res => {
          this.setState({slots: res.data});
          this.open();
      });
    }

    book = () => {
        var d_name='';
        this.state.doctors.map(l => {
            if(l.id===this.state.doctor_id){
                d_name=l.name;
            }
            return 0;
        })

        var id =  JSON.parse(localStorage.getItem('user-info')).id;
        var name =  JSON.parse(localStorage.getItem('user-info')).name;
        var time = new Date().getHours() + new Date().getMinutes() + new Date().getSeconds();


        axios.post('http://localhost:8080/addRequest', {
                id:id+time,
                patient_id:id,
                doctor_id:this.state.doctor_id,
                doctor_name:d_name,
                patient_name:name,
                date: this.state.date,
                slot: "slot-"+(parseInt(this.state.selected_slot)+parseInt("1")),
                status:"pending",
                description:""
        }).then( res => {
            alert(res.data);
            this.reset();
            this.close();
        });
    }

    reset = () => {
        this.setState({date: '',selected_slot: '',doctor_id:''})
    }

    open(){
        document.querySelector('.box').style.display='block';
    }

    close(){
        document.querySelector('.box').style.display='none';
    }

    render() {
        return (
            <div>
                <Nav/>
                <SideBar/>
                <div style={{marginLeft:'260px'}}>
                    <div className="card" style={{width:'80%',height:'220px',margin:'auto',border:'solid #004 1px',borderRadius:'5px',marginTop:'2rem'}}>
                        <div style={{fontWeight:'normal'}}>
                            <h2 style={{padding:'.5rem 0 .5rem 2rem',fontWeight:'normal'}}>Check doctor availability</h2>
                        </div>
                        <div className="book-search" style={{display:'flex'}}>
                            <div>
                                <label>Select appointment date:</label>
                                <input type="date" onChange={this.onchangeDate} value={this.state.date}></input>
                            </div>
                            <div>
                                <label>Select doctor name:</label>
                                <select onChange={this.onchangeId} value={this.state.doctor_id} placeholder="Select doctor">
                                    <option>Select Doctors</option>
                                    {
                                        this.state.doctors.map( list => {
                                          return(
                                            <option key={list.id} value={list.id} >DR.{list.name.toUpperCase()}</option>
                                          )  
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                        <div>
                            <div>
                                <button style={{marginLeft:'2.5rem',marginTop:'1rem'}} onClick={this.click}>Check</button>
                            </div>
                        </div>
                       
                            <div className="card box" style={{maxHeight:'260px',margin:'auto',border:'solid #004 1px',borderRadius:'5px',marginTop:'2rem',display:'none'}}>
                                <div>
                                    <h4 style={{marginLeft:'2rem'}}>Available Slots</h4>
                                </div>
                                <div>
                                    <select onChange={this.onchangeSlot} value={this.state.selected_slot} style={{marginLeft:'1.5rem'}}>
                                        <option>Select your slots</option>
                                    {
                                        this.state.slots.map( (s,i) => {
                                            if(s===0){
                                                return(
                                                    <option key={i} value={i}> Slot-{(i+1)}</option>
                                                )
                                            }
                                            return(
                                                <i></i>
                                            )
                                        })
                                    }
                                    </select>
                                    <div>
                                        <button style={{height:'35px',marginLeft:'1.5rem',marginBottom:'1.5rem'}} onClick={this.book}> Book</button>
                                    </div>
                                </div>
                            </div>
                       
                    </div>
                </div>
            </div>
        )
    }
}

