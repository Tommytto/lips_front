import React from 'react';
import './style.less';
import ReactModal from 'react-modal';

class Modal extends React.Component {
    componentWillMount() {
        ReactModal.setAppElement('body');
    }

    render() {
        const {isOpen, closeModal, children} = this.props;
        console.log(this.props);
        return (
            <ReactModal
                isOpen={isOpen}
                onRequestClose={closeModal}>
                {children}
            </ReactModal>
        )
    }
}

export {
    Modal,
};