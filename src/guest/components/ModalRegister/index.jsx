import React from 'react';
import bemCn from 'bem-cn';
import {Modal} from 'src/modal/index.es';
import {Button} from 'src/common/index.es';
const block = bemCn('modal-register');


class ModalRegister extends React.Component {
    constructor() {
        super();
        this.initBem();
    }

    initBem() {

    }

    render () {
        const {bemWrapper, isOpen, closeModal} = this.props;

        return (
            <Modal isOpen={isOpen} closeModal={closeModal}>
                <form>
                    <p><b>Зарегистрируйтесь и начните обучение!</b></p>
                    <input type="text" placeholder="Полное имя"/><br/>
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

export default ModalRegister;