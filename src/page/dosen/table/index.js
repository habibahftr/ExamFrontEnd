import React, { Component } from 'react';

class Tabledosen extends Component {
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
                                <th className = "tText" > Nama Mahasiswa </th>
                                <th className = "tText" > Program Studi </th>
                                <th className = "tText" > Mata Kuliah </th>
                                <th className = "tText" > Nilai </th>
                                <th className = "tAction" > Action </th> 
                            </tr>
                        </thead>
                        <tbody>
                            {
                                 this.props.dosen.map((dosen, index)=>{
                                     return(
                                         <tr key={index}>
                                             <td>{index+1}</td>
                                             <td>{dosen.nama}</td>
                                             <td>{dosen.id}</td>
                                             <td>{dosen.namaMahasiswa}</td>
                                             <td>{dosen.prodi}</td>
                                             <td>{dosen.mataKuliah}</td>
                                             <td>{dosen.nilai}</td>
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
 
export default Tabledosen;