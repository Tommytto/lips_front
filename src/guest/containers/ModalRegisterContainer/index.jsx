import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import ModalRegister from '../../components/ModalRegister';
import {ModalTypes} from '../../constants/config.es';
import {closeModal, selectorModal} from 'src/modal/index.es';

/**
 * Привязка props к store
 *
 * @param state
 * @return {{prop}}
 */
function mapStateToProps (state) {
    return {
        isOpen: selectorModal(state, ModalTypes.REGISTER),
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