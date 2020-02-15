import React from 'react';

import {GlobalAction} from './actions';

export interface State {
    users: string[];
}

export const defaultState: State = {
    users: []
};

export const UsersContext = React.createContext({
    state: defaultState,
    dispatch: (action: GlobalAction) => console.log(action)
});