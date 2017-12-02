import CourseList from './CourseList';
import Auth from './Auth';

export default class Api {
    constructor (base = '') {
        this.CourseList = new CourseList(base);
        this.Auth = new Auth(base);
    }
}
