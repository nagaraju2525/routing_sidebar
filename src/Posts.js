import React from 'react';
import axios from 'axios';
import Usertablerow from './Usertablerow';

const baseURL = "https://jsonplaceholder.typicode.com/";

function Posts() {
    var userDetails = []
    const [posts,setPosts] = React.useState([]);

    axios.get(baseURL+"posts").then((res)=>{
        setPosts(res.data)
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
            posts.map((user)=>{
                return <Usertablerow details={user}></Usertablerow>
            })
        }
      </tbody>
  </table>
</div>
}

export default Posts;
