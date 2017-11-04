import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {openModal} from '../../actions/modal';

import Header from '../../components/Header';

/**
 * Привязка props к store
 *
 * @param state
 * @return {{prop}}
 */
function mapStateToProps (state) {
    return {

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
        openModal,
    }, dispatch);
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);
export default HeaderContainer;