import { EXAMPLE_MODULE_NAME } from 'example/constants/config';


function selectExampleState(state) {
  return state[EXAMPLE_MODULE_NAME].example;
}

function selectExampleData(state) {
  return selectExampleState(state).data;
}

export { selectExampleState, selectExampleData };
