import { AUTH_MODAL_NAMES } from 'auth/constants/config';
import { closeModal } from 'modal/actions/modal';
import { ModalContainer } from 'modal/containers/ModalContainer';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

/**
 * Привязка props к store
 *
 * @param state
 * @return {{prop}}
 */
function mapStateToProps(/* state */) {
  return {
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
      closeModal,
    },
    dispatch,
  );
}

class ModalLogin extends React.Component {
  /**
   * Описание свойств.
   * https://facebook.github.io/react/docs/typechecking-with-proptypes.html
   */

  static propTypes = {
    closeModal: PropTypes.func.isRequired,
  };


  /**
   * Отображение компонента
   */
  render() {
    const { closeModal } = this.props;

    return (
      <ModalContainer id="test" closeModal={() => { closeModal(AUTH_MODAL_NAMES.LOGIN_MODAL); }}>
        <div>Login Modal</div>
      </ModalContainer>
    );
  }

  /**
   * Вызывается сразу после render.
   * Не вызывается в момент первого render'а компонента.
   *
   * @param prevProps - Предыдущие свойства.
   * @param prevState - Предыдущее состояние.
   */
  // componentDidUpdate(prevProps, prevState) {}

  /**
   * Вызывается сразу перед тем, как компонент будет удален из DOM.
   */
  // componentWillUnmount () {}
}

const ModalLoginContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(ModalLogin));

export { ModalLoginContainer };
