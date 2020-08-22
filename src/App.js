import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var persons = [
      {
        name: "Kawsar Ahmed",
        job: "Web Devloper",
        citizen: "Patla"
      },
      {
        name: "Shamim Ahmed",
        job: "Biman Pilot",
        citizen: "Chikla"
      },
      {
        name: "Murad Ahmed",
        job: "Jocker",
        citizen: "Nigerian"
      },
      {
        name: "Juned Ahmed",
        job: "Tutla",
        citizen: "Nigro"
      }
    ]

  var names = ["Kawsar", "Shamim", "Murad", "Babu Vai"];

    // var name = names.map(BigVai => BigVai);
    // console.log(name);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <Counter></Counter>
          <Users></Users>
          <ul>
            {
              names.map(one => {
              return <li>{one}</li>
            })

            }
          </ul>
            {
              persons.map(info => <Person info={info}></Person>)
            }


        {/* <Person info={persons[0]}></Person>
        <Person info={persons[1]}></Person>
        <Person info={persons[2]}></Person> */}

      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(9999);

  const handleClick = () => setCount(count + 1);
  const handleClick2 = () => setCount(count - 1);
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={handleClick}>Increase</button>
      <button onClick={handleClick2}>Decrease</button>
    </div>
  )
}

function Users(){

  const [users, setUsers] = useState([])


  fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => setUsers(data))


  return (
    <div>
      <h1>Dynamic Data : {users.length}</h1>
      <ul>
      {
        users.map((user) => <li>{user.name}</li>)
      }
      </ul>
    </div>
  )
}


function Person(props){
  var {name, job, citizen} = props.info;
  return (
    <div style={{color: "green", border: "2px solid blue", margin: "10px"}}>
      <h1>Name: {name}</h1>
      <h2>{job}</h2>
      <h4>{citizen}</h4>
    </div>
  )
}

export default App;
