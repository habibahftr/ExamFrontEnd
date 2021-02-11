import React, { Component } from 'react';
import "./style.css"
import {Redirect} from "react-router-dom";
import { Input, Label } from "../../../component";

class Loginstaff extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: "",
            password : "",
         }
    }
    setValue =event=>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() { 
        return ( 
            <div className="body">
            <div className="container">
                <h1>Login Staff</h1>
                <Label>Username</Label><br/>
                <Input type="text" name="username"  onChange={this.setValue} placeholder="username..."/><br/>
                <Label>Password</Label><br/>
                <Input type="password" name="password"  onChange={this.setValue} /><br/>
                <button onClick={()=>{this.props.doLogin({username, password})}} >Login</button>
            </div>
            </div>
         );
    }
}
 
export default Loginstaff;