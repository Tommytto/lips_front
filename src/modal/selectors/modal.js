import { MODAL_MODULE_NAME } from '../constants/config';

function selectorModalState(state) {
  return state[MODAL_MODULE_NAME].modal;
}

function selectorModal(state, modalKey) {
  return selectorModalState(state)[modalKey];
}

export { selectorModalState, selectorModal };
