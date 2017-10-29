import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import ModalRegister from 'src/components/ModalRegister';
import {ModalTypes} from 'src/constants/modal';
import {closeModal} from 'src/actions/modal';

/**
 * Привязка props к store
 *
 * @param state
 * @return {{prop}}
 */
function mapStateToProps (state) {
    return {
        isOpen: state.modal[ModalTypes.REGISTER],
    };
}

/**
 * Привязка props к actions
 *
 * @param dispatch
 * @return {{importedAction: *}|B|N}
 */
function mapDispatchToProps (dispatch) {
    return bindActionCreators({
        closeModal: () => closeModal(ModalTypes.REGISTER),
    }, dispatch);
}

const ModalRegisterContainer = connect(mapStateToProps, mapDispatchToProps)(ModalRegister);
export default ModalRegisterContainer;