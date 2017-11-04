import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import ModalLogin from '../../components/ModalLogin';
import {ModalTypes} from '../../constants/modal'
import {closeModal} from '../../actions/modal'


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