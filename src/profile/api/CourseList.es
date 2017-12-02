import BaseApi from './BaseApi';
import json from 'src/json/course-list.json';

export default class CourseList extends BaseApi {
    loadCourseList(offset, limit) {
        // return this.request('/json/course-list.json', 'GET', {offset, limit})
        return new Promise((resolve) => resolve(json[0]))
    }
};