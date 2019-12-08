import { State } from "./context";
import { ADD_USERS, DELETE_USERS } from "./actions";

export function reducer(state: State, action: any) {
    switch (action.type) {
        case ADD_USERS:
            return { 
                ...state, 
                users: state.users.concat(action.payload as string[]) 
            };
        case DELETE_USERS:
            return {
                ...state,
                users: action.payload
            }
        default:
            return state;
    }
};
