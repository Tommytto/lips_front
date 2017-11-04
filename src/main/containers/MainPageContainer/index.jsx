import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import bemCn from 'bem-cn';
import './style.less';

//todo bootstrap remove
import 'bootstrap/dist/css/bootstrap.min.css';

import HeaderContainer from '../../containers/HeaderContainer';
import FooterContainer from '../../containers/FooterContainer';
import ModalLoginContainer from '../../containers/ModalLoginContainer';
import ModalRegisterContainer from '../../containers/ModalRegisterContainer';
import CoursePreviewList from 'src/common/components/CoursePreviewList';

import {selectorCourseIdList} from 'src/common/selectors/course-list';

const block = bemCn('main-page');

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

class MainPageContainer extends React.Component {
    constructor() {
        super();
        this.initBem();
    }

    initBem() {
        this.content = block('content');
        this.poster = block('poster');
        this.posterText = block('poster-text');
    }

    render () {
        const {courseIdList} = this.props;
        return (
            <div className={block()}>
                <HeaderContainer bemWrapper={block}/>
                <main className={this.content()}>
                    <div className={this.poster()} style={{backgroundImage: `url(https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-12018.jpg)`}}>
                    </div>
                    <div className={this.posterText()}>
                        <h1>
                            Hello World! <br/>
                            Let's improve yourself!
                        </h1>
                    </div>
                    <CoursePreviewList courseIdList={courseIdList}/>
                </main>
                <FooterContainer bemWrapper={block}/>
                <ModalRegisterContainer/>
                <ModalLoginContainer/>
            </div>
        );
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(MainPageContainer);