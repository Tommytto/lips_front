import React from 'react';

import PropTypes from 'prop-types';
import './style.scss';

class Modal extends React.Component {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]).isRequired,
  };

  static defaultProps = {
    className: '',
  }

  render() {
    const {
      isOpen, closeModal, children, className,
    } = this.props;
    return (
      <Modal isOpen={isOpen} closeModal={closeModal} className={className}>
        {children}
      </Modal>
    );
  }
}

export { Modal };
