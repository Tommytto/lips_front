import { selectorModal } from 'modal/selectors/modal';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Modal } from 'reactstrap';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';


function mapStateToProps(state, { id }) {
  return {
    isOpen: selectorModal(state, id),
  };
}

/**
 * Привязка props к actions
 *
 * @param dispatch
 * @return {{importedAction: *}|B|N}
 */
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
    },
    dispatch,
  );
}

class ModalWrap extends React.Component {
  static propTypes = {
    isOpen: PropTypes.bool,
    closeModal: PropTypes.func.isRequired,
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]).isRequired,
  };

  static defaultProps = {
    className: '',
    isOpen: false,
  };

  render() {
    const {
      closeModal, children, className, isOpen,
    } = this.props;

    return (
      <Modal isOpen={isOpen} toggle={closeModal} className={className}>
        {children}
      </Modal>
    );
  }
}

const ModalContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(ModalWrap));

export { ModalContainer };
