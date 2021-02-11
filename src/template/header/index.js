import React, { Component } from 'react';
import "./style.css"

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="header">
                <h1>UNIVERSITAS CERIA</h1> 
            </div>
         );
    }
}
 
export default Header;