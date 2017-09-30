import ApiExample from './ApiExample';

export default class Api {
    constructor (base = '') {
        this.Example = new ApiExample(base);
    }
}
