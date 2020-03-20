import React from 'react';
import './ButtonFetchUsers.css'
const ButtonFetchUsers = (props) => {
  return (
    <button onClick={props.click}>Add user</button>
  );
}

export default ButtonFetchUsers;