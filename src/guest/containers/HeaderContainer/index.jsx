import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import bemCn from 'bem-cn';

import {openModal} from 'src/modal/index.es';
import {Header as CommonHeader, Button} from 'src/common/index.es';
import {ModalTypes} from '../../constants/config.es';

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

class Header extends Component {
    constructor() {
        super();

        this.initBem();
    }

    initBem() {
        this.block = bemCn('guest-header');
    }

    render() {
        const {openModal} = this.props;

        return (
            <CommonHeader>
                <div className="cart-icon">
                    <span className="glyphicon glyphicon-shopping-cart"/>
                </div>
                <Button bemWrapper={this.block} onClick={() => openModal(ModalTypes.LOGIN)}>Войти</Button>
                <Button bemWrapper={this.block} onClick={() => openModal(ModalTypes.REGISTER)}>Зарегистрироваться</Button>
            </CommonHeader>
        )
    }
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);
export default HeaderContainer;