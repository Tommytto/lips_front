import ActionTypes from '../constants/course-list';
import {normalizeCourseList} from '../normalizers/course-list';
import {selectorCourse} from '../selectors/course-list';

function getCourseList(offset, limit) {
    return (dispatch, getState, {api}) => {
        dispatch({type: ActionTypes.COURSE_LIST_LOAD});
        api.CourseList.loadCourseList(offset, limit)
            .then(({data}) => {
                dispatch({type: ActionTypes.COURSE_LIST_LOAD_SUCCESS, payload: normalizeCourseList(data)});
            })
            .catch((error) => {
                dispatch({type: ActionTypes.COURSE_LIST_LOAD_ERROR});
                console.log(error);
            })
    }
}

function getCourse(id) {
    return (dispatch, getState) => {
        selectorCourse(getState(), id);
    }
}

export {
    getCourseList,
    getCourse,
};