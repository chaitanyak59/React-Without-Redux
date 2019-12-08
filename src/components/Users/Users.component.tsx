import React, { useContext } from 'react';
import { UsersContext } from '../../store/context';
import { DELETE_USERS } from '../../store/actions';

const Users: React.FC = () => {
  const {state, dispatch} = useContext(UsersContext);

  function deleteUser(index: number) {
    const invalidUser = state.users[index]
    const finalUsers = state.users.filter(user => user !== invalidUser)
    dispatch({
        type: DELETE_USERS,
        payload: finalUsers
    })
  }

  return (
    <div>
        {state.users.length ? <i>Click on Item to Delete..</i> : <i>No Users. Please register from Home Page</i>}
        <ul>
            {state.users.map((value, i) => <li key={i} onClick={() => deleteUser(i)}>{value}</li>)}
        </ul>
    </div>
  );
}

export default Users;
