import {ActionTypes} from 'src/constants/modal';

const initialState = {};

export default function modal(state = initialState, {type, payload}) {
    switch (type) {
        case ActionTypes.OPEN_MODAL:
            return {
                ...state,
                [payload]: true,
            };
        case ActionTypes.CLOSE_MODAL:
            return {
                ...state,
                [payload]: false,
            };
        default:
            return state;
    }
}