import { EXAMPLE_ACTIONS } from 'example/constants/example';
import { Api } from 'common/services/api';

function getExample() {
  return async (dispatch) => {
    dispatch({ type: EXAMPLE_ACTIONS.ACTION_IN_PROCESS });
    try {
      const { data } = await Api.get('http://api.icndb.com/jokes/random', null, true);
      return dispatch({ type: EXAMPLE_ACTIONS.ACTION_SUCCESS, payload: data });
    } catch (e) {
      console.error(e);
      return dispatch({ type: EXAMPLE_ACTIONS.ACTION_FAIL });
    }
  };
}

export { getExample };
