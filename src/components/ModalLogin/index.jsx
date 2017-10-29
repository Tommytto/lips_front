import React from 'react';
import bemCn from 'bem-cn';
import ReactModal from 'react-modal';
const block = bemCn('modal-login');


class ModalLogin extends React.Component {
    constructor() {
        super();
        this.initBem();
    }

    initBem() {

    }

    render () {
        const {bemWrapper, isOpen, closeModal} = this.props;

        return (
            <ReactModal
                isOpen={isOpen}
                onRequestClose={closeModal}>
                Login is here!
            </ReactModal>
        );
    }

}

export default ModalLogin;