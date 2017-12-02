import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import bemCn from 'bem-cn';
import './style.less';

//todo bootstrap remove
import 'bootstrap/dist/css/bootstrap.min.css';

import HeaderContainer from '../../containers/HeaderContainer';
import FooterContainer from '../../containers/FooterContainer';
import {ModalLoginContainer} from '../../containers/ModalLoginContainer';
import ModalRegisterContainer from '../../containers/ModalRegisterContainer';
import CoursePreviewList from 'src/common/components/CoursePreviewList';

import {selectorCourseIdList} from 'src/common/index.es';

/**
 * Привязка props к store
 *
 * @param state
 * @return {{prop}}
 */

function mapStateToProps (state) {
    const courseIdList = selectorCourseIdList(state);
    return {
        courseIdList,
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

    }, dispatch);
}

class MainPage extends React.Component {
    constructor() {
        super();
        this.initBem();
    }

    initBem() {
        this.block = bemCn('main-page');
    }

    render () {
        const {courseIdList} = this.props;
        return (
            <div className={this.block()}>
                <HeaderContainer className={this.block("header")}/>
                <main className={this.block('content')()}>
                    <div className={this.block('poster')()} style={{backgroundImage: `url(https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-12018.jpg)`}}>
                    </div>
                    <div className={this.block('poster-text')()}>
                        <h1>
                            Hello World! <br/>
                            Let's improve yourself!
                        </h1>
                    </div>
                    <CoursePreviewList courseIdList={courseIdList}/>
                </main>
                <FooterContainer className={this.block}/>
                <ModalRegisterContainer/>
                <ModalLoginContainer/>
            </div>
        );
    }

}

const MainPageContainer = connect(mapStateToProps, mapDispatchToProps)(MainPage);
export {
    MainPageContainer,
};