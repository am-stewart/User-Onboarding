import React from 'react';

function User ({ details }) {
  if (!details) {
    return <h4>Working on finding other users...</h4>
  }

return (
  <div className='user container'>
    <h3>Name: {details.first_name}</h3>
    <p>Email: {details.email}</p>
  </div>
 )
}

export default User;