import React from 'react';
import bemCn from 'bem-cn';

import './style.less'
import Button from 'src/components/Button';
import {ModalTypes} from 'src/constants/modal'
const block = bemCn('header');


class Header extends React.Component {
    constructor() {
        super();
        this.initBem();
    }

    initBem() {
        this.cartIcon = block('cart-icon')
    }

    render () {
        const {bemWrapper, openModal} = this.props;

        return (
            <header className={bemWrapper ? block.mix(bemWrapper(block())) : block()}>
                <div className={this.cartIcon()}>
                    <span className="glyphicon glyphicon-shopping-cart"></span>
                </div>
                <Button bemWrapper={block} onClick={() => openModal(ModalTypes.LOGIN)}>Войти</Button>
                <Button bemWrapper={block} onClick={() => openModal(ModalTypes.REGISTER)}>Зарегистрироваться</Button>
            </header>
        );
    }

}

export default Header;