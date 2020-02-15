import React, { useState, useContext } from 'react';
import { UsersContext } from '../../store/context';
import { ADD_USERS } from '../../store/actions';

import './register.css';

const Register: React.FC = () => {
    const [user, setUser] = useState<string>('');
    const context = useContext(UsersContext);

    function eventHandle(e: React.ChangeEvent<HTMLInputElement>) {
        setUser(e.target.value)
    }

    function submit() {
        if(user.trim().length < 5) {
            return;
        }
        context.dispatch({
            type: ADD_USERS,
            payload: user
        })
    }

    return (
        <div>
             <h2>Register</h2>
            <form>
                <div>
                    <label htmlFor="name">
                        Enter Name
                    </label>
                    <input name="name" id="name" type="text" size={15} onChange={eventHandle}/>
                </div>
                <div>
                    <label htmlFor="date">
                        Enter DOB
                    </label>
                    <input id="date" type="date"/>
                </div>
                <input type='button' value="Register" onClick={submit}/>
            </form>
        </div>
    );
};

export default Register;
