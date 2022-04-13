import React from 'react';
import axios from 'axios';
import Usertablerow from './Usertablerow';

const baseURL = "https://jsonplaceholder.typicode.com/";

function Todos() {
    var userDetails = []
    const [todos,setTodos] = React.useState([]);

    axios.get(baseURL+"todos").then((res)=>{
        setTodos(res.data)
    })
  return  <div className="card-body">
  <table className="table">
      <thead>
      <tr className="table-dark">
          <th>id</th>
          <th>name</th>
          <th>email</th>
          <th>phone</th>
          <th>action</th>
      </tr>
      </thead>
      <tbody>
        {
            todos.map((user)=>{
                return <Usertablerow details={user}></Usertablerow>
            })
        }
      </tbody>
  </table>
</div>
}

export default Todos;