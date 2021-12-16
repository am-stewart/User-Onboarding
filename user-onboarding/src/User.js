import React from 'react';

function User ({ details }) {
  if (!details) {
    return <h4>Working on finding other users...</h4>
  }

return (
  <div className='user container'>
    <h3>{details.first_name}</h3>
    <p>{details.email}</p>
    <button id='deleteBtn'>Delete</button>
  </div>
 )
}

export default User;