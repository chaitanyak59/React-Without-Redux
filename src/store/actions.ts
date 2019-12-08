export interface GlobalAction<T={}> {
 type: string;
 payload?: T;
}

export const ADD_USERS = 'ADD_USER';
export const DELETE_USERS = 'DELETE_USERS';

