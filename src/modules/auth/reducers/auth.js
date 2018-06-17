// @flow

type AuthStateType = {
    isLogin: boolean,
};
type AuthAction = {
    type: string,
    payload?: string,
};
type AuthModuleNameType = 'auth';

const authModuleName: AuthModuleNameType = 'auth';
const LOGIN = 'AUTH/LOGIN';
const LOGOUT = 'AUTH/LOGOUT';

const initialState: AuthStateType = {
    isLogin: false,
};

function authReducer(
    state: AuthStateType = initialState,
    action: AuthAction
): AuthStateType {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isLogin: true,
            };

        case LOGOUT:
            return {
                ...state,
                isLogin: false,
            };

        default:
            return state;
    }
}

export { authReducer, authModuleName, LOGIN, LOGOUT };
export type { AuthStateType, AuthModuleNameType };
