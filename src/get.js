import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
function View() {
 
    const [register, setRegister] = useState([]);
 
    useEffect(() => {
        axios.get('http://localhost:8080/getvalues')
            .then(response => {
                setRegister(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
 
    return (
        <div className='table'>
            <h1>Register</h1>
            <table className='padding-table-columns'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>

                    </tr>
                </thead>
                <tbody>
                    {register.map(register => (
                        <tr>
                            <td>{register.id}</td>
                            <td>{register.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
        <ul>
                  <li>
      <Link to='/'>home</Link></li>
      <li><Link to='/get'>get</Link></li>
      <li><Link to="/put">put</Link></li>
      
      </ul>
      </div>
        </div>
    );
 
}
 
export default View;