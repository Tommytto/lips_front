// @flow
import { authModuleName } from 'reducers/auth';
import type { AuthStateType, AuthModuleNameType } from 'reducers/auth';

type State = {
    [AuthModuleNameType]: AuthStateType,
};

function isLogin(state: State) {
    return state[authModuleName].isLogin;
}

export { isLogin };
