import React from 'react';
import ReactModal from 'react-modal';

import PropTypes from 'prop-types';
import './style.scss';

class Modal extends React.Component {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]).isRequired,
  };

  componentWillMount() {
    ReactModal.setAppElement('body');
  }

  render() {
    const { isOpen, closeModal, children } = this.props;
    return (
      <ReactModal isOpen={isOpen} onRequestClose={closeModal}>
        {children}
      </ReactModal>
    );
  }
}

export { Modal };
