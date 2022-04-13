import React from 'react';
import {Link} from 'react-router-dom'
function Usertablerow(props) {
  return (
      <tr>
          <td>{props.details.id ? props.details.id:'N/A'}</td>
          <td>{props.details.name ? props.details.name:'N/A'}</td>
          <td>{props.details.email ? props.details.email:'N/A'}</td>
          <td>{props.details.phone ? props.details.phone:'N/A'}</td>
          <td><Link to={"/User-details"+props.details.id+"/"+props.details.id}></Link>more details</td>
      </tr>
  )
}

export default Usertablerow;
