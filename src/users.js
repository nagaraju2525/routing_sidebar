import React from "react"
import { Link } from "react-router-dom"
export default function Users()
{
    return <div className="card-body">
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
                    <tr className="table-primary">
                        <td>1</td>
                        <td>nagraj</td>
                        <td>nag@email.com</td>
                        <td>46544</td>
                        <td><Link to="/user-details/1/name">more details</Link></td>
                    </tr>
                    <tr className="table-secondary">
                        <td>2</td>
                        <td>neeraj</td>
                        <td>nee@email.com</td>
                        <td>46455544</td>
                        <td><Link to="/">more details</Link></td>
                    </tr>
                    <tr className="table-primary">
                        <td>2</td>
                        <td>ram</td>
                        <td>ram@email.com</td>
                        <td>4656445544</td>
                        <td><Link to="/">more details</Link></td>
                    </tr>
                </tbody>
            </table>
    </div>
}