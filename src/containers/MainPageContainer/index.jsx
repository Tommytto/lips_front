import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import bemCn from 'bem-cn';
import './style.less';
//todo bootstrap remove
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderContainer from 'src/containers/HeaderContainer';
import FooterContainer from 'src/containers/FooterContainer';
import ModalLoginContainer from 'src/containers/ModalLoginContainer';
import ModalRegisterContainer from 'src/containers/ModalRegisterContainer';

const block = bemCn('main-page');

/**
 * Привязка props к store
 *
 * @param state
 * @return {{prop}}
 */
function mapStateToProps (state) {
    return {
        // example: state.example,
    };
}

/**
 * Привязка props к actions
 *
 * @param dispatch
 * @return {{importedAction: *}|B|N}
 */
function mapDispatchToProps (dispatch) {
    return bindActionCreators({
        // exampleSimple,
        // exampleGet,
        // exampleCreate,
        // exampleUpdate,
        // exampleDelete,
    }, dispatch);
}

class MainPageContainer extends React.Component {
    constructor() {
        super();
        this.initBem();
    }

    initBem() {
        this.content = block('content');
    }

    render () {
        return (
            <div className={block()}>
                <HeaderContainer bemWrapper={block}/>
                <main className={this.content()}>

                </main>
                <FooterContainer bemWrapper={block}/>
                <ModalRegisterContainer/>
                <ModalLoginContainer/>
            </div>
        );
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(MainPageContainer);