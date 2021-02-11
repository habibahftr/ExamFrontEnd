import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import "./style.css"
class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        if(this.props.statusDosen){
            return <Redirect to="/logindosen"/>
        }
        return ( 
            <div className="body">
                <button className="btn third" onClick={this.props.doDosen}>Dosen</button>
                <button className="btn third" >Mahasiswa</button>
                <button className="btn third" >Staff</button>
            </div>
         );
    }
}
 
export default Body;