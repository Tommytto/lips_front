// @flow
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logout, login } from 'actions/auth';
import { isLogin } from 'selectors/auth';

interface Props {
    isLogin: boolean;
    login: Function;
    logout: Function;
}

function mapStateToProps(state) {
    return {
        isLogin: isLogin(state),
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ login, logout }, dispatch);
}

const Header = ({ isLogin, login, logout }: Props) => (
    <div>
        <button onClick={!isLogin ? login : logout}>
            {!isLogin ? 'login' : 'logout'}
        </button>
    </div>
);

const HeaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);

export { HeaderContainer };
