// @flow
import { LOGIN, LOGOUT } from 'reducers/auth';

function login() {
    return { type: LOGIN };
}

function logout() {
    return { type: LOGOUT };
}

export { login, logout };
