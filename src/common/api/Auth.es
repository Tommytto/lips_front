import BaseApi from 'src/common/api/BaseApi';

export default class Auth extends BaseApi {
    get () {
        return this.request('/app-data.json', 'GET');
    }

    create (data) {
        return this.request('/app-data.json', 'CREATE', data);
    }

    update (data) {
        return this.request('/app-data.json', 'PUT', data);
    }

    delete (data) {
        return this.request('/app-data.json', 'DELETE', data);
    }

    auth(data) {
        return true;
    }
};