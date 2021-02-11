import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Input, Label, Option} from "../../../component";
import "./style.css"

class Formdosen extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            nama:"",
            id: "",
            namaMahasiswa: "",
            prodi: "",
            mataKuliah: "",
            nilai: "",
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
            nama:"",
            id: "",
            namaMahasiswa: "",
            prodi: "",
            mataKuliah: "",
            nilai: "",
        })
        event.preventDefault()
    }


    
    render() { 
        if(!this.props.statusLogin){
            return <Redirect to="/logindosen"/>
        }
        if("nama" in this.props.edit){
            this.setState({
                nama:this.props.edit.nama,
                id:this.props.edit.id,
                namaMahasiswa:this.props.edit.namaMahasiswa,
                prodi:this.props.edit.prodi,
                mataKuliah: this.props.edit.mataKuliah,
                nilai:this.props.edit.nilai,
            })
            this.props.reset();
        }
        const{nama, id, namaMahasiswa, prodi, mataKuliah, nilai}= this.state
        return ( 
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <h1>Form Penilaian</h1>
                    <Label>Nama: </Label> <Input type="text" name="nama" value={this.state.nama} onChange={this.setValue} placeholder="Name.."/><br/>
                    <Label>ID Dosen: </Label> <input type="text" name="id" value={this.state.id} onChange={this.setValue}></input><br/>
                    <Label>Nama Mahasiswa: </Label> <input type="text" name="namaMahasiswa" value={this.state.namaMahasiswa} onChange={this.setValue}></input><br/>   
                    <Label>Program Studi: </Label>
                     <select name="prodi" value={this.state.prodi} onChange={this.setValue} defaultValue="Pilih Program Studi">
                        <Option defaultValue>Pilih Program Studi</Option>
                        <Option value="Fisika">Fisika</Option>
                        <Option value="Kimia">Kimia</Option>
                        <Option value="Biologi">Biologi</Option>
                        <Option value="Matematika">Matematika</Option>
                    </select><br/>
                    <Label>Mata Kuliah: </Label>
                     <select name="mataKuliah" value={this.state.mataKuliah} onChange={this.setValue} defaultValue="Pilih Mata Kuliah">
                        <Option defaultValue>Pilih Mata Kuliah</Option>
                        <Option value="FisikaDasar">FisikaDasar</Option>
                        <Option value="KimiaDasar">KimiaDasar</Option>
                        <Option value="BiologiDasar">BiologiDasar</Option>
                        <Option value="MatematikaDasar">MatematikaDasar</Option>
                        <Option value="Kalkulus">Kalkulus</Option>
                        <Option value="Kewirausahaan">Kewirausahaan</Option>
                    </select><br/>
                    <Label>Nilai: </Label> <Input name="nilai" type="number" value={this.state.nilai} onChange={this.setValue} placeholder="Nilai.."/><br/>
                    <button onClick={()=> this.props.save({nama, id, namaMahasiswa, prodi, mataKuliah, nilai})} type="submit" value="Submit">Submit</button>
               
                </form>

            </div>
         );
    }
}
 
export default Formdosen;