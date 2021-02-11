import React, { Component } from 'react';
import "./style.css"

class Formstaff extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            namaMahasiswa:"",
            idMahasiswa: "",
            semester: "",
            tagihan: "",
            statusPembayaran: "",
            update: false
         }
         this.handleSubmit = this.handleSubmit.bind(this)
    }
    setValue = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit=(event)=>{
        this.setState({
            namaMahasiswa:"",
            idMahasiswa: "",
            semester: "",
            tagihan: "",
            statusPembayaran: "",
        })
        event.preventDefault()
    }

    render() { 
        if("namaMahasiswa" in this.props.edit){
            this.setState({
                namaMahasiswa:this.props.edit.namaMahasiswa,
                idMahasiswa:this.props.edit.idMahasiswa,
                semester:this.props.edit.semester,
                tagihan: this.props.edit.tagihan,
                statusPembayaran:this.props.edit.statusPembayaran,
            })
            this.props.reset();
        }
        const{namaMahasiswa, idMahasiswa, semester, tagihan, statusPembayaran}= this.state
        return ( 
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <h1>Form Administrasi</h1>
                    <Label>Nama: </Label> <Input type="text" name="namaMahasiswa" value={this.state.namaMahasiswa} onChange={this.setValue} placeholder="Nama.."/><br/>
                    <Label>ID Dosen: </Label> <input type="text" name="id" value={this.state.idMahasiswa} onChange={this.setValue}></input><br/>
                    <Label>Semester: </Label> <input type="number" name="semester" value={this.state.semester} onChange={this.setValue}></input><br/>
                    <Label>Tagihan: </Label> <input type="number" name="tagihan" value={this.state.tagihan} onChange={this.setValue}></input><br/>   
                    <Label>Status Pembayaran: </Label>
                     <select name="statusPembayaran" value={this.state.statusPembayaran} onChange={this.setValue} defaultValue="Status Pembayaran">
                        <Option defaultValue>PStatus Pembayaran</Option>
                        <Option value="sudahLunas">Sudah Lunas</Option>
                        <Option value="belumLunas">Belum Lunas</Option>
                    </select><br/>
                    <button onClick={()=> this.props.save({namaMahasiswa, idMahasiswa, semester, tagihan, statusPembayaran})} type="submit" value="Submit">Submit</button>
               
                </form>

            </div>

         );
    }
}
 
export default Formstaff;