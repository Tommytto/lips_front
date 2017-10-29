import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import ModalLogin from 'src/components/ModalLogin';
import {ModalTypes} from 'src/constants/modal'
import {closeModal} from 'src/actions/modal'


/**
 * Привязка props к store
 *
 * @param state
 * @return {{prop}}
 */
function mapStateToProps (state) {
    return {
        isOpen: state.modal[ModalTypes.LOGIN],
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
        closeModal: () => closeModal(ModalTypes.LOGIN),
    }, dispatch);
}

const ModalLoginContainer = connect(mapStateToProps, mapDispatchToProps)(ModalLogin);
export default ModalLoginContainer;