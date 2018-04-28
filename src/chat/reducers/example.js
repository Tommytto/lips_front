import { EXAMPLE_ACTIONS } from 'example/constants/example';

const initialState = {
  isLoading: false,
  data: {},
  errors: [],
};

const example = (state = initialState, { type, payload }) => {
  switch (type) {
    case EXAMPLE_ACTIONS.ACTION_IN_PROCESS:
      return {
        ...state,
        isLoading: true,
      };

    case EXAMPLE_ACTIONS.ACTION_SUCCESS:
      return {
        ...state,
        data: payload,
        isLoading: false,
      };

    case EXAMPLE_ACTIONS.ACTION_FAIL:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};

export { example };
