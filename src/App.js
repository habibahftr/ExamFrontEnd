import React, { Component } from 'react';
import './App.css';
import { Body, Header, Footer} from "./template";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {Formdosen, Tabledosen, Logindosen} from "./page/dosen";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      dosen: [{
        nama:"Suripto",
        id: "10089",
        namaMahasiswa: "Habibah",
        prodi: "Fisika",
        mataKuliah: "FisikaDasar",
        nilai: "89",
    },
    {
      nama:"Waluyo",
      id: "10078",
      namaMahasiswa: "Bibah",
      prodi: "Kimia",
      mataKuliah: "FisikaDasar",
      nilai: "78",
    },

    ],
    dosenEdit: {},
    act: 0,
    index: "",
    statusLogin: false,
    statusDosen : false,
    dosenLogin: {
        username: "dosen",
        password: "1234",
      }
    }
  }

save=(dataDosen)=>{
const{nama, id, namaMahasiswa, prodi, mataKuliah, nilai}= dataDosen
console.log(dataDosen);
let newDosen = this.state.dosen
let data = {
    "nama":nama,
    "id": id,
    "namaMahasiswa": namaMahasiswa,
    "prodi": prodi,
    "mataKuliah": mataKuliah,
    "nilai": nilai,
}
if (this.state.act === 0) {
    if (dataDosen.nama !== "" &&
        dataDosen.id !== "" &&
        dataDosen.namaMahasiswa !== "" &&
        dataDosen.prodi !== "" &&
        dataDosen.mataKuliah !== "" &&
        dataDosen.nilai !== ""
        ) {
            newDosen.push(data)
            alert(`Data ${data.nama} berhasil diinput!`)
            this.setState({
                dosen: newDosen
            }) 
        } 
        else {
            alert(`Lengkapi semua data!`)
        }  
} else{
    let idx = this.state.index
    newDosen[idx].nama = nama;
    newDosen[idx].id = id;
    newDosen[idx].namaMahasiswa = namaMahasiswa;
    newDosen[idx].prodi = prodi;
    newDosen[idx].mataKuliah = mataKuliah;
    newDosen[idx].nilai = nilai;
    this.setState({
        dosen: newDosen,
        act: 0,
    })
    alert(`Update Berhasil!`)
}
}

delbutton=(index)=>{
  console.log("index del:", index);
  let newDosen = this.state.dosen
  newDosen.splice(index, 1)
  this.setState({
    dosen : newDosen
  })
}

editbutton=(idx)=>{
this.setState({
    act: 1,
    index : idx
})
console.log("update ", idx);
let editData = this.state.dosen[idx];
this.setState({
    dosenEdit: editData,
    act :1,
    index : idx,
})
}

reset=()=>{
this.setState({
    dosenEdit:{}
})
}



  doDosen=()=>{
    this.setState({
      statusDosen: true
    })
  }
  doLogin=(user)=>{
    let {username, password} = user
    if(username === this.state.dosenLogin.username && password===this.state.dosenLogin.password){
        this.setState({
            statusLogin: true
        })
    } else{
        alert(`Username dan Password salah!`)
    }
    
}

  
  render() { 
    return (
      <>
      <Header></Header>
      <BrowserRouter>
        <Switch>
        <Route exact path="/">
            <Body doDosen={this.doDosen} statusDosen={this.state.statusDosen}></Body>
          </Route>
          <Route path="/logindosen">
            <Logindosen statusDosen={this.state.statusDosen} doLogin={this.doLogin} statusLogin={this.state.statusLogin}></Logindosen>
          </Route>
          <Route path="/formdosen">
            <div>
              <Formdosen statusLogin={this.state.statusLogin} save={this.save} edit={this.state.dosenEdit} reset={this.reset} ></Formdosen>
              <Tabledosen index={this.delbutton} idx={this.editbutton} dosen={this.state.dosen}></Tabledosen>
            </div>
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer></Footer>
      </>
      
     );
  }
}

export default App;
