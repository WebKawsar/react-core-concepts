import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const users = [
    {
      name: "Kawsar Ahmed",
      position: "Web Developer",
      company: "SSL Commerz Ltd.",
      id: 101
    },
    {
      name: "Shamim Ahmed",
      position: "Biman Pilot",
      company: "Bangladesh Air Force",
      id: 201
    },
    {
      name: "Murad Mohammad",
      position: "Bekar committee er Member",
      company: "Babar company Ltd.",
      id: 301
    }
  ]

const [user, SetUser] = useState([])


  useEffect(() =>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => SetUser(data))
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        {
          user.map(user => <Users key={user.id} info={user}></Users>)
        }
      </header>
    </div>
  )
}


function Users(props){
console.log(props.info);
const {id, name, email, company} = props.info;
const companyName = company.name;
  return(
    <div style={{border: "2px solid cyan",backgroundColor: "tomato",margin: "10px"}}>
      <h1>Name : {name}</h1>
      <h3>Email : {email}</h3>
      <h5>Company : {companyName}</h5>
      <h6>ID : {id}</h6>
    </div>
  )
}


export default App;
