import React, { useState } from 'react';
import axios from 'axios';

const DeleteRegister = () => {
  const [id, SetId] = useState('');
   

  const handleDelete = () => {
    axios.delete(`http://localhost:8080/deleteRegister?id=${id}`)
      .then(response => {
        alert('Deleted successfully!');
        SetId('');
         
      })
      .catch(error => {
        alert('Failed');
        console.error(error);
      });
  };

  return (
    <div className='row'>
      <h1>Delete</h1>
      <form>                                                                                                                                                              ````````````````````````````````````````````````````
        <div>
          <label htmlFor="id">Id:</label>
          <input
            type="text"
            id="id"
            value={id}
            onChange={event => SetId(event.target.value)}
          />
        </div><br></br>
         
        <button type="button" onClick={handleDelete}>Delete</button>
      </form>
        {/* <input type="submit"/> */}
    </div>
  );
};
export default DeleteRegister;