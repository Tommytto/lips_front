// @flow

type State = Object;
type Action = {
    type: string,
    payload?: string,
};

const initialState: State = {};

function mainReducer(state: State = initialState, action: Action): State {
    switch (action.type) {
        default:
            return state;
    }
}

export { mainReducer };
