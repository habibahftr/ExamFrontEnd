import React, { Component } from 'react';
import "./style.css"

class Tablestaff extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    delclicked=(idx)=>{
        this.props.index(idx)
    }

    editclicked=(index)=>{
        this.props.idx(index)
    }
    render() { 
        return ( 
            <div  >
                <div className = "container" style={{marginleft: "30%"}}> 
                    <table id = "table" cellspasing = "0" border = "1" >
                        <thead >
                            <tr style = {{backgroundcolor: "aquamarine"}} >
                                <th className = "tNumber" > No </th> 
                                <th className = "tText" > Nama </th> 
                                <th className = "tText" > ID </th>
                                <th className = "tText" > Semester </th>
                                <th className = "tText" > Tagihan </th>
                                <th className = "tText" > Status Pembayaran </th>
                                <th className = "tAction" > Action </th> 
                            </tr>
                        </thead>
                        <tbody>
                            {
                                 this.props.dosen.map((staff, index)=>{
                                     return(
                                         <tr key={index}>
                                             <td>{index+1}</td>
                                             <td>{staff.namaMahasiswa}</td>
                                             <td>{staff.idMahasiswa}</td>
                                             <td>{staff.semester}</td>
                                             <td>{staff.tagihan}</td>
                                             <td>{staff.statusPembayaran}</td>
                                             <td className = "tdAction">
                                                <button className = "button" type = "button" onClick={()=> this.delclicked(index)} > Hapus </button> 
                                                <button className = "button" type = "button" onClick={()=> this.editclicked(index)}> Edit </button>
                                            </td>
                                             
                                             
                                         </tr>
                                     )
                                 })
                            }
                            </tbody> 
                    </table>
                </div>
            </div>
         );
    }
}
 
export default Tablestaff;