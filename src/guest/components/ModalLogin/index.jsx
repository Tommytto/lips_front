import React, {Component} from 'react';
import bemCn from 'bem-cn';
import {Modal} from 'src/modal/index.es';
import {Link} from 'react-router-dom';

import {Button} from 'src/common/index.es';

const block = bemCn('modal-login');


class ModalLogin extends Component {
    constructor() {
        super();
        this.initBem();
    }

    initBem() {

    }

    render () {
        const {bemWrapper, isOpen, closeModal, onSubmit} = this.props;

        return (
            <Modal
                isOpen={isOpen}
                closeModal={closeModal}>
                <form onSubmit={onSubmit}>
                    <p><b>Логин</b></p>
                    <input type="email" placeholder="Электронная почта"/><br/>
                    <input type="password" placeholder="Пароль"/><br/>
                    <Button type="submit">
                        Зарегистрироваться
                    </Button>
                </form>
            </Modal>
        );
    }

}

export {
    ModalLogin,
};