import React from 'react';
import bemCn from 'bem-cn';
import ReactModal from 'react-modal';
import Button from 'src/components/Button';
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
            <ReactModal isOpen={isOpen} onRequestClose={closeModal}>
                <form>
                    <p><b>Зарегистрируйтесь и начните обучение!</b></p>
                    <input type="text" placeholder="Полное имя"/><br/>
                    <input type="email" placeholder="Электронная почта"/><br/>
                    <input type="password" placeholder="Пароль"/><br/>
                    <Button type="submit">
                        Зарегистрироваться
                    </Button>
                </form>
            </ReactModal>
        );
    }

}

export default ModalRegister;