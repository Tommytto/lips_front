import { AUTH_MODAL_NAMES } from 'auth/constants/config';
import { ModalLoginContainer } from 'auth/containers/ModalLogin';
import { openModal } from 'modal/actions/modal';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Collapse, Button } from 'reactstrap';

/**
 * Привязка props к store
 *
 // * @param state
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
      openModal,
    },
    dispatch,
  );
}

class GuestHeader extends React.Component {
  static propTypes = {
    openModal: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    const { openModal } = this.props;
    const { isOpen } = this.state;

    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">lips</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Button} onClick={() => openModal(AUTH_MODAL_NAMES.LOGIN_MODAL)}>
                  Login
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/auth/register">Register</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <ModalLoginContainer />
      </div>
    );
  }
}

const GuestHeaderContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(GuestHeader));

export { GuestHeaderContainer };
